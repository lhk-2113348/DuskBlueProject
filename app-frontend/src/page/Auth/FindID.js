import React from "react";
import MainContainer from "../../common/CommonBack";
import FindForm from "./FindForm";
import { WholeContainer } from "./AuthForm/WholeForm";

const FindID = () => {
  const onSubmit = (data) => {
    console.log(data); // 아이디 찾기 로직 처리
  };

  return (
    <>
      <MainContainer />
      <WholeContainer>
        <FindForm
          title="아이디 찾기"
          onSubmit={onSubmit}
          isPasswordForm={false} // 비밀번호 찾기일 경우에는 ID 필드가 필요없으므로 false로 설정
        />
      </WholeContainer>
    </>
  );
};

export default FindID;
