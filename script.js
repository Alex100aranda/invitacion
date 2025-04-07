// Obtener el elemento h3 dentro de la sección de agradecimiento
const h3Element = document.querySelector('#agradecimiento-1 h3');

// Verificar si el h3 está en la vista mientras se hace scroll
window.addEventListener('scroll', function() {
    const elementPosition = h3Element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) { // El 100 es un pequeño margen
        h3Element.classList.add('animate-right-to-left');
    }
});




// Obtener el elemento h3 dentro de la sección de iglesia
const ceremoniaElement = document.querySelector('#iglesia h3');

// Verificar si el h3 está en la vista mientras se hace scroll
window.addEventListener('scroll', function() {
    const elementPosition = ceremoniaElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) { // El 100 es un pequeño margen
        ceremoniaElement.classList.add('animate-right-to-left');
    }
});

