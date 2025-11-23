// src/components/MenuItemDetail.jsx

import { useParams, useLocation } from "react-router-dom";
import useMealDetail from "../../hooks/useMealDetail";

import "./menuItemDetail.css";

export default function MenuItemDetail() {
  const { idMeal } = useParams(); // Obtiene el ID de la URL
  const location = useLocation();
  const consistentPrice = location.state?.price; // Se extrae el precio de CartaItem
  const { meal, isLoading, error } = useMealDetail(idMeal);

  // MANEJO DE ESTADOS
  if (isLoading) {
    return <p>Cargando detalle del plato...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!meal) {
    return <p>Plato con ID: {idMeal} no encontrado. Vuelve al menú.</p>;
  }

  return (
    <div className="meal-detail-container">
      <h1>{meal.strMeal}</h1>
      <span className="category-tag">Categoría: {meal.strCategory}</span>
      <strong className="meal-price-detail">Precio: {consistentPrice}</strong>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>Instrucciones</h3>
      <p>{meal.strInstructions}</p>
    </div>
  );
}
