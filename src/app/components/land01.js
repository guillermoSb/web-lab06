const { header, footer, progressBar } = require("../shared/shared");

document.body.appendChild(header());

document.body.appendChild(progressBar(100))

const content = document.createElement('section');
content.innerHTML = `
      <h2>Llegas sano y salvo</h2>
      <p>
        Un grupo de personas te reciben. Abren la cabina y te llevan al
        hospital. Has logrado sobrevivir a la aventura más peligrosa de tu vida.
        <em>No hay nada que hacer acá</em>
      </p>
`

document.body.appendChild(content);

document.body.appendChild(footer([
  { content: 'Volver a jugar ', src: 'index.html' }
]));
