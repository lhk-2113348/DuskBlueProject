import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../images/Logo/Logo.svg";
import CommonRoot from "./CommonRoot";
import { useState } from "react";

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
  max-width: 600px;
  width: 80%;

  @media (max-width: 768px) {
    margin-top: 100px;
    margin-left: -50px;
    width: 80%;
  }

  @media (max-width: 480px) {
    margin-top: 60px;
    margin-left: -25px;
    width: 80%;
  }
`;

const StyledLogo = styled(Logo)`
  width: 90%;
  height: auto;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 60%;
  }
`;

const MenuBox = styled.div`
  background: ${(props) => props.theme.color.orange};
  width: 100%;
  height: 211px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    height: 180px;
    padding: 0 30px;
    align-items: center;
    gap: 45%;
  }
  @media (max-width: 480px) {
    height: 120px;
    padding: 0 10px;
    gap: 45%;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 5%;
  position: relative;
  align-items: center;
  @media (max-width: 1024px) {
    gap: 3%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    display: none;
  }
`;

const MenuStyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 32px;
  font-weight: 500;
  display: block;
  white-space: nowrap;
  flex-shrink: 0;
  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.color.white};
  }

  &:active {
    background-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const DropdownButton = styled.button`
  background: transparent;
  border: none;
  color: black;
  cursor: pointer;
  margin-right: 20px;
  margin-top: 10%;
  @media (min-width: 769px) {
    display: none;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  position: fixed;
  top: 50px;
  right: 0;
  background: ${(props) => props.theme.color.orange};
  padding: 10px;
  border-radius: 5px;
  z-index: 200;
  animation: slideIn 0.3s forwards;
  width: 200px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: translateX(${(props) => (props.open ? "0" : "100%")});
  transition: all 0.3s ease;
`;
const DropdownIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;

  div {
    height: 2px;
    background-color: black;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
     @media (max-width: 768px) {
    width: 35px;
    height: 35px;

    div {
      height: 2px; 
    }
  }

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;

    div {
      height: 2px; 
    }
`;

export function MainHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuList = [
    { label: "DUSKBLUE", path: "/introduction" },
    { label: "MENU", path: "/menu" },
    { label: "STORE", path: "/store" },
    { label: "RESERVATION", path: "/reservation" },
    { label: "INFORMATION", path: "/information" },
  ];

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

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
          <DropdownButton onClick={toggleDropdown}>
            <DropdownIcon>
              <div />
              <div />
              <div />
            </DropdownIcon>
          </DropdownButton>
          <DropdownMenu open={dropdownOpen}>
            {menuList.map((item, index) => (
              <MenuStyledLink
                to={item.path}
                key={index}
                onClick={() => setDropdownOpen(false)}
              >
                {item.label}
              </MenuStyledLink>
            ))}
          </DropdownMenu>
        </MenuBox>
      </MenuList>
    </CommonRoot>
  );
}
