window.addEventListener('DOMContentLoaded', (event) => {
    const cards = document.querySelectorAll('.app-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animated');
        }, index * 300); // Staggered animation for cards
    });
});
