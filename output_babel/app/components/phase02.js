const {
  header,
  footer,
  progressBar
} = require("../shared/shared");

document.body.appendChild(header());
document.body.appendChild(progressBar(50));
const content = document.createElement('section');
content.classList.add('container-fluid');
content.classList.add('my-5');
content.innerHTML = `
     <h2>Tu nave tiene energía</h2>
      <p>
        Todos los sistemas funcionan en orden y ya puedes respirar en paz. Sin
        embargo la estación ya no tiene comida para que puedas seguir en ella,
        debes encontrar la forma de salir.
      </p>
      <p>
        Por suerte, hay una nave de escape, pero primero debes marcar la
        trayectoria en la sala de observación.
      </p>
`;
document.body.appendChild(content);
document.body.appendChild(footer([{
  content: 'Ir a la sala de observación  ',
  src: 'obs02.html'
}]));