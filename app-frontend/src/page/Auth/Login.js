import styled from "styled-components";
import MainContainer from "../../common/CommonBack";
import Input from "./AuthForm/FormInput";
import {
  WholeContainer,
  TitleContainer,
  Container,
} from "./AuthForm/WholeForm";

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  gap: 5px;
  font-size: 10px;
  color: ${(props) => props.theme.color.white};

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Login = () => {
  return (
    <>
      <MainContainer />
      <WholeContainer>
        <TitleContainer>로그인</TitleContainer>
        <Container>
          <Input label="아이디" type="text" />
          <Input label="비밀번호" type="password" />
          <LinkContainer>
            <a href="/find-id">아이디 찾기</a>
            <>|</>
            <a href="/find-pw">비밀번호 찾기</a>
            <>|</>
            <a href="/signup">회원가입</a>
          </LinkContainer>
        </Container>
      </WholeContainer>
    </>
  );
};
export default Login;
