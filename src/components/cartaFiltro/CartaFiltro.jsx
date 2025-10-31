import "./cartaFiltro.css";

export default function CartaFiltro({ filtro, setFiltro }) {
  return (
    <div className="filtro-container">
      <h2>Filtre por nombre o categoría:</h2>
      <input
        className="filtro-input"
        type="text"
        placeholder="Buscar por nombre o categoría..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
    </div>
  );
}
