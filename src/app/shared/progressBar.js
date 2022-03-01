export const progressBar = (value) => {
    const progressContainer = document.createElement('div');
    progressContainer.className = "container-fluid"
    const progressBarDiv = document.createElement('div');
    progressBarDiv.className = "progress";
    progressBarDiv.classList.add('animate__animated');
    progressBarDiv.classList.add('animate__fadeIn');
    progressBarDiv.innerHTML = `
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: ${value}%" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="100"></div>

    `;
    progressContainer.appendChild(progressBarDiv);
    return progressContainer;
}