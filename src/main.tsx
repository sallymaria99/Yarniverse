import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./AppLayout.tsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./pages/about.tsx";
import Contact from "./pages/contact.tsx";
import Projekt from "./pages/projekt.tsx";
import Tutorials from "./pages/tutorials.tsx";
import Home from "./pages/home.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projekt" element={<Projekt />} />
      <Route path="/tutorials" element={<Tutorials />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
