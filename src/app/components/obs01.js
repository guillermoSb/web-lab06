
document.body.appendChild(header());

document.body.appendChild(progressBar(10))

const content = document.createElement('section');
content.innerHTML = `
      <h2>Vista</h2>
      <p>
        La sala de observación tiene una vista increible. A través del vidrio
        puedes ver el planeta tierra rotando. Piensas:
        <em>No hay nada que hacer acá</em>
      </p>
      <br />
      <figure>
        <img
          src="https://www.fromspacewithlove.com/wp-content/uploads/2018/10/iss-live-img.png"
          alt="Imagen del planeta tierra desde el espacio."
        />
        <figcaption>Tu vista</figcaption>
      </figure>
      <br />
      <p>¿Qué deseas hacer?</p>
`

document.body.appendChild(content);

document.body.appendChild(footer([
  { content: 'Regresar ', src: 'phase01.html' },
]));
