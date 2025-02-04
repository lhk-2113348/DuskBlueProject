import styled from "styled-components";
import { ReactComponent as Logo } from "../images/Logo/Logo.svg";
import Instagram from "../images/Icons/Instagram.png";
import { Link } from "react-router-dom";
import CommonRoot from "./CommonRoot";

const FooterStyle = styled.footer`
  width: 100%;
  background: ${(props) => props.theme.color.white};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
  gap:30%;

  @media (max-width: 768px) {
    margin-left: 0;
    flex-direction: row;
    gap:10%
  }
`;

const FooterContent = styled.div`
  background: ${(props) => props.theme.color.orange};
  display: flex;
  justify-content: center;
`;

const FooterMiddle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const TextStyle = styled.p`
  font-size: ${(props) => props.theme.fontSize.lg};
  color: ${(props) => props.theme.color.black};
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;

const TextLinkStyle = styled.p`
  font-size: ${(props) => props.theme.fontSize.lg};
  color: ${(props) => props.theme.color.black};
  text-decoration: none;
  margin: 0;

  &:hover {
    color: ${(props) => props.theme.color.orange};
    text-decoration: none;
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;

const TextBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  text-align: left;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
`;

const StyledInstagram = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const StyledLogo = styled(Logo)`
  width: 200px;
  height: auto;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const Footer = () => {
  return (
    <CommonRoot>
      <FooterStyle>
        <FooterTop>
          <TextLinkStyle as={Link} to="/Store">오시는길</TextLinkStyle>
          <TextLinkStyle as={Link} to="/Reservation">예약문의</TextLinkStyle>
        </FooterTop>
        <FooterContent>
          <FooterMiddle>
            <StyledLogo />
            <TextBox>
              <TextStyle>서울시 영등포구 당산로 38길 10 2층</TextStyle>
              <TextStyle>대표이사 이해두,천영우</TextStyle>
              <TextStyle>사업자 등록번호 000-000-000</TextStyle>
              <TextStyle>
                <StyledInstagram src={Instagram} alt="Instagram" />
                <a href="https://instagram.com/duskblue_cafe" target="_blank" rel="noopener noreferrer">
                  https://instagram.com/duskblue_cafe
                </a>
              </TextStyle>
              <TextStyle>© 2024 DuskBlue. All rights reserved.</TextStyle>
            </TextBox>
          </FooterMiddle>
        </FooterContent>
      </FooterStyle>
    </CommonRoot>
  );
};

export default Footer;
