// src/hooks/useCategories.js

import { useState, useEffect } from 'react';
import { getAllCategories } from '../api/api';

export default function useCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getAllCategories();
        
        // El resultado es un array de objetos { strCategory: '...' }
        // Se mapea a un array simple de strings para facilitar su uso.
        const categoryNames = data.map(cat => cat.strCategory);
        
        setCategories(categoryNames);
      } catch (e) {
        console.error("Fetch error:", e);
        setError("Error al cargar la lista de categorías: " + e.message);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadCategories();

  }, []);

  return { categories, isLoading, error };
}