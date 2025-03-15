import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import TextLinesDisplay from '../components/TextLinesDisplay';

const paintingsData = [
  {
    src: '/images/painting1.1.jpeg',
    alt: 'Painting 1',
    description: 'A beautiful landscape painting.',
  },
  {
    src: '/images/painting1.2.jpeg',
    alt: 'Painting 2',
    description: 'A stunning portrait artwork.',
  },
  {
    src: '/images/painting2.1.jpeg',
    alt: 'Painting 3',
    description: 'An abstract piece of art.',
  },
  {
    src: '/images/painting2.2.jpeg',
    alt: 'Painting 4',
    description: 'A modern interpretation of nature.',
  },
  {
    src: '/images/painting3.1.jpeg',
    alt: 'Painting 5',
    description: 'A vibrant and colorful cityscape.',
  },
];

const textLines: string[] = [
  'This collection of paintings explores the intersection of nature and human emotion. The series begins with serene landscapes that evoke feelings of peace and calm, gradually transitioning to more intense, emotional portraits that capture the depth of human experience. The collection also features vibrant abstract works, where bold colors and shapes come together to express raw energy and movement. A few still life pieces are included, showcasing the delicate beauty of everyday objects, while others focus on the stark contrast between light and shadow in cityscapes and seascapes. Each piece invites the viewer to explore the nuanced relationship between color, form, and feeling.',
];

// Item component with forwardRef
const Item = React.forwardRef((props: any, ref: React.Ref<any>) => {
  const { style, children } = props;
  const ItemWrapper = styled.div`
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    opacity: 0;
    transform: translateY(50px);

    &.visible {
      opacity: 1;
      transform: translateY(0);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  `;

  return (
    <ItemWrapper ref={ref} style={style}>
      {children}
    </ItemWrapper>
  );
});

const PaintingsPage = () => {
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      padding: 20px 0px;
    }
  `;

  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1200px;
  `;

  const Image = styled.img`
    width: 100%;
    height: 350px;
    object-fit: cover;
  `;

  const Description = styled.p`
    padding: 10px;
    font-size: 16px;
    color: #333;
    text-align: center;
  `;

  // Create refs for all painting items
  const itemRefs = useRef([] as any);

  useEffect(() => {
    // Set up the refs array
    itemRefs.current = itemRefs.current.slice(0, paintingsData.length);

    // Create the observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once the animation has played, we can stop observing this element
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1, // Trigger when at least 10% of the item is visible
      }
    );

    // Observe all the item elements
    itemRefs.current.forEach((item: any) => {
      if (item) {
        observer.observe(item);
      }
    });

    // Clean up
    return () => {
      itemRefs.current.forEach((item: any) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  return (
    <>
      <TextLinesDisplay mainLine='Description' textLines={textLines} />
      <Container>
        <Grid>
          {paintingsData.map((painting, index) => (
            <Item
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              style={{
                // Stagger the initial delay of each item's animation
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <Image
                src={`${process.env.PUBLIC_URL}${painting.src}`}
                alt={painting.alt}
              />
              <Description>{painting.description}</Description>
            </Item>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default PaintingsPage;
