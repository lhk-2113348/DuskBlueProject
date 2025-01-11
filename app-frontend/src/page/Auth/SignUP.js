import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import MainContainer from "../../common/CommonBack";
import CommonButton from "../../common/CommonButton";
import Select from "./AuthForm/Select";
import Input from "./AuthForm/FormInput";
import { regex } from "./AuthForm/WholeForm";
import {
  WholeContainer,
  TitleContainer,
  ButtonContainer,
  Container,
  ErrorMessage,
  selectedOptions,
  ButtonProps,
} from "./AuthForm/WholeForm";
import Dialog from "../../common/Dialog";
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
      "비밀번호는 최소 8자 이상이어야 하며, 대/소문자, 숫자 및 특수문자를 포함해야 합니다.",
  },
  {
    label: "이메일",
    name: "email",
    type: "email",
    pattern: regex.email,
    errorMessage: "유효한 이메일 주소를 입력해 주세요.",
  },
];
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    if (isValid) {
      setIsOpen(true);
    }
  };
  const handleDialogClose = () => {
    setIsOpen(false);
  };
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/Login"); // 로그인 페이지로 이동
  };
  return (
    <>
      <MainContainer />
      <WholeContainer>
        <TitleContainer>회원 가입</TitleContainer>
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
                  />
                </div>
              )
            )}
            <Select
              label="질문 등록"
              name="question"
              options={selectedOptions}
              register={register}
              rules={{ required: `질문을 선택해 주세요` }} // validation rules
            />
            <ErrorMessage>{errors.question?.message}</ErrorMessage>
            <Input
              label="답변 등록"
              name="answer"
              type="text"
              register={register}
              rules={{ required: "답변을 입력해 주세요" }}
              errors={errors}
            />
            <ButtonContainer>
              <CommonButton width="110px" text="회원가입" {...ButtonProps} />
              <CommonButton
                width="50px"
                text="취소"
                {...ButtonProps}
                onClick={handleCancel}
              />
            </ButtonContainer>
          </form>
        </Container>
      </WholeContainer>
      <Dialog
        open={isOpen}
        onClose={handleDialogClose}
        title="환영합니다"
        width="50%"
        backgroundColor="black"
      >
        <ButtonContainer>
          <CommonButton
            text="확인"
            onClick={() => navigate("/Login")}
            {...ButtonProps}
          />
        </ButtonContainer>
      </Dialog>
    </>
  );
};

export default Signup;
