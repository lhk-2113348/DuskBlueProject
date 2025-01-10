import styled from "styled-components";
import CommonRoot from "../../common/CommonRoot";
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
const WholeContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 20px;
`;
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: column;
  width: 30vh;
  height: 30vh;
  border: 1px solid white;
`;
const TitleContainer = styled.div`
  font-size: 8vw;
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.color.white};
`;

const Login = () => {
  return (
    <MainContainer>
      <CommonRoot>
        <WholeContainer>
          <TitleContainer>로그인</TitleContainer>
          <LoginContainer></LoginContainer>
        </WholeContainer>
      </CommonRoot>
    </MainContainer>
  );
};
export default Login;
