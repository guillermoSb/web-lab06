const { header, footer, progressBar } = require("../shared/shared");

document.body.appendChild(
  header()
);
document.body.appendChild(progressBar(0))

const content = document.createElement('section');
content.classList.add('container-fluid');
content.classList.add('my-5');
content.innerHTML = `
      <h2>Piensa Rápido</h2>
      <p>
        Te despiertas en un asiento, tardas unos momentos en recordar que eres
        un astronauta de la NASA en la Estación Espacial Internacional. Te das
        cuenta que hay una <strong>alerta</strong> en el panel de control que
        dice:
        <em
          >CUIDADO! Pérdida de presión en la cabina. Tomar acción
          imediatamente</em
        >
      </p>
      <p>En frente de ti tienes tres botones. Elige.</p>
`

document.body.appendChild(content);

document.body.appendChild(footer([
  { content: 'Intentar Comunicación con la Tierra ', src: 'die01.html' },
  { content: 'Restaurar Presión en la Cabina ', src: 'phase01.html' },
  { content: 'Utilizar el telescopio ', src: 'die01.html' }
]));
