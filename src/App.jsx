// import CartaContainer from "./components/CartaContainer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import CartaContainer from "./components/CartaContainer";
import MenuItemDetail from "./components/menuItemDetail/MenuItemDetail";
import CategoryDetail from "./components/categoryDetail/CategoryDetail";
import MainLayout from "./layout/MainLayout";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<CartaContainer />} />
          <Route
            path="menu/category/:categoryName"
            element={<CategoryDetail />}
          />
          <Route path="menu/:idMeal" element={<MenuItemDetail />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
