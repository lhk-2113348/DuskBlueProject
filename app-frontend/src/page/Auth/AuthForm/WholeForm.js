import styled from "styled-components";

export const WholeContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 20px;
  border: 1px solid red;
`;

export const TitleContainer = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.color.white};
`;
export const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  min-height: 300px;
  padding 20px;
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  justify-content: flex-end;
  top: 100%;
`;

export const selectedOptions = [
  { value: "", label: "질문을 선택해 주세요" },
  { value: 0, label: "당신의 이름은?" },
  { value: 1, label: "더스크블루 강아지의 이름은?" },
  { value: 2, label: "더스크블루 번호는?" },
];
export const ButtonProps = {
  height: "40px",
  color: "black",
  borderRadius: "4px",
  type: "submit",
  $hoverBk: "#D95F03",
  $hoverColor: "white",
};

export const regex = {
  id: /^[a-zA-Z0-9]{6,20}$/,
  // 아이디: 영문자와 숫자만, 길이 6자~20자
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
  // 비밀번호: 최소 8자, 대/소문자, 숫자, 특수문자 포함
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  // 이메일: 일반적인 이메일 형식
};
