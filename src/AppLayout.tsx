import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ProjektProvider } from "./context/ProjektContext";
import styled from "styled-components";

function AppLayout() {
  return (
    <ProjektProvider>
      <StyledAppLayout>
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
        <Footer />
      </StyledAppLayout>
    </ProjektProvider>
  );
}

export default AppLayout;

const StyledAppLayout = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Mono", sans-serif;
  color: #16425b;
`;

const MainContent = styled.main`
  flex-grow: 1;
`;
