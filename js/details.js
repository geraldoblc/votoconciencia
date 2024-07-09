function toggleContent(element) {
    const hiddenContent = element.parentNode.nextElementSibling;
    const icon = element.querySelector('i');
    const h2 = element.closest('h2');

    if (hiddenContent.classList.contains('hidden-content')) {
        hiddenContent.classList.remove('hidden-content');
        icon.style.transform = 'rotate(180deg)';
        h2.classList.add('h2-expanded');
    } else {
        hiddenContent.classList.add('hidden-content');
        icon.style.transform = 'rotate(0deg)';
        h2.classList.remove('h2-expanded');
    }
}