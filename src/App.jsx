import { useState } from "react";
import "./App.css";
import CartaContainer from "./components/CartaContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CartaContainer />
    </>
  );
}

export default App;
