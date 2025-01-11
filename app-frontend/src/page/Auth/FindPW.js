import React from "react";
import MainContainer from "../../common/CommonBack";
import FindForm from "../Auth/FindForm";
import { WholeContainer } from "./AuthForm/WholeForm";

const FindPW = () => {
  return (
    <>
      <MainContainer />
      <WholeContainer>
        <FindForm
          title="비밀번호 찾기"
          DialogTitle="이메일로 비밀번호 보냈습니다"
          isPasswordForm={true}
        />
      </WholeContainer>
    </>
  );
};

export default FindPW;
