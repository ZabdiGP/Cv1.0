// --- ANIMACIÓN DE INTRODUCCIÓN ---

// Escuchamos el evento 'load' (cuando toda la web, imágenes incluidas, ha cargado)
window.addEventListener('load', () => {
    
    const overlay = document.querySelector('.intro-overlay');
    
    // Pequeño timeout para que el usuario vea el color negro un instante
    setTimeout(() => {
        overlay.classList.add('intro-finish');
    }, 750); // Espera medio segundo antes de subir el telón
});

// Esperamos a que todo el HTML cargue antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {

    const observerOptions = {
        root: null, // Observa respecto a la ventana del navegador
        rootMargin: '0px',
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento entra en pantalla
            if (entry.isIntersecting) {
                // Le añadimos la clase 'show' que cambia la opacidad y posición
                entry.target.classList.add('show');
                // Dejamos de observarlo (para que no se anime otra vez si subes y bajas)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleccionamos todos los elementos que tengan la clase 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');
    
    // Le decimos al observador que vigile a cada uno de ellos
    hiddenElements.forEach((el) => observer.observe(el));
});
// --- MENÚ HAMBURGUESA ---

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

// 1. Abrir / Cerrar menú al tocar el icono
hamburger.addEventListener('click', () => {
    // Toggle añade la clase si no está, y la quita si está
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// 2. Cerrar el menú cuando tocamos un enlace
// (Es muy molesto navegar y que el menú se quede abierto tapando la web)
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});