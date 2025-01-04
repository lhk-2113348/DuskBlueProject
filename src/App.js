import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "./page/main/Main";
import DuskBlue from "./page/duskblue/DuskBlue";
import Menu from "./page/menu/Menu";
import Store from "./page/store/Store";
import Reservation from "./page/reservation/Reservation";
import Information from "./page/information/Information";
import { MainHeader } from "./common/MainHeader";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import Footer from "./common/Footer";
const Root = styled.div`
  & *,
  p {
    font-family: "Noto Sans KR";
  }
`;

const ContentBox = styled.div`
  min-height: calc(100vh - 110px);
`;

function Layout({ children }) {
  return (
    <Root>
      <MainHeader />
      <ContentBox>{children}</ContentBox>
      <Footer />
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
            <Route path="/" element={<MainPage />} />
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
