import React from 'react';
import styled from '@emotion/styled';
import Footer from './Footer';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: white;
  overflow-x: hidden;
`;

const ContentContainer = styled.div`
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
  flex-grow: 1; /* Allows content to push footer down */
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 0px;
`;

const BaseContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <PageWrapper>
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </PageWrapper>
  );
};

export default BaseContainer;
