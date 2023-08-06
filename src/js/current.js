document.addEventListener('DOMContentLoaded', function() {
    const categoriesList = document.querySelector('.categories-list');
    const categoryLinks = categoriesList.querySelectorAll('.categories-text');

    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            categoryLinks.forEach(link => {
                link.classList.remove('current');
            });

            link.classList.add('current');
        });
    });
});