// Desplazamiento suave para los enlaces del menú de navegación
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Resta la altura del menú para que no cubra el título
                behavior: 'smooth'
            });
        }
    });
});
