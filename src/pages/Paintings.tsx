import React from 'react';
import styled from '@emotion/styled';

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

const Paintings = () => {
  return (
    <Container>
      <Grid>
        {paintingsData.map((painting, index) => (
          <Item key={index}>
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

const Container = styled.div`
  width: 100%;
  padding: 40px 0px;
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const Item = styled.div`
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
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

export default Paintings;
