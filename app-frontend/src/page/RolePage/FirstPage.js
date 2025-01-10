import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CafeImage from "../../images/Logo/background.png";
import CommonButton from "../../common/CommonButton";
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
const WholeContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 20px;
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

const ButtonProp = {
  width: "30vh",
  height: "30vh",
  fontSize: "5vh",
  background: "white",
  color: " #D95F03",
  $borderColor: "#D95F03",
  borderRadius: "50px",
  $hoverBk: "#D95F03",
  $hoverColor: "white",
};
const FirstPage = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/Login");
  };

  const handleMainClick = () => {
    navigate("/main");
  };

  return (
    <MainContainer>
      <WholeContainer>
        <TitleContainer>DuskBlue</TitleContainer>
        <ButtonContainer>
          <CommonButton
            {...ButtonProp}
            text="사장님"
            onClick={handleLoginClick}
          />
          <CommonButton {...ButtonProp} text="손님" onClick={handleMainClick} />
        </ButtonContainer>
      </WholeContainer>
    </MainContainer>
  );
};
export default FirstPage;
