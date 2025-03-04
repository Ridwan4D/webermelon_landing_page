const menuList = document.getElementById('nav_list');

const toggleMenu = () => {
    if (menuList.classList.contains('show-menu')) {
        menuList.classList.remove('show-menu');
        menuList.classList.add('hide-menu');
    } else {
        menuList.classList.remove('hide-menu');
        menuList.classList.add('show-menu');
    }
};
