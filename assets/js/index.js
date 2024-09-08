// JavaScript para el menú desplegable
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu');
});

// Efectos de hover en las características
document.querySelectorAll('.feature-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s ease';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Animación de scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', checkScroll);

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.8;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
}

// Carrusel de testimonios
const slider = document.querySelector('.slider');
const testimonialCards = document.querySelectorAll('.testimonial-card');

const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;
const totalTestimonials = testimonialCards.length;
const cardWidth = testimonialCards[0].clientWidth;

// Función para mover el slider
function moveSlider(index) {
    slider.style.transform = `translateX(${-cardWidth * index}px)`;
}

// Evento para el botón "Siguiente"
nextButton.addEventListener('click', () => {
    if (currentIndex < totalTestimonials - 1) {
        currentIndex++;
        moveSlider(currentIndex);
    } else {
        currentIndex = 0;
        moveSlider(currentIndex);
    }
});

// Evento para el botón "Anterior"
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        moveSlider(currentIndex);
    } else {
        currentIndex = totalTestimonials - 1;
        moveSlider(currentIndex);
    }
});

// Botón CTA
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('click', () => {
    alert('¡Gracias por tu interés por nuestros productos. Serás redirigido a la página de compra.');
});
