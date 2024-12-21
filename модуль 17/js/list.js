import { getItems, removeItem } from './storage.js';
import { navigateTo } from './script.js';

export function showListPage() {
    const app = document.getElementById('app');
    
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper')
    

    const title = document.createElement('h1');
    title.classList.add('title')
    title.textContent = 'Склад';

    const addButton = document.createElement('button');
    addButton.textContent = 'Добавить запись';
    addButton.classList.add('addBtn')
    addButton.addEventListener('click', () => navigateTo('add'));
    

    const table = createTable();

    wrapper.append(title, addButton)
    app.append(wrapper, table);
}

function createTable() {
    const items = getItems();

    const table = document.createElement('table');
    table.innerHTML = `
        <thead class="header-table">
            <tr>
                <th>Название</th>
                <th>Полка</th>
                <th>Вес</th>
                <th>Время хранения</th>
                <th>Действие</th>
            </tr>
        </thead>
        <tbody>
        ${items.map((item, index) => `
            <tr>
                <td>${item.name}</td>
                <td>${item.shelf}</td>
                <td>${item.weight}</td>
                <td>${item.time}</td>
                <td><button class="delete-btn" data-index="${index}">Удалить</button></td>
            </tr>`).join('')}
        </tbody>
    `;

    table.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.dataset.index;
            removeItem(index);
            navigateTo('list'); // Перезагрузка страницы
        }
    });

    return table;
}
