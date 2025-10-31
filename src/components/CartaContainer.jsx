import CartaFooter from "./footer/CartaFooter";
import CartaHeader from "./header/CartaHeader";
import CartaMenu from "./cartaMenu/CartaMenu"

export default function CartaContainer() {
  return (
    <>
      <CartaHeader />
      <CartaMenu />
      <CartaFooter />
    </>
  );
}
