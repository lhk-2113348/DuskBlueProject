import styled from "styled-components";
import CommonRoot from "../../common/CommonRoot";
import IntroImg from "../../images/Logo/IntroBackground.png";
import CommonHr from "../../common/StyledHr";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 300px 40px;
`;
const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;
const Heading = styled.h2`
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: bold;
  margin-bottom: 20px;
`;
const SubHeading = styled.h2`
  font-size: 30px;
  color: ${(props) => props.theme.color.black};
  margin-bottom: 10px;
`;
const IntroImage = styled.img`
  width: 80%;
  height: auto;
  margin-bottom: 20px; /* 이미지와 내용 사이의 간격 */
`;
const Description = styled.p`
  margin-top: 20px;
  font-size: 30px;
  color: ${(props) => props.theme.color.black};
  text-align: center; // 텍스트를 가운데 정렬
`;
function duskBlue() {
  return (
    <CommonRoot>
      <MainContainer>
        <Heading>Introduction</Heading>
        <IntroContainer>
          <IntroImage src={IntroImg} alt="intro" />
          <SubHeading>Dusk Blue</SubHeading>

          <CommonHr $width="50%" />
          <Description>
            “Dusk Blue”는 하루의 끝, 해질녘의 울적함을 위로할수 있는 공간이란
            의미로 <br /> 특별한 음료들로, 맛과 위로가 어우러지는 공간을
            제공하기 위해 언제나 정성을 다하고 있습니다.
            <br />
            "Duskblue"는 '건강하게 맛있게'라는 모토를 바탕으로, <br />
            모든 음료에 정제되지 않은 자연에 가까운 비정제 설탕과 설탕 수수
            원액을 사용하며,
            <br /> 매일 매장에서 신선하게 만든 디저트만을 제공합니다.
            <br />
            이곳에서 우리는 맛뿐만 아니라, 건강까지 고려한 음료와 디저트를 통해
            여러분에게 <br />
            더욱 풍요로운 일상을 선물하고자 합니다. <br />
            하루의 끝, 해질녘의 고단함과 울적한 마음을 달래는 “Duskblue”는
            <br /> 단순히 음료를 제공하는 공간을 넘어, <br /> 마음의 여유와
            위로를 찾을 수 있는 특별한 장소가 될 것입니다.
            <br />매 순간을 소중히 여기며, <br /> 여러분의 일상 속에서 작은 쉼과
            기쁨을 선사하는 곳으로 기억될 수 있도록, <br />
            언제나 최선을 다해 노력하겠습니다.
          </Description>
        </IntroContainer>
      </MainContainer>
    </CommonRoot>
  );
}

export default duskBlue;
