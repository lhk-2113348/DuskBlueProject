import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CafeImage from "../../images/Logo/background.png";
const MainContainer = styled.div`
  height: 100vh;
  background-image: url(${CafeImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;
const TitleContainer = styled.div`
  font-size: 8vw;
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.color.white};
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 30vh;
  height: 30vh;
  font-size: 5vh;
  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.orange};
  border: 1px solid ${(props) => props.theme.color.orange};
  cursor: pointer;
  border-radius: 50px;
  &:hover {
    background-color: ${(props) => props.theme.color.orange};
    color: ${(props) => props.theme.color.white};
  }
`;
const FirstPage = () => {
  return (
    <MainContainer>
      <TitleContainer>DuskBlue</TitleContainer>
      <ButtonContainer>
        <Link to="/admin">
          <Button>사장님</Button>
        </Link>
        <Link to="/main">
          <Button>손님</Button>
        </Link>
      </ButtonContainer>
    </MainContainer>
  );
};
export default FirstPage;
