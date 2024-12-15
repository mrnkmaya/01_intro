const priceList = [100, 500, 250, 750, 300]
const listEl = document.querySelector('.list');
const ascBtn = document.querySelector('.ascending');
const descBtn = document.querySelector('.descending');

function renderList(heights){
    listEl.innerHTML = ''
    for (const element of heights) {
        let liEl = document.createElement('li');
        liEl.textContent = element
        listEl.append(liEl)
    }
}

renderList(priceList)

ascBtn.onclick = () => {
    renderList(priceList.sort((a, b) => a - b))
}

descBtn.onclick = () => {
    renderList(priceList.sort((a, b) => b - a))
}
