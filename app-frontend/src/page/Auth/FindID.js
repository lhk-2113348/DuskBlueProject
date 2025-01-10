import Select from "./AuthForm/Select";
import MainContainer from "../../common/CommonBack";
import Input from "./AuthForm/FormInput";
import { WholeContainer, TitleContainer } from "./AuthForm/WholeForm";
import styled from "styled-components";
import CommonButton from "../../common/CommonButton";
const selectedOptions = [
  { value: "", label: "질문을 선택해 주세요" },
  { value: 0, label: "당신의 이름은?" },
  { value: 1, label: "더스크블루 강아지의 이름은?" },
  { value: 2, label: "더스크블루 번호는?" },
];
const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const FindID = () => {
  return (
    <>
      <MainContainer />

      <WholeContainer>
        <TitleContainer>아이디 찾기</TitleContainer>

        <Select label="질문 선택" name="question" options={selectedOptions} />
        <Input label="답변 등록" name="answer" />
        <ButtonContainer>
          <CommonButton
            width="70px"
            height="40px"
            text="확인"
            color="black"
            borderRadius="4px"
            type="submit"
            $hoverBk="#D95F03"
            $hoverColor="white"
          />
        </ButtonContainer>
      </WholeContainer>
    </>
  );
};
export default FindID;
