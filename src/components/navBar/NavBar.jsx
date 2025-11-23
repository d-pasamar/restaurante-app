// src/components/navBar/NavBar.jsx

import { Link } from "react-router-dom";

import "./navBar.css";

export default function NavBar() {
  return (
    <nav className="app-navbar">
      <Link to="/">Home</Link>

      <Link to="/menu">Menú</Link>
      <Link to="/about">Acerca de</Link>
    </nav>
  );
}
