import useCarta from "../hooks/useCarta";
import CartaFooter from "./footer/CartaFooter";
import CartaHeader from "./header/CartaHeader";
import CartaMenu from "./cartaMenu/CartaMenu";

export default function CartaContainer() {
  const { items, isLoading, error } = useCarta();
  return (
    <>
      <CartaHeader />
      <CartaMenu items={items} isLoading={isLoading} error={error} />
      <CartaFooter />
    </>
  );
}
