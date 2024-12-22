import { Delivery } from './Delivery.js';

export class EditDelivery extends Delivery {
    constructor(customerName, address, distance, status = 'delivery') {
        super(customerName, address, distance, status);
    }

    createCardWithEdit(onEdit) {
        const card = this.createCard();

        const editButton = document.createElement('button');
        editButton.textContent = 'Изменить';
        editButton.classList.add('edit-button');
        card.appendChild(editButton);

        editButton.addEventListener('click', () => {
            onEdit(this);
        });

        return card;
    }
}
