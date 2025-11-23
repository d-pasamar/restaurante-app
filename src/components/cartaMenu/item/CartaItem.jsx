// src/components/cartaMenu/item/CartaItem.jsx

import { Link } from "react-router-dom";
import "./cartaItem.css";

export default function CartaItem({ item }) {
  const detailPath = `/menu/${item.id}`;

  return (
    <Link to={detailPath} state={{ price: item.price }} className="menu-card-link">
      <div className="menu-card">
        <img src={item.thumb} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.category}</p>
        <strong>{item.price}</strong>
      </div>
    </Link>
  );
}
