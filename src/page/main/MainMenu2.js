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
`;

const MainContent = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;
const MainImage = styled.img`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
const SubHeading = styled.h2`
  font-size: ${(props) => props.theme.fontSize.lg};
  color: ${(props) => props.theme.color.black};
  margin-bottom: 20px;
`;
const Description = styled.p`
  font-size: ${(props) => props.theme.fontSize.md};
  color: #333;
  margin-bottom: 20px;
`;
const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: bold;
  color: ${(props) => props.theme.color.black};
  margin-bottom: 10px;
`;

const MainMenu2 = ({ imgSrc, imgAlt, heading, subHeading, description }) => {
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
          fontSize="12px"
          $borderRadius="30px"
          hoverColor="#D3D3D3"
          hoverBk="transparent"
          width="130px"
          height="35px"
        />
      </MainContent>
      <MainImage src={imgSrc} alt={imgAlt} />
    </MainContainer>
  );
};
export default MainMenu2;
