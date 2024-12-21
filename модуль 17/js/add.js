import { addItem } from './storage.js';
import { navigateTo } from './script.js';
import { setupValidation, showValidationErrors } from './validation.js';

export function showAddPage() {
    const app = document.getElementById('app');

    const title = document.createElement('h1');
    title.textContent = 'Добавить запись';

    const form = document.createElement('form');
    form.innerHTML = `
        <div class="add-container">
            <div>
                <input name="name" class="name" type="text" placeholder="Название" required>
            </div>
            <div>
                <input name="shelf" class="shelf" type="text" placeholder="Полка" required>
            </div>
            <div>
                <input name="weight" class="weight" type="text" placeholder="Вес" required>
            </div>
            <div>
                <input name="time" class="time" type="text" placeholder="Время хранения" required>
            </div>
        </div>
        <button type="submit">Добавить</button>
    `;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const item = {
            name: form.name.value,
            shelf: form.shelf.value,
            weight: form.weight.value,
            time: form.time.value,
        };
        addItem(item);
        navigateTo('list'); // Переход на страницу "Склад"
    });

    app.append(title, form);

    // Установка валидации
    setupValidation(form);
}
