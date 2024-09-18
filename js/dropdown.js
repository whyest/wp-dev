let dropdown = document.querySelector('.menu'), //ul
  submenu = document.querySelectorAll('.sub-menu'), //ul li a
  buttonClick = document.querySelector('.check-button'), //button
  hamburger = document.querySelector('.menu-icon');

buttonClick.addEventListener('click', () => {
  dropdown.classList.toggle('show-dropdown');
  if (submenu.length > 0) {
    [...submenu].forEach(function (item) {
      item.classList.toggle('show-dropdown');
    });
  }
  hamburger.classList.toggle('animate-button');
});
