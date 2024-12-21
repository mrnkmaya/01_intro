import { showListPage } from './list.js';
import { showAddPage } from './add.js';
import { showLoader, hideLoader } from './loader.js';

document.addEventListener('DOMContentLoaded', () => {
    // Стартовая страница
    navigateTo('list');
});

// Функция для навигации
export function navigateTo(page) {
    showLoader();
    const app = document.getElementById('app');
    app.innerHTML = ''; // Очистка контейнера
    if (page === 'list') {
        showListPage();
    } else if (page === 'add') {
        showAddPage();
    }
    hideLoader();
}
