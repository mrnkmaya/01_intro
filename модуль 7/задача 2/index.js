let heightBtn = document.querySelector('.heightBtn');
let filterBtn = document.querySelector('.filterBtn');
let heightList = document.querySelector('.heightList');

let heights = [164, 157, 160, 143, 170]

for (const element of heights) {
    let liEl = document.createElement('li');
    liEl.textContent = element
    heightList.append(liEl)
}


heightBtn.onclick = function () {
    let newHeight = prompt('Введите рост')
    if (!newHeight) {
        alert('Рост не введён!')
    }
}

filterBtn.onclick = function () {
    alert('fkdkfkdk')
}