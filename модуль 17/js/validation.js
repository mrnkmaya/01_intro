export function setupValidation(form) {
    const errors = {}; // Объект для хранения ошибок
    const nameInput = form.querySelector('.name');
    const shelfInput = form.querySelector('.shelf');
    const weightInput = form.querySelector('.weight');
    const timeInput = form.querySelector('.time');

    // Проверка поля "Название"
    if (!nameInput.value.trim()) {
        errors.name = 'Название обязательно для заполнения.';
    } else if (nameInput.value.trim().length < 2) {
        errors.name = 'Название должно быть не менее 2 символов.';
    }

    // Проверка поля "Полка"
    if (!shelfInput.value.trim()) {
        errors.shelf = 'Полка обязательна для заполнения.';
    } else if (isNaN(shelfInput.value.trim())) {
        errors.shelf = 'Полка должна быть числом.';
    }

    // Проверка поля "Вес"
    if (!weightInput.value.trim()) {
        errors.weight = 'Вес обязателен для заполнения.';
    } else if (isNaN(weightInput.value.trim())) {
        errors.weight = 'Вес должен быть числом.';
    }

    // Проверка поля "Время хранения"
    if (!timeInput.value.trim()) {
        errors.time = 'Время хранения обязательно для заполнения.';
    }

    return errors;
}

export function showValidationErrors(form, errors) {
    // Очищаем все предыдущие ошибки
    form.querySelectorAll('.error-message').forEach((el) => el.remove());

    // Отображаем новые ошибки
    Object.keys(errors).forEach((key) => {
        const input = form.querySelector(`.${key}`);
        const errorEl = document.createElement('span');
        errorEl.classList.add('error-message');
        errorEl.textContent = errors[key];
        input.parentElement.appendChild(errorEl);
    });
}
