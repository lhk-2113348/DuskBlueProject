import React from "react";
import MainContainer from "../../common/CommonBack";
import FindForm from "./FindForm";
import { WholeContainer } from "./AuthForm/WholeForm";

const FindID = () => {
  return (
    <>
      <MainContainer />
      <WholeContainer>
        <FindForm
          title="아이디 찾기"
          DialogTitle="당신의 아이디는 000 입니다다"
          isPasswordForm={false}
        />
      </WholeContainer>
    </>
  );
};

export default FindID;
