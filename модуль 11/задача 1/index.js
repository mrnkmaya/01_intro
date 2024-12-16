document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.survey-form');
    const results = document.querySelector('.results');

    form.addEventListener('submit', function (e) {
        e.preventDefault()
        
        const name = document.querySelector('.name').value.trim();
        const email = document.querySelector('.email').value.trim();
        const gender = form.gender.value
        const rating = document.querySelector('.rating').value;
        const interests = Array.from(form.querySelectorAll('input[class="interests"]:checked'))
            .map((checkbox) => checkbox.value)
        const comments = document.querySelector('.comments').value.trim();

        results.style.display = 'block'
        results.innerHTML = `
            <h2>Результаты опроса</h2>
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Пол:</strong> ${gender}</p>
            <p><strong>Оценка сервиса:</strong> ${rating}</p>
            <p><strong>Интересы:</strong> ${interests.length > 0 ? interests.join(', ') : 'Не указаны'}</p>
            <p><strong>Комментарии:</strong> ${comments || 'Отсутствуют'}</p>`
        
        
    });


})