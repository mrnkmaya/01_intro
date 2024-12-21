const storage_key = 'warehouse_items';

// Получение данных
export function getItems() {
    return JSON.parse(localStorage.getItem(storage_key)) || [];
}

// Сохранение данных
export function saveItems(items) {
    localStorage.setItem(storage_key, JSON.stringify(items));
}

// Добавление новой записи
export function addItem(item) {
    const items = getItems();
    items.push(item);
    saveItems(items);
}

// Удаление записи
export function removeItem(index) {
    const items = getItems();
    items.splice(index, 1);
    saveItems(items);
}
