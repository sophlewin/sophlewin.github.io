// testing
document.addEventListener('DOMContentLoaded', function () {
    let links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseover', function () {
            this.style.fontSize = '1.2em';
        });
        link.addEventListener('mouseout', function () {
            this.style.fontSize = '1em';
        });
    });
    let secretLink = document.createElement('a');
    secretLink.href = 'secret.html';
    secretLink.textContent = 'secret';
    secretLink.classList.add('secret-link');
    let maxWidth = window.innerWidth - 100;
    let maxHeight = window.innerHeight - 50;
    let randomX = Math.floor(Math.random() * maxWidth);
    let randomY = Math.floor(Math.random() * maxHeight);
    secretLink.style.left = randomX + 'px';
    secretLink.style.top = randomY + 'px';
    document.body.appendChild(secretLink);
});

// more testing
