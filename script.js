document.addEventListener('DOMContentLoaded', function () {
    let bounceText = document.getElementById('bounce-text');
    bounceText.classList.add('bounce');
    
    let links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('mouseover', function () {
            this.style.fontSize = '1.2em';
        });
        link.addEventListener('mouseout', function () {
            this.style.fontSize = '1em';
        });
    });
});
