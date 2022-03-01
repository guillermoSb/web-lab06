const { header, footer, progressBar } = require("../shared/shared");


document.body.appendChild(header());

document.body.appendChild(progressBar(100))

const content = document.createElement('section');
content.classList.add('container-fluid');
content.classList.add('my-5');
content.innerHTML = `
    
      <h2>Has Muerto</h2>
      <p>
        La opción que escogiste no fue la correcta para abordar el problema de
        tu nave. La pérdida de presión te deja inconsiente.
      </p>

`

document.body.appendChild(content);

document.body.appendChild(footer([
  { content: 'Intentar De Nuevo ', src: 'index.html' }
]));
