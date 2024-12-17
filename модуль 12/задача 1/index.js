document.addEventListener('DOMContentLoaded', function () {

    const giftArr = [
        {
        title: "Скидка 20% на первую покупку в нашем магазине!",
        icon: "images/gift1.png"
        },
        {
        title: "Скидка 10% на всё!",
        icon: "images/gift2.png"
        },
        {
        title: "Подарок при первой покупке в нашем магазине!",
        icon: "images/gift3.png"
        },
        {
        title: "Бесплатная доставка для вас!",
        icon: "images/gift4.png"
        },
        {
        title: "Сегодня день больших скидок!",
        icon: "images/gift5.png"
        }
    ]

    function randomFromInterval(){
        const ranIndex = Math.floor(Math.random() * giftArr.length)
        return giftArr[ranIndex]
    }

    function showPopup(gift){
        const overlay = document.createElement('div');
        overlay.classList.add('popup-overlay')

        const card = document.createElement('div');
        card.classList.add('popup-card')

        const icon = document.createElement('img');
        icon.src = gift.icon

        const title = document.createElement('h3');
        title.textContent = gift.title

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Отлично!'
        closeButton.addEventListener('click', function () {
            overlay.remove()
        });

        card.appendChild(icon)
        card.appendChild(title)
        card.appendChild(closeButton)
        overlay.appendChild(card)

        document.body.appendChild(overlay)
    }

    setTimeout(() => {
        const randomGift = randomFromInterval()
        showPopup(randomGift)        
    }, 3000)

});