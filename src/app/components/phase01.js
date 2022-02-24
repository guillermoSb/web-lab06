
document.body.appendChild(header());

document.body.appendChild(progressBar(10))

const content = document.createElement('section');
content.innerHTML = `
      <h2>Próximos Pasos</h2>
      <p>
        Has logrado arreglar tu nave. Sin embargo el generador de energía está
        averiado, por lo que en unos momentos el sistema de soporte de vida va a
        fallar. En tu memoria llega un recuerdo:
        <em>Un objeto no identificado chocó con los paneles solares</em>
        <strong>Tu objetivo es arreglar el generador de energía</strong>
      </p>
      <p>Tienes las siguientes opciones para visitar:</p>
`

document.body.appendChild(content);

document.body.appendChild(footer([
  { content: 'Cabina de energía  ', src: 'energy01.html' },
  { content: 'Cápsula de Escape ', src: 'escape01.html' },
  { content: 'Cabina de observación ', src: 'obs01.html' }
]));

