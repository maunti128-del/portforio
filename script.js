const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const body = document.body;

function setNavState(isOpen) {
  navMenu.classList.toggle('open', isOpen);
  navToggle.classList.toggle('open', isOpen);
  body.classList.toggle('nav-open', isOpen);
  navToggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  navToggle.setAttribute('aria-expanded', String(isOpen));
}

navToggle.addEventListener('click', () => {
  setNavState(!navMenu.classList.contains('open'));
});

const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) {
      setNavState(false);
    }
  });
});
