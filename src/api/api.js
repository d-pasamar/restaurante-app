// src/api/api.js

// Endpoint para buscar todos los platos (lista principal)
const API_URL_SEARCH = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// Endpoint para buscar por ID (detalle del plato)
const API_URL_DETAIL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

// Endpoint para listar todas las categorías
const API_URL_CATEGORIES_LIST =
  "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

// Endpoint para buscar platos por categoría (Ej: filter.php?c=Seafood)
const API_URL_FILTER_CATEGORY =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

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

/**
 * Obtiene la lista de todas las categorías disponibles.
 * Endpoint: list.php?c=list
 * @returns {Promise<Array<Object>>} - Retorna un array de objetos de categoría.
 */
export async function getAllCategories() {
  const response = await fetch(API_URL_CATEGORIES_LIST);

  if (!response.ok) {
    throw new Error(`Error de red al obtener categorías: ${response.status}`);
  }

  const data = await response.json();

  // La API devuelve: { "meals": [{ "strCategory": "Beef" }, { "strCategory": "Chicken" }, ...] }
  // Devolvemos el array que contiene los objetos de categoría.
  return data.meals || [];
}

/**
 * Obtiene una lista de platos filtrada por una categoría específica.
 * Devuelve menos información por plato que la búsqueda por ID.
 * @param {string} category - El nombre de la categoría a filtrar.
 * @returns {Promise<Array<Object>>} - Retorna un array de platos.
 */
export async function getMealsByCategory(category) {
  // Se usa fetchMeals para la búsqueda.
  // fetchMeals maneja la respuesta.json() y los errores.
  return fetchMeals(`${API_URL_FILTER_CATEGORY}${category}`);
}
