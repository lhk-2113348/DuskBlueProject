import styled from "styled-components";
import MainContainer from "../../common/CommonBack";
import Input from "./AuthForm/FormInput";
import {
  WholeContainer,
  TitleContainer,
  Container,
  ButtonContainer,
  ErrorMessage,
} from "./AuthForm/WholeForm";
import { useForm } from "react-hook-form";
import CommonButton from "../../common/CommonButton";
import { useNavigate } from "react-router-dom";

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
const ButtonProps = {
  height: "40px",
  color: "black",
  borderRadius: "4px",
  type: "submit",
  $hoverBk: "#D95F03",
  $hoverColor: "white",
};
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
  };
  const navigate = useNavigate();
  return (
    <>
      <MainContainer />
      <WholeContainer>
        <TitleContainer>로그인</TitleContainer>
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="ID"
              label="아이디"
              type="text"
              labelColor="white"
              register={register}
              rules={{ required: `아이디를를 입력해 주세요` }}
            />
            {errors.ID && <ErrorMessage>{errors.ID?.message}</ErrorMessage>}
            <Input
              name="PW"
              label="비밀번호"
              type="password"
              labelColor="white"
              register={register}
              rules={{ required: `비밀번호를 입력해 주세요` }}
            />
            {errors.PW && <ErrorMessage>{errors.PW?.message}</ErrorMessage>}

            <LinkContainer>
              <a href="/find-id">아이디 찾기</a>
              <>|</>
              <a href="/find-pw">비밀번호 찾기</a>
              <>|</>
              <a href="/signup">회원가입</a>
            </LinkContainer>
            <ButtonContainer>
              <CommonButton width="50px" text="확인" {...ButtonProps} />
              <CommonButton
                width="50px"
                text="취소"
                {...ButtonProps}
                onClick={() => navigate("/")}
              />
            </ButtonContainer>
          </form>
        </Container>
      </WholeContainer>
    </>
  );
};
export default Login;
