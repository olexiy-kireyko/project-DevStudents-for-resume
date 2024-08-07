//mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobMenu = document.getElementById('mobMenu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  mobMenu.classList.toggle('is-open');
});
