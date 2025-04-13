document.addEventListener('DOMContentLoaded', () => {
    // Инициализация мобильного меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Анимации с использованием AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,  // Время анимации
            once: true,      // Анимация запускается один раз
            offset: 150,     // Смещение для начала анимации
        });
    }

    // Плавная прокрутка для якорных ссылок
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    // Функция для отслеживания прокрутки и добавления/удаления класса
    const header = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
