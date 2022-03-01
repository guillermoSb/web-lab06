const { header, footer, progressBar } = require("../shared/shared");

document.body.appendChild(header());

document.body.appendChild(progressBar(20))

const content = document.createElement('section');
content.innerHTML = `
      <h2>Cabina de Energía</h2>
      <p>
        Notas que un panel solar está roto. Por fortuna tienes un repuesto en
        frente de tí. Sin embargo, cambiar el panel requiere un EVA. Por lo que
        debes de decidir:
      </p>
`

document.body.appendChild(content);

document.body.appendChild(footer([
  { content: 'Ponerme el traje espacial ', src: 'eva01.html' },
  { content: 'Regresar ', src: 'phase01.html' },
]));
