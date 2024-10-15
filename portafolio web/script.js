// Alternar visibilidad del menú
document.getElementById("homeButton").addEventListener("click", function(e) {
    e.preventDefault();  // Previene la acción predeterminada del enlace

    var menuItems = document.getElementById("menuItems");

    // Alterna la visibilidad del menú
    if (menuItems.classList.contains("menu-visible")) {
        menuItems.classList.remove("menu-visible");
    } else {
        menuItems.classList.add("menu-visible");
    }
});

// Alternar entre modo claro y oscuro
document.getElementById("toggleMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.querySelector("ul").classList.toggle("dark-mode");
    var links = document.querySelectorAll("li a");
    links.forEach(function(link) {
        link.classList.toggle("dark-mode");
    });
});

// Manejo del formulario de contacto
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();  // Previene el envío real del formulario

    // Muestra el mensaje de éxito
    alert("Registro validado. ¡Gracias por contactar!");

    // Opcional: puedes reiniciar el formulario
    this.reset();
});

// Lógica del carrusel
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    const carouselContainer = document.querySelector('.carousel-container');
    const offset = -currentIndex * 100; // Desplazamiento negativo
    carouselContainer.style.transform = `translateX(${offset}%)`; // Aplica el desplazamiento
}

function moveSlide(direction) {
    currentIndex += direction;

    // Restringe el índice para que no exceda el rango
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    updateCarousel();
}

// Configuración de desplazamiento automático
setInterval(() => {
    moveSlide(1); // Cambia de slide automáticamente cada 3 segundos
}, 3000);

// Abrir modal
function openModal(title, image, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalImage').src = image;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modal').style.display = 'block'; // Muestra el modal
}

// Cerrar modal
function closeModal() {
    document.getElementById('modal').style.display = 'none'; // Oculta el modal
}
