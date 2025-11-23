// src/hooks/useMealDetail.js

import { useState, useEffect } from "react";
import { getMealById } from "../api/api";

export default function useMealDetail(idMeal) {
  const [meal, setMeal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!idMeal) {
      setIsLoading(false);
      setError("No se proporcionó ID de plato.");
      return;
    }

    const loadMealDetail = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getMealById(idMeal); // Llamamos a la API

        setMeal(data);
      } catch (e) {
        console.error("Fetch error:", e);
        setError("Error al cargar los detalles del plato: " + e.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadMealDetail();
  }, [idMeal]); // Se ejecuta solo cuando cambia el ID

  return { meal, isLoading, error };
}
