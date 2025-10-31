import CartaItem from "./item/CartaItem";

export default function CartaMenu({ item }) {
  return (
    <>
      <h2>Aqui va nuestro menu</h2>
      <div className="menu-grid">
        {item.map((item) => (
          <CartaItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
