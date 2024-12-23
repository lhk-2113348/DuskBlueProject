import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Styled Swiper
const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 400px;
  border: 1px solid black;
`;

// Styled SwiperSlide
const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  color: #333;
`;

const SwiperComponent = () => (
  <StyledSwiper
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log("Slide changed")}
    onSwiper={(swiper) => console.log("Swiper instance", swiper)}
  >
    <StyledSwiperSlide>Slide 1</StyledSwiperSlide>
    <StyledSwiperSlide>Slide 2</StyledSwiperSlide>
    <StyledSwiperSlide>Slide 3</StyledSwiperSlide>
    <StyledSwiperSlide>Slide 4</StyledSwiperSlide>
  </StyledSwiper>
);

export default SwiperComponent;
