import styled from "styled-components";
import Banner from "../../common/Banner";
import CommonRoot from "../../common/CommonRoot";
import InfoSection from "./InfoSection";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 300px 40px;
`;
const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: bold;
  color: ${(props) => props.theme.color.black};
  margin-bottom: 10px;
`;
const InfoWrapper = styled.div`
  display: block;
  margin-top: 20px;
`;
function information() {
  return (
    <CommonRoot>
      <MainContainer>
        <Banner />
        <Heading>Information</Heading>
        <InfoWrapper>
          <InfoSection text="http://instagram.com/duskblue_cafe" />
          <InfoSection text="070-4243-3264" />
          <InfoSection text="영업 시간 12:00~00:00" />
          <InfoSection text="포장만 가능합니다. (단, 칵테일은 매장에서만 이용 가능합니다. (포장불가))" />
          <InfoSection text="주차는 매장 건물 앞에 가능합니다" />
          <InfoSection text="만석시 이용시간 2시간으로 제한합니다" />
          <InfoSection text="반려동물 출입 가능합니다. " />
        </InfoWrapper>
      </MainContainer>
    </CommonRoot>
  );
}

export default information;
