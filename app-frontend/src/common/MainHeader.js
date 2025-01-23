import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../images/Logo/Logo.svg";
import CommonRoot from "./CommonRoot";

const MenuList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 210px;
  width: 30rem;
`;

const StyledLogo = styled(Logo)`
  width: 100%;
  height: auto;
`;
const MenuBox = styled.div`
  background: ${(props) => props.theme.color.orange};
  width: 100%;
  height: 211px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;
const LinkContainer = styled.div`
  display: flex;
  gap: 5%;
  align-items: center;
`;
const MenuStyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 32px;
  font-weight: 500px;

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.color.white};
  }
  &:active {
    backgronud-color: transparent;
  }
  @media (max-widthl 768px) {
    font-size: 24px;
  }
`;
export function MainHeader() {
  const menuList = [
    { label: "DUSKBLUE", path: "/introduction" },
    { label: "MENU", path: "/menu" },
    { label: "STORE", path: "/store" },
    { label: "RESERVATION", path: "/reservation" },
    { label: "INFORMATION", path: "/information" },
  ];

  return (
    <CommonRoot>
      <MenuList>
        <MenuBox>
          <LogoLink to="/">
            <StyledLogo />
          </LogoLink>
          <LinkContainer>
            {menuList.map((item, index) => (
              <MenuStyledLink to={item.path} key={index}>
                {item.label}
              </MenuStyledLink>
            ))}
          </LinkContainer>
        </MenuBox>
      </MenuList>
    </CommonRoot>
  );
}
