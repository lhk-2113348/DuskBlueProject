import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CommonButton from "../../common/CommonButton";
import MainContainer from "../../common/CommonBack";

const WholeContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    top: 60%;
  }
`;

const TitleContainer = styled.div`
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.color.white};
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 15px;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    align-items: center;
  }
`;

const ButtonProp = {
  width: "200px",
  height: "200px",
  fontSize: "40px",
  background: "white",
  color: " #D95F03",
  $borderColor: "#D95F03",
  borderRadius: "50px",
  $hoverBk: "#D95F03",
  $hoverColor: "white",

  "@media (max-width: 1024px)": {
    width: "180px",
    height: "180px",
    fontSize: "35px",
  },

  "@media (max-width: 768px)": {
    width: "160px",
    height: "160px",
    fontSize: "30px",
  },

  "@media (max-width: 480px)": {
    width: "120px",
    height: "120px",
    fontSize: "22px",
  },
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
