import { Delivery } from "./Delivery.js";

document.addEventListener('DOMContentLoaded', () => {
    const deliveryArr = [
        new Delivery("Ольга", "ул. Вымыслов, д. 12", 8),
        new Delivery("Дмитрий", "ул. Задачная, д. 7", 3),
        new Delivery("Оля", "ул. Ткачей, д. 43", 11)
    ];

    const app = document.getElementById('app');

    deliveryArr.forEach((delivery) => {
        const card = delivery.createCard();
        app.appendChild(card);
    });

});
