// Мобильное меню бургер
document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (burgerBtn && navLinks) {
    burgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
});
