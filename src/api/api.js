// src/api/api.js

// Endpoint para buscar todos los platos (lista principal)
const API_URL_SEARCH = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// Endpoint para buscar por ID (detalle del plato)
const API_URL_DETAIL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

/**
 * Función genérica para manejar peticiones de la API de TheMealDB.
 * @param {string} url - URL completa del endpoint de la API.
 * @returns {Promise<Array<Object>>} - Retorna un array de platos (meals).
 */
async function fetchMeals(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error de red: ${response.status}`);
  }

  const data = await response.json();
  // La API puede devolver 'null' si no encuentra nada.
  return data.meals || [];
}

/**
 * Obtiene la lista principal de platos (search.php?s=).
 */
export async function getMealsList() {
  // Llama a la función genérica con el endpoint de búsqueda
  return fetchMeals(API_URL_SEARCH);
}

/**
 * Obtiene el detalle de un plato por su ID (lookup.php?i=).
 * @param {string} id - El ID del plato a buscar.
 * @returns {Promise<Object|null>} - Retorna el objeto del plato o null si no se encuentra.
 */
export async function getMealById(id) {
  const meals = await fetchMeals(`${API_URL_DETAIL}${id}`);
  // Retorna el primer elemento (el plato de detalle) o null si el array está vacío
  return meals.length > 0 ? meals[0] : null;
}
