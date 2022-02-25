const footer = (links) => {
    const footerContainer = document.createElement('footer');
    const ulContainer = document.createElement('ul');
    links = links.map(link => {
        const liContainer = document.createElement('li');
        const linkContainer = document.createElement('a');
        linkContainer.setAttribute('href', link.src);
        linkContainer.innerHTML = link.content + ' &rarr;';
        liContainer.appendChild(linkContainer);
        return liContainer;
    });
    for (const link of links) {
        ulContainer.appendChild(link);
    }
    footerContainer.appendChild(ulContainer);
    return footerContainer;
}