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
});
