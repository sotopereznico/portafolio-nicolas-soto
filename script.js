// Desplazamiento suave para los enlaces del menú de navegación
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Reproducción de video al pasar el cursor (Hover)
document.querySelectorAll('.project-video').forEach(container => {
    const iframe = container.querySelector('iframe');
    const baseSrc = iframe.getAttribute('data-base-src');

    container.addEventListener('mouseenter', () => {
        // Al entrar el cursor, activamos autoplay silencioso
        iframe.src = `${baseSrc}?autoplay=1&mute=1`;
    });

    container.addEventListener('mouseleave', () => {
        // Al salir el cursor, restauramos la URL original para pausar
        iframe.src = baseSrc;
    });
});