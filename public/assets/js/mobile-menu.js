// Мобильное меню (бургер)
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const mobileBtn = document.querySelector('.mobile-menu-btn');

  if (mobileBtn && navbar) {
    mobileBtn.addEventListener('click', function () {
      navbar.classList.toggle('nav-open');
    });
  }
});