export default function CartaFiltro({ filtro, setFiltro }) {
  return (
    <div className="filtro-container">
      <h2>Filtro</h2>
      <input
        type="text"
        placeholder="Buscar por nombre o categoría..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
    </div>
  );
}
