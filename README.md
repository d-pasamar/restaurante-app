# Restaurante App 🍽️

Aplicación web desarrollada en React que muestra una carta de platos obtenidos desde la API pública de [TheMealDB].

Cada plato se presenta con imagen, nombre, categoría y precio.

---

## 📸 Captura de pantalla

![Vista de la carta](./assert/captura-carta.png)

La imagen muestra la carta renderizada en el navegador, incluyendo el encabezado, los platos en cuadrícula con efecto `hover`, y el pie de página.

---

## 🧾 Descripción técnica del proyecto

### 🔗 Uso del endpoint indicado de TheMealDB

Se ha utilizado el siguiente endpoint para obtener los datos de los platos:

https://www.themealdb.com/api/json/v1/1/search.php?s=

---

### 🧩 Estructura modular de componentes

El proyecto está dividido en componentes reutilizables:

```
src/
├── hooks/
│   └── useCarta.js
├── components/
│   ├── header/
│   │   ├── cartaHeader.css
│   │   └── CartaHeader.jsx
│   ├── cartaMenu/
│   │   └── item/
│   │   │   ├── cartaItem.css
│   │   │   └── CartaItem.jsx
│   │   ├── cartaMenu.css
│   │   └── CartaMenu.jsx
│   └── footer/
│       ├── cartaFooter.css
│       └── CartaFooter.jsx
├── App.jsx
└── main.jsx
```

Cada componente tiene su propio archivo de estilos (.css) y responsabilidad visual clara.

---

## 🛠️ ¿Cómo se ha realizado la tarea?

- Se ha utilizado el endpoint indicado de TheMealDB:  
  `https://www.themealdb.com/api/json/v1/1/search.php?s=`
- Se ha creado un hook personalizado `useCarta` para encapsular la lógica de carga y normalización de datos.
- Los componentes se han estructurado de forma modular: `CartaHeader`, `CartaMenu`, `CartaFooter`, y `CartaItem`.
- Se ha aplicado diseño visual con CSS: cuadrícula (`grid`), efectos `hover`, y armonización de fondo.
- Los precios se han generado inicialmente de forma aleatoria, pero se ha previsto su sustitución por valores manuales.

---

## 📦 Dependencias instaladas

```bash
npm install react react-dom
npm install vite
```

---

## ✍️ Autor

2º DAM Nocturno

- David García Pasamar

---
