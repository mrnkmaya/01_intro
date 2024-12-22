import { Delivery } from './Delivery.js';

export class EditDelivery extends Delivery {
    constructor(customerName, address, distance, status = 'Доставляется') {
        super(customerName, address, distance, status);
    }

    createCardWithEdit(onEdit) {
        const card = document.createElement('div');
        card.classList.add('delivery-card');

        const nameEl = document.createElement('div');
        nameEl.textContent = `Имя: ${this.name}`;
        card.appendChild(nameEl);

        const addressEl = document.createElement('div');
        addressEl.textContent = `Адрес: ${this.deliveryAddress}`;
        card.appendChild(addressEl);

        const distanceEl = document.createElement('div');
        distanceEl.textContent = `Расстояние: ${this.deliveryDistance} км`;
        card.appendChild(distanceEl);

        const statusEl = document.createElement('div');
        statusEl.textContent = `Статус: ${this.status}`;
        statusEl.classList.add('delivery-status');

        if (this.status === 'Доставлен') {
            card.style.border = '2px solid green';
        } else if (this.status === 'Отменён') {
            card.style.opacity = '0.5';
        }

        card.appendChild(statusEl);

        const editButton = document.createElement('button');
        editButton.textContent = 'Изменить';
        editButton.classList.add('edit-button');
        card.appendChild(editButton);

        editButton.addEventListener('click', () => {
            onEdit(this);
        });

        return card;
    }

    static getTotalDistance(deliveries) {
        return deliveries
            .filter(delivery => delivery.status !== 'Отменён') 
            .reduce((total, delivery) => total + delivery.distance, 0);
    }
}
