export class Delivery {
    constructor(customerName, address, distance, status = 'delivery') {
        this.customerName = customerName;
        this.address = address;
        this.distance = distance;
        this.status = status;
    }

    createCard() {
        const card = document.createElement('div');
        card.classList.add('delivery-card');

        if (this.status === 'delivered') {
            card.classList.add('delivered');
        } else if (this.status === 'canceled') {
            card.classList.add('canceled');
        }

        card.innerHTML = `
            <h3>${this.customerName}</h3>
            <p><strong>Адрес:</strong> ${this.address}</p>
            <p><strong>Расстояние:</strong> ${this.distance} км</p>
            <p><strong>Статус:</strong> ${this.status}</p>
        `;
        return card;
    }

    get name() {
        return this.customerName;
    }

    set name(newName) {
        this.customerName = newName;
    }

    get deliveryAddress() {
        return this.address;
    }

    set deliveryAddress(newAddress) {
        this.address = newAddress;
    }

    get deliveryDistance() {
        return this.distance;
    }

    set deliveryDistance(newDistance) {
        if (newDistance > 0) {
            this.distance = newDistance;
        } else {
            console.error('Расстояние должно быть положительным числом.');
        }
    }

    get deliveryStatus() {
        return this.status;
    }

    set deliveryStatus(newStatus) {
        const validStatuses = ['Доставляется', 'Доставляется', 'ОТмёнен'];
        if (validStatuses.includes(newStatus)) {
            this.status = newStatus;
        } else {
            console.error('Недопустимый статус.');
        }
    }
}
