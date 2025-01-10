import React from "react";
import Select from "../Auth/AuthForm/Select";
import Input from "../Auth/AuthForm/FormInput";
import {
  ErrorMessage,
  selectedOptions,
  ButtonProps,
  ButtonContainer,
  TitleContainer,
} from "../Auth/AuthForm/WholeForm";
import CommonButton from "../../common/CommonButton";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FindForm = ({ title, onSubmit, isPasswordForm = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  return (
    <>
      <TitleContainer>{title}</TitleContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isPasswordForm && (
          <Input
            label="아이디"
            name="ID"
            register={register}
            rules={{ required: "아이디를 입력해 주세요" }}
          />
        )}
        <Select
          label="질문 선택"
          name="question"
          options={selectedOptions}
          register={register}
          rules={{ required: "질문을 선택 해주세요" }}
        />
        {errors.question && (
          <ErrorMessage>{errors.question?.message}</ErrorMessage>
        )}

        <Input
          label="답변 등록"
          name="answer"
          register={register}
          rules={{ required: "답변을 입력해 주세요" }}
        />
        {errors.answer && <ErrorMessage>{errors.answer?.message}</ErrorMessage>}

        <ButtonContainer>
          <CommonButton width="50px" text="확인" {...ButtonProps} />
          <CommonButton
            width="50px"
            text="취소"
            {...ButtonProps}
            onClick={() => navigate("/Login")} // 취소 버튼 클릭시 로그인 페이지로 이동
          />
        </ButtonContainer>
      </form>
    </>
  );
};

export default FindForm;
