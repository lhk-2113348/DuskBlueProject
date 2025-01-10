import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import MainPage from "./page/main/Main";
import DuskBlue from "./page/duskblue/DuskBlue";
import Login from "./page/Auth/Login";
import Menu from "./page/menu/Menu";
import Store from "./page/store/Store";
import Reservation from "./page/reservation/Reservation";
import Information from "./page/information/Information";
import FirstPage from "./page/RolePage/FirstPage";
import { MainHeader } from "./common/MainHeader";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import Footer from "./common/Footer";
import AdminMenuPage from "./page/admin/AdminMenuPage";
const Root = styled.div`
  & *,
  p {
    font-family: "Noto Sans KR";
  }
`;

const ContentBox = styled.div`
  min-height: calc(100vh);
`;

function Layout({ children }) {
  const location = useLocation();
  const path = location.pathname;

  const hidHeaderFooter = path === "/" || path === "/Login";

  return (
    <Root>
      {!hidHeaderFooter && <MainHeader />}
      <ContentBox>{children}</ContentBox>
      {!hidHeaderFooter && <Footer />}
    </Root>
  );
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/admin" element={<AdminMenuPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/introduction" element={<DuskBlue />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:category" element={<Menu />} />
            <Route path="/store" element={<Store />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/information" element={<Information />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
