import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import styled from '@emotion/styled';
import TextContent from '../components/TextContent';

const swiperImgs: string[] = [
  '/images/painting1.1.jpeg',
  '/images/painting2.1.jpeg',
  '/images/painting3.1.jpeg',
];

const PageSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const SliderWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  max-height: 680px;
  position: relative;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    height: calc(100vh - 60px); /* Adjust for smaller navbar on mobile */
    max-height: 400px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 750px;
  max-height: 680px;
  object-fit: cover;
  object-position: center;
`;

const Home = () => {
  return (
    <PageSection>
      <SliderWrapper>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
        >
          {swiperImgs.map((src, index) => (
            <SwiperSlide key={index}>
              <StyledImage
                src={`${process.env.PUBLIC_URL}` + src}
                alt={`Artwork ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderWrapper>
      <TextContent />
    </PageSection>
  );
};

export default Home;
