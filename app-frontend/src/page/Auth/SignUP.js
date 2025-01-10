import React from "react";
import { useForm } from "react-hook-form";
import MainContainer from "../../common/CommonBack";
import CommonButton from "../../common/CommonButton";
import Select from "./AuthForm/Select";
import Input from "./AuthForm/FormInput";
import {
  WholeContainer,
  TitleContainer,
  ButtonContainer,
  Container,
} from "./AuthForm/WholeForm";

const selectedOptions = [
  { value: "", label: "질문을 선택해 주세요" },
  { value: 0, label: "당신의 이름은?" },
  { value: 1, label: "더스크블루 강아지의 이름은?" },
  { value: 2, label: "더스크블루 번호는?" },
];

const inputFields = [
  { label: "아이디", name: "ID" },
  { label: "비밀번호", name: "pwd" },
];

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            <Input
              label="답변 등록"
              name="answer"
              register={register}
              rules={{ required: "답변을 입력해 주세요" }}
            />
            <ButtonContainer>
              <CommonButton
                width="150px"
                height="40px"
                text="회원가입"
                color="black"
                borderRadius="4px"
                type="submit"
                $hoverBk="#D95F03"
                $hoverColor="white"
              />
            </ButtonContainer>
          </form>
        </Container>
      </WholeContainer>
    </>
  );
};

export default Signup;
