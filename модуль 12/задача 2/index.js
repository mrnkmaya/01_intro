document.addEventListener('DOMContentLoaded', function () {

    const button = document.querySelector('.submit'); // Кнопка
    const inputEl = document.querySelector('.text');  // Поле ввода
    const message = document.querySelector('.message'); // Сообщение о промокоде

    const promocodeObj = {
        promocode: "PROM50",
        gift: "Скидка 50%"
    };

    function getCookie() {
        return document.cookie.split("; ").reduce((acc, item) => {
            const [name, value] = item.split("=");
            acc[name] = decodeURIComponent(value);
            return acc;
        }, {});
    }

    function setCookie(name, value, days = 7) {
        const expires = new Date();
        expires.setDate(expires.getDate() + days);
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
    }

    function checkPromocode() {
        const enteredCode = inputEl.value.trim(); // Получаем актуальное значение
        if (enteredCode == promocodeObj.promocode) {
            message.textContent = `Промокод активирован. ${promocodeObj.gift}`;
            message.style.display = 'block'
            message.classList.add('correct')
            setCookie('promocode', enteredCode); // Сохраняем промокод
        } else {
            message.style.display = 'none'
        }
    }

    button.addEventListener('click', function (e) {
        e.preventDefault();
        checkPromocode();
    });

    const cookies = getCookie();
    if (cookies.promocode === promocodeObj.promocode) {
        inputEl.value = cookies.promocode;
        message.textContent = `Промокод активирован. ${promocodeObj.gift}`;
        message.style.display = 'block';
    }
});
