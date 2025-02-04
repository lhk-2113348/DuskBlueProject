import styled from "styled-components";

import CommonButton from "../../common/CommonButton";
import CommonHr from "../../common/StyledHr";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 37px;
  width: 100%;
  height: 400px; // 배너 높이 조정
  gap: 50px;
    @media (max-width: 768px){
   flex-direction: column;
    height: auto;
    text-align: center;
    gap: 20px;
  }
`;

const MainContent = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
   @media (max-width: 768px) {
    align-items: center;
    width: 90%;
  }
`;
const MainImage = styled.img`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
         @media (max-width: 480px) {
    width: 80%;
`;
const SubHeading = styled.h2`
  font-size: ${(props) => props.theme.fontSize.lg};
  color: ${(props) => props.theme.color.black};
  margin-bottom: -10px;
  margin-top: -5px;
   @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.md};
  }
     @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fontSize.base};
  }
`;
const Description = styled.p`
  font-size: ${(props) => props.theme.fontSize.md};
  color: #333;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.sm};
  }

  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fontSize.xs};
  }
`;
const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: bold;
  color: ${(props) => props.theme.color.black};
  margin-bottom: -5px;
    @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.lg};
  }

  @media (max-width: 480px) {
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;

const MainMenu2 = ({
  imgSrc,
  imgAlt,
  heading,
  subHeading,
  description,
  onClick,
  fontSize,
  width,
}) => {
  return (
    <MainContainer>
      <MainContent>
        <Heading>{heading}</Heading>
        <CommonHr />
        <SubHeading>{subHeading}</SubHeading>
        <Description dangerouslySetInnerHTML={{ __html: description }} />

        <CommonButton
          text="자세히보기"
          color="black"
          $borderColor="black"
          fontSize={fontSize}
          $borderRadius="30px"
          hoverColor="#D3D3D3"
          hoverBk="transparent"
          width={width}
          height="35px"
          onClick={onClick}
        />
      </MainContent>
      <MainImage src={imgSrc} alt={imgAlt} />
    </MainContainer>
  );
};
export default MainMenu2;
