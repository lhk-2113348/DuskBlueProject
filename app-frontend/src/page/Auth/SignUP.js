import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import MainContainer from "../../common/CommonBack";
import CommonButton from "../../common/CommonButton";
import Select from "./AuthForm/Select";
import Input from "./AuthForm/FormInput";
import {
  WholeContainer,
  TitleContainer,
  ButtonContainer,
  Container,
  ErrorMessage,
  selectedOptions,
  ButtonProps,
} from "./AuthForm/WholeForm";
const inputFields = [
  { label: "아이디", name: "ID" },
  { label: "비밀번호", name: "pwd" },
];
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
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
            {inputFields.map(({ label, name }, index) => (
              <div key={index}>
                <Input
                  name={name}
                  label={label}
                  register={register} // register 전달
                  rules={{ required: `${label}을 입력해 주세요` }} // validation rules
                />
                {errors[name] && (
                  <ErrorMessage>{errors[name]?.message}</ErrorMessage>
                )}
              </div>
            ))}
            <Select
              label="질문 등록"
              name="question"
              options={selectedOptions}
              labelColor="black"
              register={register}
              rules={{ required: `질문을 선택해 주세요` }} // validation rules
            />
            <ErrorMessage>{errors.question?.message}</ErrorMessage>

            <Input
              label="답변 등록"
              name="answer"
              register={register}
              rules={{ required: "답변을 입력해 주세요" }}
            />
            {errors.answer && (
              <ErrorMessage>{errors.answer?.message}</ErrorMessage>
            )}
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
    </>
  );
};

export default Signup;
