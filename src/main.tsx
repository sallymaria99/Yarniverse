import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./AppLayout.tsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ProjectPage from "./pages/ProjektPage.tsx";
import Tutorials from "./pages/TutorialsPage.tsx";
import Home from "./pages/HomePage.tsx";
import NewProjectPage from "./pages/StartProjekt.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import DiaryPage from "./pages/DiaryPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/dagbok" element={<DiaryPage />} />
      <Route path="/projekt" element={<ProjectPage />} />
      <Route path="/projekt/:status" element={<ProjectPage />} />
      <Route path="/tutorials" element={<Tutorials />} />
      <Route path="/StartProjekt" element={<NewProjectPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
