import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ProjektProvider } from "./context/ProjektContext";

function AppLayout() {
  return (
    <ProjektProvider>
      <div className="flex flex-col min-h-screen font-mono">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ProjektProvider>
  );
}

export default AppLayout;
