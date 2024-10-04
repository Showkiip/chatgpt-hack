// Example: Portfolio filter functionality
const buttons = document.querySelectorAll('.portfolio-filter button');
const images = document.querySelectorAll('.portfolio-grid img');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.textContent.toLowerCase();
        images.forEach(img => {
            if (filter === 'all' || img.alt.includes(filter)) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    });
});
