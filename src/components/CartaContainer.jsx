import { useState } from "react";
import useCarta from "../hooks/useCarta";
import CartaHeader from "./header/CartaHeader";
import CartaFiltro from "./cartaFiltro/CartaFiltro";
import CartaMenu from "./cartaMenu/CartaMenu";

import "./cartaContainer.css";

export default function CartaContainer() {
  const { items, isLoading, error } = useCarta();
  const [filtro, setFiltro] = useState("");

  const filtrarItems = items.filter(
    (meal) =>
      meal.name.toLowerCase().includes(filtro.toLowerCase()) ||
      meal.category.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="carta">
      <CartaHeader />
      <CartaFiltro filtro={filtro} setFiltro={setFiltro} />
      <CartaMenu items={filtrarItems} isLoading={isLoading} error={error} />
    </div>
  );
}
