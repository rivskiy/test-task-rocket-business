
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuLinks = document.querySelectorAll('.menu__list-item');

const showMenu = () => {
  menu.classList.toggle('menu--active');
  menuBtn.classList.toggle('menu-btn--active');
  document.body.classList.toggle('body--block');
};

menuBtn.addEventListener('click', showMenu);

for (let link of menuLinks) {
  link.addEventListener('click', showMenu)
};