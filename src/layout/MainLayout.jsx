// src/layout/MainLayout.jsx

import { Outlet } from "react-router-dom";

import NavBar from "../components/navBar/NavBar";
import CartaFooter from "../components/footer/CartaFooter";

import "./mainLayout.css";

export default function MainLayout() {
  return (
    <div className="main-layout-wrapper">
      <NavBar />
      <main className="main-content-wrapper">
        <Outlet />
      </main>
      <CartaFooter />
    </div>
  );
}
