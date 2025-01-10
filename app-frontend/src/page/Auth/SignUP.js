import styled from "styled-components";
import MainContainer from "../../common/CommonBack";
import CommonButton from "../../common/CommonButton";
import Select from "./AuthForm/Select";
import Input from "./AuthForm/FormInput";
import { WholeContainer, TitleContainer } from "./AuthForm/WholeForm";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  min-height: 300px;
  padding: 20px;
`;
const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const selectedOptions = [
  { value: "", label: "질문을 선택해 주세요" },
  { value: 0, label: "당신의 이름은?" },
  { value: 1, label: "더스크블루 강아지의 이름은?" },
  { value: 2, label: "더스크블루 번호는?" },
];

const inputFields = [
  {
    label: "아이디",
    name: "ID",
  },
  {
    label: "비밀번호",
    name: "pwd",
  },
];

const Signup = () => {
  return (
    <>
      <MainContainer />
      <WholeContainer>
        <TitleContainer>회원 가입</TitleContainer>
        <SignUpContainer>
          <form>
            {inputFields.map(({ label, name }, index) => (
              <div key={index}>
                <Input name={name} label={label} />
              </div>
            ))}
            <Select
              label="질문 등록"
              name="question"
              options={selectedOptions}
            />

            <Input label="답변 등록" name="answer" />
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
        </SignUpContainer>
      </WholeContainer>
    </>
  );
};

export default Signup;
