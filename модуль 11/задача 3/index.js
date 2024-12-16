document.addEventListener('DOMContentLoaded', function (e) {
    const text = document.querySelector('.text');
    const card = document.querySelector('.card');
    const color = document.querySelector('.color');

    text.addEventListener('input', function (e) {
        card.textContent = text.value || "Ваша карта"
    });

    color.addEventListener('change', function (e) {
        card.style.backgroundColor = color.value
    });
});