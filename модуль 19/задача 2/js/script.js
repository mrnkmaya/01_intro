import { EditDelivery } from './EditDelivery.js';

document.addEventListener('DOMContentLoaded', () => {
    const deliveryArr = [
        new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8, "Доставляется"),
        new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "Доставлен"),
        new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "Отменён")
    ];

    const app = document.getElementById('app');

    function renderEditForm(delivery) {
        const form = document.createElement('form');
        form.classList.add('edit-form');

        form.innerHTML = `
            <label>Имя:</label>
            <input type="text" name="name" value="${delivery.name}" />
            
            <label>Адрес:</label>
            <input type="text" name="address" value="${delivery.deliveryAddress}" />
            
            <label>Расстояние (км):</label>
            <input type="number" name="distance" value="${delivery.deliveryDistance}" />
            
            <label>Статус:</label>
            <select name="status">
                <option value="Доставляется" ${delivery.deliveryStatus === 'Доставляется' ? 'selected' : ''}>Доставляется</option>
                <option value="Доставлен" ${delivery.deliveryStatus === 'Доставлен' ? 'selected' : ''}>Доставлен</option>
                <option value="Отменён" ${delivery.deliveryStatus === 'Отменён' ? 'selected' : ''}>Отменён</option>
            </select>
            
            <button type="submit">Сохранить</button>
        `;

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            delivery.name = formData.get('name');
            delivery.deliveryAddress = formData.get('address');
            delivery.deliveryDistance = parseFloat(formData.get('distance'));
            delivery.deliveryStatus = formData.get('status');

            renderDeliveries();
        });

        app.innerHTML = '';
        app.appendChild(form);
    }

    function renderDeliveries() {
        app.innerHTML = '';

        deliveryArr.forEach((delivery) => {
            const card = delivery.createCardWithEdit(renderEditForm);
            app.appendChild(card);
        });
    }

    renderDeliveries();
});
