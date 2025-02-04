import { useCallback, useEffect, useState } from "react";
import { ReactComponent as IntroBanner } from "../images/Banner/IntroBanner.svg";
import { ReactComponent as SeasonBanner } from "../images/Banner/SeasonBanner.svg";
import { ReactComponent as CakeBanner } from "../images/Banner/CakeBanner.svg";
import styled from "styled-components";
import LeftButton from "../images/Icons/leftButton.png";
import RightButton from "../images/Icons/RightButton.png";
import { Link } from "react-router-dom";

const MainBanner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  margin-top: 100px;

  @media (max-width: 1024px) {
    margin-top: 80px;
  }

  @media (max-width: 768px) {
    margin-top: 60px;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
    height: 200px;
  }
`;
const BannerImage = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  object-fit: contain;
  overflow: hidden;
  svg {
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 480px) {
    height: 150px;
  }
`;
const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 2;
  background: none;
  border: none;
  cursor: pointer;
  transform: translateY(-50%);
  display: ${(props) => (props.visible ? "block" : "none")};

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 768px) {
    img {
      width: 40px;
      height: 40px;
    }
    left: 5%;
    right: 5%;
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: 10%;
`;

const RightArrow = styled(ArrowButton)`
  right: 10%;
`;

const MoreButton = styled(Link)`
  position: absolute;
  top: 70%; 
  left: 85%; 
  transform: translate(-50%, -50%); /* To perfectly center it */
  padding: 10px 20px;
  background-color: transparent;
  color: white;
  font-size: 1.2em;
  text-decoration: none;
  z-index: 3;
  display: ${(props) => props.display || "block"};
  &:hover {
    color: #d3d3d3;
  }

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }

}
`;

const Banner = () => {
  const images = [
    <IntroBanner key="intro" />,
    <SeasonBanner key="season" />,
    <CakeBanner key="cake" />,
  ];
  const [img, setImg] = useState(0);
  const [display, setDisplay] = useState("none");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const imgChangeLeft = useCallback(() => {
    setImg((prevImg) => (prevImg - 1 + images.length) % images.length); // 이전 이미지로
  }, [images.length]);

  const imgChangeRight = useCallback(() => {
    setImg((prevImg) => (prevImg + 1) % images.length); // 다음 이미지로
  }, [images.length]);

  const buttonDisplayOn = () => setDisplay("block");
  const buttonDisplayOff = () => setDisplay("none");
  useEffect(() => {
    const interval = setInterval(() => {
      imgChangeRight(); // 5초마다 자동으로 이미지를 오른쪽으로 변경
    }, 5000);
    return () => clearInterval(interval); // 컴포넌트가 언마운트 될 때 인터벌 정리
  }, [imgChangeRight]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isMobile && (
        <MainBanner
          onPointerOver={buttonDisplayOn}
          onPointerOut={buttonDisplayOff}
        >
          <LeftArrow onClick={imgChangeLeft} display={display}>
            <img src={LeftButton} alt="LeftButton" />
          </LeftArrow>
          <BannerImage>
            {images[img]}
            {img === 0 && <MoreButton to="/introduction">more</MoreButton>}
            {img === 1 && <MoreButton to="/menu/season">more</MoreButton>}
            {img === 2 && <MoreButton to="/reservation">more</MoreButton>}
          </BannerImage>
          <RightArrow onClick={imgChangeRight} display={display}>
            <img src={RightButton} alt="RightButton" />
          </RightArrow>
        </MainBanner>
      )}
    </>
  );
};
export default Banner;
