// src/layout/MainLayout.jsx

import { Outlet } from "react-router-dom";

import NavBar from "../components/navBar/NavBar";
import CartaFooter from "../components/footer/CartaFooter";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <main className="main-content-wrapper">
        <Outlet />
      </main>
      <CartaFooter />
    </>
  );
}
