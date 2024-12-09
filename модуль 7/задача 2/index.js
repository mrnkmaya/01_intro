let heightBtn = document.querySelector('.heightBtn');
let filterBtn = document.querySelector('.filterBtn');
let heightList = document.querySelector('.heightList');

function filter(arr, min) {
    const result = []
    for (const item of arr) {
        if (item >= min) {
            result.push(item)
        }
    }
    return result
}

let heights = [164, 157, 160, 143, 170]

function renderList(heights){
    heightList.innerHTML = ''
    for (const element of heights) {
        let liEl = document.createElement('li');
        liEl.textContent = element
        heightList.append(liEl)
    }
}



heightBtn.onclick = function () {
    let newHeight = prompt('Введите рост')
    
    if (!newHeight) {
        alert('Рост не введён!')
    } else {
        heights.push(newHeight)
        renderList(heights)
    }
}

filterBtn.onclick = function () {
    let min = prompt('Введите минимальное значение')
    const result = filter(heights, min)
    renderList(result)
}

renderList(heights)