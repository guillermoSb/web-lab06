
export const footer = (links) => {
    const footerContainer = document.createElement('footer');
    footerContainer.classList = ['container'];
    footerContainer.classList.add('my-5')
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'row justify-content-md-center'
    links = links.map(link => {
        const linkContainer = document.createElement('a');
        linkContainer.setAttribute('href', link.src);
        linkContainer.classList.add('col-3');
        linkContainer.classList.add('btn');
        linkContainer.classList.add('mx-4');
        linkContainer.classList.add('btn-primary');
        linkContainer.classList.add('animate__animated')
        linkContainer.classList.add('animate__bounce')
        linkContainer.innerHTML = link.content + ' &rarr;';
        return linkContainer;
    });
    for (const link of links) {
        buttonContainer.appendChild(link);
    }
    footerContainer.appendChild(buttonContainer);
    return footerContainer;
}