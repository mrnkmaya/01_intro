let bookBtn = document.querySelector('.bookBtn');
let findBtn = document.querySelector('.findBtn');
let bookList = document.querySelector('.bookList');

let books = ['Мастер и Маргарита', 'Гарри Поттер', 'За пропастью во ржи', 'Властелин колец', 'Дюна', 'Отцы и дети']

function find(arr, search){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return i
        }  
    }
    return -1
}
for (const element of books) {
    let liEl = document.createElement('li');
    liEl.textContent = element
    bookList.append(liEl)
}


bookBtn.onclick = function () {
    let newHeight = prompt('Введите название книги')
    if (!newHeight) {
        alert('Название книги не введено!')
    } else {
        let liEl = document.createElement('li');
        liEl.textContent = newHeight
        bookList.append(liEl)
    }
}

findBtn.onclick = function () {
    findBtn.onclick = function () {
        let allItems = document.querySelectorAll('.bookList li');
        allItems.forEach(item => {
            item.classList.remove('search');
        });
    
        let search = prompt('Введите название для поиска');
        let findIndex = find(books, search); 
        
        if (findIndex > -1) {
            allItems[findIndex].classList.add('search');
        } else {
            alert('Книга не найдена!');
        }
    }
    
    
}