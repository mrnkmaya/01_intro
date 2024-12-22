import { EditDelivery } from './EditDelivery.js';

document.addEventListener('DOMContentLoaded', () => {
    const deliveryArr = [
        new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8, "Доставляется"),
        new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "Доставлен"),
        new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "Отменён")
    ];

    const app = document.getElementById('app');

    // Функция для отображения формы редактирования
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
                <option value="Доставляется" ${delivery.status === 'Доставляется' ? 'selected' : ''}>Доставляется</option>
                <option value="Доставлен" ${delivery.status === 'Доставлен' ? 'selected' : ''}>Доставлен</option>
                <option value="Отменён" ${delivery.status === 'Отменён' ? 'selected' : ''}>Отменён</option>
            </select>
            
            <button type="submit">Сохранить</button>
        `;

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            delivery.name = formData.get('name');
            delivery.deliveryAddress = formData.get('address');
            delivery.deliveryDistance = parseFloat(formData.get('distance'));
            delivery.status = formData.get('status');

            // Перерисовка списка доставок
            renderDeliveries();
        });

        app.innerHTML = '';
        app.appendChild(form);
    }

    // Функция для отображения всех доставок
    function renderDeliveries() {
        app.innerHTML = '';

        deliveryArr.forEach((delivery) => {
            const card = delivery.createCardWithEdit(renderEditForm);
            app.appendChild(card);
        });

        // Кнопка для расчёта общего расстояния
        const totalDistanceButton = document.createElement('button');
        totalDistanceButton.textContent = 'Рассчитать общее расстояние';
        totalDistanceButton.classList.add('calculate-button');

        // Контейнер для результата
        const resultContainer = document.createElement('div');
        resultContainer.classList.add('result-container');

        // Обработчик клика для расчёта расстояния
        totalDistanceButton.addEventListener('click', () => {
            const totalDistance = EditDelivery.getTotalDistance(deliveryArr);
            resultContainer.textContent = `Общее расстояние: ${totalDistance} км`;
        });

        app.appendChild(totalDistanceButton);
        app.appendChild(resultContainer);
    }

    renderDeliveries();
});
