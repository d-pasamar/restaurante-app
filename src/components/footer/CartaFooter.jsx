import "./cartaFooter.css";

export default function CartaFooter() {
  return (
    <div className="carta-footer">
      <p>📍 Calle Sabores 42, Las Palmas</p>
      <p>📞 Teléfono: 928 123 456</p>
      <p>⏰ Horario: 12:00 – 23:00</p>
      <p>Desarrollado por David · DAM 2025</p>
      <p>
        Código fuente:{" "}
        <a
          href="https://github.com/d-pasamar/restaurante-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/d-pasamar/restaurante-app
        </a>
      </p>
      <p className="disclaimer">
        Esta aplicación ha sido desarrollada como parte de una práctica
        académica para el ciclo DAM (Desarrollo de Aplicaciones
        Multiplataforma). No representa un restaurante real ni tiene fines
        comerciales.
      </p>
    </div>
  );
}
