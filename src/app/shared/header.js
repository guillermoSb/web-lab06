export const header = () => {
  const headerContainer = document.createElement('header');   // Create header document
  headerContainer.innerHTML = `
    <h1>Perdido en el espacio 🚀</h1>
      <details>
        <summary>Reglas del juego</summary>
        <p>
          Este es un juego de aventura, el objetivo es terminar la historia
          correctamente :).
        </p>
        <ol>
          <li>Lee atentamente cada situación.</li>
          <li>Toma una decisión.</li>
          <li>Mantente a salvo.</li>
        </ol>
      </details>
      <br />
    `;
  return headerContainer;
}