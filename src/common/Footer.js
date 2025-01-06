import styled from "styled-components";
import { ReactComponent as Logo } from "../images/Logo/Logo.svg";
import Instagram from "../images/Icons/Instagram.png";
import { Link } from "react-router-dom";
const FooterStyle = styled.footer`
  width: 100%;
  background: ${(props) => props.theme.color.white};
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const FooterTop = styled.div`
  margin-left: 30%;
`;
const FooterContent = styled.div`
  background: ${(props) => props.theme.color.orange};
`;
const FooterMiddle = styled.div`
  margin-right: 15%;
  display: flex;
  justify-content: center;
`;

const TextStyle = styled.p`
 font-size:  ${(props) => props.theme.fontSize.lg};
  color: ${(props) => props.theme.color.black};
   /* 반응형 폰트 크기 */
  @media (max-width: 768px) {
    font-size: ${(props) =>
      props.theme.fontSize.sm}; /* 모바일 화면에서는 작은 폰트 크기 */
  }
  margin-left: 80px;

  }
`;
const TextLinkStyle = styled.p`
  font-size: ${(props) => props.theme.fontSize.lg};
  color: ${(props) => props.theme.color.black};
  /* 반응형 폰트 크기 */
  @media (max-width: 768px) {
    font-size: ${(props) =>
      props.theme.fontSize.sm}; /* 모바일 화면에서는 작은 폰트 크기 */
  }
  margin-right: 50px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.color.orange};
  }
`;
const TextBox = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 55px 35px;
`;
const StyledInstagram = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
const StyledLogo = styled(Logo)`
  width: 300px;
  height: auto;
`;
const Footer = () => {
  return (
    <FooterStyle>
      <FooterTop>
        <TextLinkStyle as={Link} to="/Store">
          오시는길
        </TextLinkStyle>
        <TextLinkStyle as={Link} to="/Reservation">
          예약문의
        </TextLinkStyle>
      </FooterTop>
      <FooterContent>
        <FooterMiddle>
          <StyledLogo />
          <TextBox>
            <TextStyle>서울시 영등포구 당산로 38길 10 2층</TextStyle>
            <TextStyle>대표이사 이해두,천영우</TextStyle>
            <TextStyle>사업자 등록번호 000-000-000</TextStyle>
            <TextStyle>
              <StyledInstagram src={Instagram} />
              https://instagram.com/duskblue_cafe
            </TextStyle>
            <TextStyle>© 2024 DuskBlue. All rights reserved.</TextStyle>
          </TextBox>
        </FooterMiddle>
      </FooterContent>
    </FooterStyle>
  );
};
export default Footer;
