const links = document.querySelectorAll('.menu a');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'blue';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '#fff';
    });
});
