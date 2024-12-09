function sort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp                
            } 
        }
    }
    return arr
}

function renderList(heights){
    listEl.innerHTML = ''
    for (const element of heights) {
        let liEl = document.createElement('li');
        liEl.textContent = element
        listEl.append(liEl)
    }
}

const array = ['Арбуз', 'Книга', 'Кофе', 'Яблоки', 'Сахар', 'Молоко', 'Макароны']
let listEl = document.querySelector('.list');
let result = sort(array)
renderList(result)

let pushBtn = document.querySelector('.pushBtn');
pushBtn.onclick = function (){
    let newName = prompt('Введите название')
    if (!newName) {
        alert('Название товара не введено!')
    } else {
        array.push(newName)
        renderList(sort(array))
    }
}



