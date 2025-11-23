// src/hooks/useCarta.js

import { useState, useEffect } from "react";
import { getMealsList } from "../api/api";

export default function useCarta() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMeals = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getMealsList(); // Llamamos a la API

        const normalized = data.map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          category: meal.strCategory,
          thumb: meal.strMealThumb,
          price: (Math.random() * 20 + 5).toFixed(2) + " €",
        }));
        setItems(normalized);
      } catch (e) {
        setError("Error al cargar los datos: " + e.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadMeals();
  }, []);

  return { items, isLoading, error };
}
