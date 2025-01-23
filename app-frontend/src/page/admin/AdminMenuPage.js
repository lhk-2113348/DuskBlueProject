import styled from "styled-components";
import Banner from "../../common/Banner";
import CommonRoot from "../../common/CommonRoot";

import AdminMenuManager from "./AdminMenuManager";
const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 300px 40px;
`;
const AdminMenuPage = () => {
  return (
    <CommonRoot>
      <AdminContainer>
        <Banner />
        <AdminMenuManager />
      </AdminContainer>
    </CommonRoot>
  );
};
export default AdminMenuPage;
