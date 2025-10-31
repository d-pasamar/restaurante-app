import CartaItem from "./item/CartaItem";
import "./cartaMenu.css";

export default function CartaMenu({ items, isLoading, error, filtro }) {
  if (isLoading) {
    return <p className="loading">Cargando platos...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  const filtrarItems = items.filter(
    (meal) =>
      meal.name.toLowerCase().includes(filtro.toLowerCase()) ||
      meal.category.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      <h2>Aqui va nuestro menú de hoy.</h2>
      <div className="carta-grid">
        {filtrarItems.map((meal) => (
          <CartaItem key={meal.id} item={meal} />
        ))}
      </div>
    </>
  );
}
