document.addEventListener('DOMContentLoaded', function () {

    const button = document.querySelector('.submit'); // Кнопка
    const inputEl = document.querySelector('.text');
    const message = document.querySelector('.message'); 

    const promocodeArr = [
        {
          promocode: 'PROM10',
          gift: "Скидка 10%"
        },
        {
          promocode: 'PROM50',
          gift: "Скидка 50%"
        },
        {
          promocode: 'GIFT',
          gift: "Подарок в корзине"
        }
    ]


    function checkPromocode() {
        const enteredCode = inputEl.value.trim();
        const foundCode = promocodeArr.find(item => item.promocode === enteredCode);
        if (foundCode) {
            message.textContent = `Промокод активирован. ${foundCode.gift}`
            message.style.display = 'block' 
            message.classList.add('correct')        
        } else {
            message.style.display = 'none'
        }
    }

    button.addEventListener('click', function (e) {
        e.preventDefault();
        checkPromocode();
    });

});
