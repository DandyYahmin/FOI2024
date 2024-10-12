const hamburger = document.querySelector('.hamburger');
const dropdownMenu = document.querySelector('.dropdown-menu');
const bars = document.querySelector('.fa-bars');
const x = document.querySelector('.fa-x');

hamburger.addEventListener('click', () => {
    if (dropdownMenu.style.display === 'none' || !dropdownMenu.style.display) {
        dropdownMenu.style.display = 'flex';
        bars.style.display = 'none';
        x.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
        bars.style.display = 'block';
        x.style.display = 'none';
    }
});