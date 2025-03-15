import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import styled from '@emotion/styled';
import Navbar from '../components/Navbar';

const FullScreenSlider = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

const StyledSlide = styled(SwiperSlide)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Home: React.FC = () => {
  return (
    <FullScreenSlider>
      {/* Use Navbar component here */}
      <Navbar />

      {/* Fullscreen Image Slider */}
      <StyledSwiper
        effect='fade'
        modules={[EffectFade, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
      >
        {['/images/art1.jpg', '/images/art2.jpg', '/images/art3.jpg'].map(
          (src, index) => (
            <StyledSlide key={index}>
              <img
                src={`${process.env.PUBLIC_URL}` + src}
                alt={`Artwork ${index + 1}`}
              />
            </StyledSlide>
          )
        )}
      </StyledSwiper>
    </FullScreenSlider>
  );
};

export default Home;
