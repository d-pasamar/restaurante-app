import { useState, useEffect } from "react";

export default function useCarta() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        const normalized = data.meals.map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          category: meal.strCategory,
          thumb: meal.strMealThumb,
          price: (Math.random() * 20 + 5).toFixed(2) + " €",
        }));
        setItems(normalized);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Error al cargar los datos");
        setIsLoading(false);
      });
  }, []);

  return { items, isLoading, error };
}
