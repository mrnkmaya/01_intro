const addBtn = document.querySelector('.firstBtn');
const removeBtn = document.querySelector('.secondBtn');
const listEl = document.querySelector('.list');


addBtn.addEventListener('click', () => {
    const liEl = document.createElement('li');
    liEl.textContent = 'Новый элемент списка'
    listEl.appendChild(liEl)
});

removeBtn.addEventListener('click', () => {
    listEl.removeChild(listEl.lastElementChild)
})