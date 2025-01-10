import React from "react";
import MainContainer from "../../common/CommonBack";
import FindForm from "../Auth/FindForm";
import { WholeContainer } from "./AuthForm/WholeForm";

const FindPW = () => {
  const onSubmit = (data) => {
    console.log(data); // 비밀번호 찾기 로직 처리
  };

  return (
    <>
      <MainContainer />
      <WholeContainer>
        <FindForm
          title="비밀번호 찾기"
          onSubmit={onSubmit}
          isPasswordForm={true} // 비밀번호 찾기일 경우 ID 필드가 필요하므로 true로 설정
        />
      </WholeContainer>
    </>
  );
};

export default FindPW;
