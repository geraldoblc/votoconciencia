function toggleContent(element) {
    const hiddenContent = element.parentNode.nextElementSibling;
    const icon = element.querySelector('svg');

    if (hiddenContent.classList.contains('hidden-content')) {
        hiddenContent.classList.remove('hidden-content');
        element.textContent = 'Mostrar menos ';
        icon.classList.add('rotate-180'); // Adiciona a classe para rotacionar 180 graus
    } else {
        hiddenContent.classList.add('hidden-content');
        element.textContent = 'Mostrar mais ';
        icon.classList.remove('rotate-180'); // Remove a classe para voltar à posição normal
    }
}