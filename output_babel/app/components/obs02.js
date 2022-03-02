const {
  header,
  footer,
  progressBar
} = require("../shared/shared");

document.body.appendChild(header());
document.body.appendChild(progressBar(70));
const content = document.createElement('section');
content.classList.add('container-fluid');
content.classList.add('my-5');
content.innerHTML = `
      <h2>Plan de trayectoria</h2>
      <p>
        Marcas tu trayectoria en el mapa. Puedes elegir entre tres opciones:
      </p>
      <ol>
        <li>Desierto.</li>
        <li>Polo Norte.</li>
        <li>Océano Pacífico.</li>
      </ol>
      Elige:
`;
document.body.appendChild(content);
document.body.appendChild(footer([{
  content: 'Opción 1 ',
  src: 'land01.html'
}, {
  content: 'Opción 2 ',
  src: 'land02.html'
}, {
  content: 'Opción 3 ',
  src: 'land03.html'
}]));