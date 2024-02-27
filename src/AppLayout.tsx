import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { mockedProjekt } from "./projektData";

function AppLayout() {
  const [projekt, setProjekt] = useState(mockedProjekt);
  return (
    <div className="flex flex-col min-h-screen font-mono">
      <Header />
      <main className="flex-grow">
        <Outlet context={mockedProjekt} />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
