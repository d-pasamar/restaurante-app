// src/components/CategoryDetail.jsx
import { useParams } from "react-router-dom";
import useMealsByCategory from "../../hooks/useMealsByCategorie";
import CartaMenu from "../cartaMenu/CartaMenu";

import "./categoryDetail.css";

export default function CategoryDetail() {
  const { categoryName } = useParams();
  const { items, isLoading, error } = useMealsByCategory(categoryName);

  if (isLoading) {
    return <div>Cargando platos de la categoría **{categoryName}**...</div>;
  }

  if (error) {
    return (
      <div>
        Error al cargar la categoría **{categoryName}**: {error}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div>No se encontraron platos para la categoría **{categoryName}**.</div>
    );
  }

  return (
    <div className="carta">
      <div className="category-detail-header">
        <h1>MENÚ: {categoryName.toUpperCase()}</h1>
        <p>Una selección de nuestros mejores platos en esta categoría.</p>
      </div>

      {/* Se reutiliza el componente de lista (CartaMenu) para mostrar los platos filtrados */}
      <CartaMenu items={items} />
    </div>
  );
}
