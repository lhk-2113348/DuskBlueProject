import Banner from "../../common/Banner";
import CommonRoot from "../../common/CommonRoot";

import AdminMenuManager from "./AdminMenuManager";

const AdminMenuPage = () => {
  return (
    <CommonRoot>
      <Banner />
      <AdminMenuManager />
    </CommonRoot>
  );
};
export default AdminMenuPage;
