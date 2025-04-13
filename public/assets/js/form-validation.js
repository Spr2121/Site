document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const submitBtn = form.querySelector('.submit-btn');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputs = form.querySelectorAll('.form-input');
        let valid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('invalid');
                valid = false;
            } else {
                input.classList.remove('invalid');
            }
        });

        if (valid) {
            form.submit();  // Отправить форму, если все поля валидны
        }
    });

    // Добавление стилей для недействительных полей
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value.trim()) {
                input.classList.remove('invalid');
            }
        });
    });
});
