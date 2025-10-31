import CartaItem from "./item/CartaItem";
import "./cartaMenu.css";

export default function CartaMenu({ items, isLoading, error }) {
  if (isLoading) {
    return <p className="loading">Cargando platos...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <>
      <h2>Aqui va nuestro menú de hoy.</h2>
      <div className="carta-grid">
        {items.map((meal) => (
          <CartaItem key={meal.id} item={meal} />
        ))}
      </div>
    </>
  );
}
