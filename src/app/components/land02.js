const { header, footer, progressBar } = require("../shared/shared");

document.body.appendChild(header());

document.body.appendChild(progressBar(100))

const content = document.createElement('section');
content.classList.add('container-fluid');
content.classList.add('my-5');
content.innerHTML = `
       <h2>No hay nadie</h2>
      <p>
        Has logrado aterrizar bien, pero no hay nadie que te reciba. Sales a ver
        el paisaje y lo ultimo que ves es un oso polar :O
      </p>
`

document.body.appendChild(content);

document.body.appendChild(footer([
  { content: 'Volver a jugar ', src: 'index.html' }
]));
