export class Delivery {
    constructor(customerName, address, distance, status = 'delivery') {
        this.customerName = customerName;
        this.address = address;
        this.distance = distance; // distance in km
        this.status = status; // delivery, delivered, canceled
    }

    // Method to create and return a card element for delivery
    createCard() {
        const card = document.createElement('div');
        card.classList.add('delivery-card');

        // Apply styles based on status
        if (this.status === 'Доставлен') {
            card.classList.add('delivered');
        } else if (this.status === 'Отменён') {
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

    // Getter and setter for customer name
    get name() {
        return this.customerName;
    }

    set name(newName) {
        this.customerName = newName;
    }

    // Getter and setter for address
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
        const validStatuses = ['Доставляется', 'Доставлен', 'Отменён'];
        if (validStatuses.includes(newStatus)) {
            this.status = newStatus;
        } else {
            console.error('Недопустимый статус.');
        }
    }
}
