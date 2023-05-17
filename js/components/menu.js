let burger = document.querySelector('.burger');
let closeMenu = document.querySelector('.menu__close');
let menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    menu.classList.add('menu--visible')
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('menu--visible')
})