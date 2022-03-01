const { header, footer, progressBar } = require("../shared/shared");

document.body.appendChild(header());

document.body.appendChild(progressBar(30))

const content = document.createElement('section');
content.innerHTML = `
      <h2>En el espacio...</h2>
      <p>
        Te has puesto el traje espacial. Y ya te encuentras en el espacio. Estas
        avanzando hacia el panel solar y utilizas el repuesto para reparalo.
        Todo parece encajar a la perfección.
      </p>
`

document.body.appendChild(content);

document.body.appendChild(footer([
  { content: 'Entrar a la nave y probar la energía ', src: 'phase02.html' }
]));
