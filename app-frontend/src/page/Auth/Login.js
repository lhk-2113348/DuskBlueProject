import styled from "styled-components";
import CommonRoot from "../../common/CommonRoot";
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: column;
`;
const Login = () => {
  return (
    <CommonRoot>
      <LoginContainer>
        <h1>로그인</h1>
      </LoginContainer>
    </CommonRoot>
  );
};
export default Login;
