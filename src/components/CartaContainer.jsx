import { useState } from "react";
import useCarta from "../hooks/useCarta";
import CartaFooter from "./footer/CartaFooter";
import CartaHeader from "./header/CartaHeader";
import CartaFiltro from "./cartaFiltro/CartaFiltro";
import CartaMenu from "./cartaMenu/CartaMenu";

import "./cartaContainer.css";

export default function CartaContainer() {
  const { items, isLoading, error } = useCarta();
  const [filtro, setFiltro] = useState("");

  return (
    <div className="carta">
      <CartaHeader />
      <CartaFiltro filtro={filtro} setFiltro={setFiltro} />
      <CartaMenu
        items={items}
        isLoading={isLoading}
        error={error}
        filtro={filtro}
      />
      <CartaFooter />
    </div>
  );
}
