// src/hooks/useMealsByCategory.js

import { useState, useEffect } from "react";
import { getMealsByCategory } from "../api/api";

export default function useMealsByCategory(categoryName) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!categoryName) {
      setIsLoading(false);
      setError("Falta el nombre de la categoría para filtrar.");
      return;
    }

    const loadFilteredMeals = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getMealsByCategory(categoryName);

        const normalized = data.map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          category: categoryName,
          thumb: meal.strMealThumb,
          price: (Math.random() * 20 + 5).toFixed(2) + " €",
        }));

        setItems(normalized);
      } catch (e) {
        console.error("Fetch error:", e);
        setError("Error al cargar los platos de la categoría: " + e.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadFilteredMeals();
  }, [categoryName]);

  return { items, isLoading, error };
}
