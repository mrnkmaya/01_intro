export class Delivery {
    constructor(customerName, address, distance) {
        this.customerName = customerName;
        this.address = address;
        this.distance = distance;
    }

    createCard() {
        const card = document.createElement('div');
        card.classList.add('delivery-card');

        card.innerHTML = `
            <h3>${this.customerName}</h3>
            <p><strong>Адрес:</strong> ${this.address}</p>
            <p><strong>Расстояние:</strong> ${this.distance} км</p>
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
}
