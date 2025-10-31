import CartaItem from "./item/CartaItem";

export default function CartaMenu({ items, isLoading, error }) {
  if (isLoading) {
    return <p className="loading">Cargando platos...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <>
      <h2>Aqui va nuestro menú</h2>
      <div className="menu-grid">
        {items.map((item) => (
          <CartaItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
