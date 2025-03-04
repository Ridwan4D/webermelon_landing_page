const menuList = document.getElementById('nav_list');
const circle = document.querySelector('.circle_icon');
const hamburger = document.querySelector('.hamburger_icon');

const toggleMenu = () => {
    if (menuList.classList.contains('show-menu')) {
        // When the menu is open, close it
        menuList.classList.remove('show-menu');
        menuList.classList.add('hide-menu');

        // Show the hamburger and hide the circle icon
        hamburger.style.display = 'block';
        circle.style.display = 'none';
    } else {
        // When the menu is closed, open it
        menuList.classList.remove('hide-menu');
        menuList.classList.add('show-menu');

        // Hide the hamburger and show the circle icon
        hamburger.style.display = 'none';
        circle.style.display = 'block';
    }
};
