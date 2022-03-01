const { header, footer, progressBar } = require("../shared/shared");

document.body.appendChild(header());

document.body.appendChild(progressBar(10))

const content = document.createElement('section');
content.innerHTML = `
      <h2>Escape</h2>
      <p>
        Estas en la sala de escape. En frente tuyo tienes la última cápsula.
        Puedes entrar y activar el protocolo de desacoplamiento.
      </p>
      <p>¿Qué deseas hacer?</p>
`

document.body.appendChild(content);

document.body.appendChild(footer([
  { content: 'Entrar y activar protocolo ', src: 'die02.html' },
  { content: 'Regresar ', src: 'phase01.html' },
]));

