import Banner from "../../common/Banner";
import CommonRoot from "../../common/CommonRoot";
import MainMenu from "../main/MainMenu";
import CakeReservation from "../../images/Logo/CakeReservation.png";
import Rental from "../../images/Logo/RentalReservation.png";
import styled from "styled-components";
const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: bold;
  color: ${(props) => props.theme.color.black};
  margin-bottom: 10px;
`;
const ContentWrapper = styled.div`
  padding-bottom: 100px;
`;
function reservation() {
  return (
    <CommonRoot>
      <Banner />
      <Heading>Reservation</Heading>

      <ContentWrapper>
        <MainMenu
          marginTop="100px"
          imgSrc={CakeReservation}
          imgAlt="cake"
          heading="Cake Resevation"
          description="“소중한 날, 달콤하게 빛나는 기억으로”"
          text="more"
          $borderColor="transparent"
          fontSize="20px"
        />
        <MainMenu
          marginTop="180px"
          imgSrc={Rental}
          imgAlt="retal"
          heading="Rental Resevation"
          description="“소중한 시간을 위한, 
따뜻한 위로와 힐링의 공간을 준비해 드립니다”"
          text="more"
          $borderColor="transparent"
          fontSize="20px"
        />
      </ContentWrapper>
    </CommonRoot>
  );
}

export default reservation;
