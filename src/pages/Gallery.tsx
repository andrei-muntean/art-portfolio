// src/pages/Gallery.tsx
import React from 'react';
import styled from '@emotion/styled';

const GalleryContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8; /* Light background color for the gallery */
`;

const GalleryContent = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  text-align: center;
`;

const GalleryItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaceholderText = styled.div`
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
`;

const Gallery: React.FC = () => {
  return (
    <GalleryContainer>
      <GalleryContent>
        {/* Placeholder content instead of images */}
        <GalleryItem>
          <PlaceholderText>Item 1</PlaceholderText>
        </GalleryItem>
        <GalleryItem>
          <PlaceholderText>Item 2</PlaceholderText>
        </GalleryItem>
        <GalleryItem>
          <PlaceholderText>Item 3</PlaceholderText>
        </GalleryItem>
        {/* Add more items as needed */}
      </GalleryContent>
    </GalleryContainer>
  );
};

export default Gallery;
