// src/components/CategoryNav.jsx

import { Link } from "react-router-dom";
import useCategories from "../../hooks/useCategories";
import "./categoryNav.css";

export default function CategoryNav() {
  const { categories, isLoading, error } = useCategories();

  if (isLoading) {
    return <div>Cargando filtros...</div>;
  }

  if (error) {
    return <div>Error de filtros: {error}</div>;
  }

  return (
    <nav className="category-nav">
      {categories.map((category) => (
        <Link
          key={category}
          // Ruta dinámica que creamos en App.jsx: /menu/category/Beef
          to={`/menu/category/${category}`}
          style={{
            margin: "0 10px",
            textDecoration: "none",
            color: "#0077cc",
            fontWeight: "bold",
          }}
        >
          {category}
        </Link>
      ))}
    </nav>
  );
}
