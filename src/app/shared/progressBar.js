const progressBar = (value) => {
    const progressBarDiv = document.createElement('div');
    const progressBarSpan = document.createElement('span');
    progressBarSpan.innerHTML = 'Tu Progreso';
    const progressBar = document.createElement('progress')
    progressBar.max = 100;
    progressBar.value = value;
    progressBarDiv.appendChild(progressBarSpan);
    progressBarDiv.appendChild(progressBar);
    return progressBarDiv;
}