import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

export type PaintingDataProps = {
  src: string;
  alt: string;
  description: string;
};

export type GaleryGridDisplayProps = {
  paintingsData: PaintingDataProps[];
};

const GaleryGridDisplay = ({ paintingsData }: GaleryGridDisplayProps) => {
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
    if (!paintingsData) {
      return;
    }
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
  }, [paintingsData]);

  return (
    <Container>
      <Grid>
        {paintingsData.map((painting, index) => (
          <Item
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            style={{
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
  );
};

export default GaleryGridDisplay;
