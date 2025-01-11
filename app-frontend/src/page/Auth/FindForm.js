import React, { useState } from "react";
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
import Dialog from "../../common/Dialog";
import { regex } from "./AuthForm/WholeForm";

const FindForm = ({ title, DialogTitle, isPasswordForm = false }) => {
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
  const inputFields = [
    {
      label: "아이디",
      name: "ID",
      type: "text",
      validation: {
        required: "아이디를 입력해 주세요",
        pattern: {
          value: regex.id,
          message: "아이디는 6~20자의 영문자 또는 숫자여야 합니다.",
        },
      },
      visible: isPasswordForm,
    },
    {
      label: "이메일",
      name: "Email",
      type: "email",
      validation: {
        required: "이메일을 입력해 주세요",
        pattern: {
          value: regex.email,
          message: "유효한 이메일 주소를 입력해 주세요.",
        },
      },
      visible: true,
    },
  ];
  return (
    <>
      <TitleContainer>{title}</TitleContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputFields
          .filter((field) => field.visible)
          .map((field, index) => (
            <Input
              key={index}
              label={field.label}
              name={field.name}
              type={field.type}
              register={register}
              rules={field.validation}
              errors={errors}
            />
          ))}
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
          type="text"
          register={register}
          rules={{ required: "답변을 입력해 주세요" }}
          errors={errors}
        />

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
      <Dialog
        open={isOpen}
        onClose={handleDialogClose}
        title={DialogTitle}
        width="60%"
        fontSize="24px"
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

export default FindForm;
