import Banner from "../../common/Banner";
import CommonRoot from "../../common/CommonRoot";
import MainMenu from "../main/MainMenu";
import CakeReservation from "../../images/Logo/CakeReservation.png";
import Rental from "../../images/Logo/RentalReservation.png";
import styled from "styled-components";
import Dialog from "../../common/Dialog";
import instagram from "../../images/Icons/Instagram.png";
import call from "../../images/Icons/WhiteCall.png";
import Alarm from "../../images/Icons/WhiteAlarm.png";
import Bag from "../../images/Icons/Bag.png";
import PhotoGrid from "../../common/photogrid";
import InfoSection from "../information/InfoSection";
import React, { useState } from "react";
import RentalServicesImg from "../../images/Logo/RentalReseravtionDialog.png";
const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: bold;
  color: ${(props) => props.theme.color.black};
  margin-bottom: 10px;
`;
const ContentWrapper = styled.div`
  padding-bottom: 100px;
`;
const InfoContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;
const InfoInnerContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const styleProps = {
  color: "white",
  fontSize: "16px",
  $marginTop: "0px",
};
const links = [
  {
    emojiSrc: instagram,
    text: "http://instagram.com/duskblue_cafe",
  },
  {
    emojiSrc: call,
    text: "000-0000-0000",
  },
  {
    emojiSrc: Alarm,
    text: "픽업 날짜에서 최대 하루 전에 주문해주셔야 합니다 : )",
  },
  {
    emojiSrc: Alarm,
    text: "간단한 문구 레터링 가능합니다 (2000원추가)",
  },
  {
    emojiSrc: Alarm,
    text: "짧은 막대초 기본으로 나갑니다. (매장에서 디자인 초 구매 가능합니다)",
  },
];
const size = ["1호  지름 15cm", "2호  지름 18cm", "3호  지름 21cm"];
const infoSections = [
  {
    subtitle: "메뉴",
    emojiSrc: Bag,
    content: <PhotoGrid />,
  },
  {
    subtitle: "예약 방법",
    emojiSrc: Bag,
    content: links.map((link, index) => (
      <InfoSection
        key={index}
        emojiSrc={link.emojiSrc}
        text={link.text}
        {...styleProps}
      />
    )),
  },
  {
    subtitle: "사이즈",
    emojiSrc: Bag,
    content: size.map((item, index) => (
      <InfoSection key={index} emojiSrc={Alarm} text={item} {...styleProps} />
    )),
  },
  {
    subtitle: "입금 방법",
    emojiSrc: Bag,
    content: (
      <>
        <InfoSection
          emojiSrc={Alarm}
          text="계좌번호 1005-304-242173 우리은행"
          {...styleProps}
        />
        <InfoSection emojiSrc={Alarm} text="입금자명 이해두" {...styleProps} />
      </>
    ),
  },
];
const RentalServices = [
  {
    emojiSrc: instagram,
    text: "http://instagram.com/duskblue_cafe",
  },
  {
    emojiSrc: call,
    text: "000-0000-0000",
  },
  {
    emojiSrc: Alarm,
    text: "대관 문의는 전화 문의 주시면 더 자세항 사항 안내하겠습니다",
  },
];
const Image = styled.img`
  width: 100%;
  margin-bottom: 10%;
`;
function Reservation() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleCakeClickOpen = () => {
    setOpen(true);
  };
  const handleCakeClose = () => {
    setOpen(false);
  };

  const handleRentalClickOpen = () => {
    setShow(true);
  };
  const handleRentalCloseOpen = () => {
    setShow(false);
  };

  return (
    <CommonRoot>
      <Banner />
      <Heading>Reservation</Heading>

      <ContentWrapper>
        <MainMenu
          $marginTop="100px"
          imgSrc={CakeReservation}
          imgAlt="cake"
          heading="Cake Resevation"
          description="“소중한 날, 달콤하게 빛나는 기억으로”"
          text="more"
          $borderColor="transparent"
          fontSize="20px"
          onClick={handleCakeClickOpen}
        />
        <MainMenu
          $marginTop="180px"
          imgSrc={Rental}
          imgAlt="retal"
          heading="Rental Resevation"
          description="“소중한 시간을 위한, 
따뜻한 위로와 힐링의 공간을 준비해 드립니다”"
          text="more"
          $borderColor="transparent"
          fontSize="20px"
          onClick={handleRentalClickOpen}
        />
      </ContentWrapper>
      <Dialog open={open} onClose={handleCakeClose} title="Cake Reservation">
        {infoSections.map((section, index) => (
          <InfoContainer key={index}>
            <InfoSection
              text={section.subtitle}
              {...styleProps}
              emojiSrc={section.emojiSrc}
            />
            <InfoInnerContainer>{section.content}</InfoInnerContainer>
          </InfoContainer>
        ))}
      </Dialog>
      <Dialog
        open={show}
        onClose={handleRentalCloseOpen}
        title="Rental Reservation"
      >
        <InfoInnerContainer>
          <Image src={RentalServicesImg} alt="rental" />
          {RentalServices.map((section, index) => (
            <InfoContainer key={index}>
              <InfoSection text="예약방법" {...styleProps} emojiSrc={Bag} />
              <InfoSection
                text={section.text}
                {...styleProps}
                emojiSrc={section.emojiSrc}
              />
              <InfoInnerContainer>{section.content}</InfoInnerContainer>
            </InfoContainer>
          ))}
        </InfoInnerContainer>
      </Dialog>
    </CommonRoot>
  );
}

export default Reservation;
