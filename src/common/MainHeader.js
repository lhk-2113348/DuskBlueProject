import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../images/Logo/Logo.svg";
const Nav = styled.nav`
  position: fixed;
  background: ${(props) => props.theme.color.orange};
  width: 100%;
  box-sizing: border-box;
  z-index: 100;
  display: flex;
  justify-content: center;
`;
const MenuList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 210px;
`;

const StyledLogo = styled(Logo)`
  width: 700px;
  height: auto;
`;
const MenuBox = styled.div`
  display: flex;
  height: 211px;
`;
const MenuStyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 32px;
  font-weight: 500px;
  padding: 0 110px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.color.white};
  }
  &:active {
    backgronud-color: transparent;
  }
`;
export function MainHeader() {
  const menuList = [
    { label: "DUSKBLUE", path: "/duskblue-info" },
    { label: "MENU", path: "/menu" },
    { label: "STORE", path: "/store" },
    { label: "RESERVATION", path: "/reservation" },
    { label: "INFORMATION", path: "/information" },
  ];

  return (
    <Nav>
      <MenuList>
        <MenuBox>
          <LogoLink to="/">
            <StyledLogo />
          </LogoLink>
          {menuList.map((item, index) => (
            <MenuStyledLink to={item.path} key={index}>
              {item.label}
            </MenuStyledLink>
          ))}
        </MenuBox>
      </MenuList>
    </Nav>
  );
}
