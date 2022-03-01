export const progressBar = (value) => {
    const progressBarDiv = document.createElement('div');
    progressBarDiv.classList = ['container-fluid'];
    progressBarDiv.classList.add('animate__animated');
    progressBarDiv.classList.add('animate__fadeIn');
    const progressBarSpan = document.createElement('span');
    progressBarSpan.innerHTML = 'Tu Progreso</br>';
    const progressBar = document.createElement('progress');
    progressBar.max = 100;
    progressBar.value = value;
    progressBarDiv.appendChild(progressBarSpan);
    progressBarDiv.appendChild(progressBar);
    return progressBarDiv;
}