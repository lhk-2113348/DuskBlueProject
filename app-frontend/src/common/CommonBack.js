import styled from "styled-components";
import CafeImage from "../images/Logo/background.png";

// MainContainer.js
const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${CafeImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  overflow: hidden;
`;

export default MainContainer;
