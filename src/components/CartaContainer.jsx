import useCarta from "../hooks/useCarta";
import CartaFooter from "./footer/CartaFooter";
import CartaHeader from "./header/CartaHeader";
import CartaMenu from "./cartaMenu/CartaMenu";
import "./cartaContainer.css";

export default function CartaContainer() {
  const { items, isLoading, error } = useCarta();
  return (
    <div className="carta">
      <CartaHeader />
      <CartaMenu items={items} isLoading={isLoading} error={error} />
      <CartaFooter />
    </div>
  );
}
