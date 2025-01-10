import styled from "styled-components";

export const WholeContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 20px;
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
  padding: 20px;
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
