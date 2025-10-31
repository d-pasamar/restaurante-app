export default function CartaItem({ item }) {
  return (
    <div className="menu-card">
      <h3>Esto es un Item</h3>
      <img src={item.thumb} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.category}</p>
      <strong>{item.price}</strong>
    </div>
  );
}
