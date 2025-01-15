import styled from "styled-components";
import MainContainer from "../../common/CommonBack";
import Dialog from "../../common/Dialog";
import Input from "./AuthForm/FormInput";
import React, { useState } from "react";
import { regex } from "./AuthForm/WholeForm";

import {
  WholeContainer,
  TitleContainer,
  Container,
  ButtonContainer,
} from "./AuthForm/WholeForm";
import { useForm } from "react-hook-form";
import CommonButton from "../../common/CommonButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
const inputFields = [
  {
    label: "아이디",
    name: "ID",
    type: "text",
    pattern: regex.id,
    errorMessage: "아이디는 6~20자의 영문자 또는 숫자여야 합니다.",
  },
  {
    label: "비밀번호",
    name: "pwd",
    type: "password",
    pattern: regex.password,
    errorMessage:
      "비밀번호는 최소 8자 이상,<br/> 대/소문자, 숫자 및 특수문자를 포함해야 합니다.",
  },
];

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    if (isValid) {
      try {
        const response = await axios.post("http://localhost:8065/login", data);
        if (response.status === 200) {
          setIsOpen(true);
        } else {
          alert("로그인 실패");
        }
      } catch (error) {
        console.log("로그인 요청 오류:", error);
        alert("로그인 요청에 실패");
      }
    }
  };
  const handleDialogClose = () => {
    setIsOpen(false);
  };
  const navigate = useNavigate();
  return (
    <>
      <MainContainer />
      <WholeContainer>
        <TitleContainer>로그인</TitleContainer>
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            {inputFields.map(
              ({ label, name, type, pattern, errorMessage }, index) => (
                <div key={index}>
                  <Input
                    name={name}
                    label={label}
                    type={type}
                    register={register} // register 전달
                    rules={{
                      required: `${label}을 입력해 주세요`,
                      pattern: {
                        value: pattern,
                        message: errorMessage,
                      },
                    }} // validation rules
                    errors={errors}
                    errorMessage={errorMessage}
                  />
                </div>
              )
            )}
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
      <Dialog
        open={isOpen}
        onClose={handleDialogClose}
        title="환영합니다"
        width="30%"
        backgroundColor="black"
      >
        <ButtonContainer>
          <CommonButton
            text="확인"
            onClick={() => navigate("/admin")}
            {...ButtonProps}
          />
        </ButtonContainer>
      </Dialog>
    </>
  );
};
export default Login;
