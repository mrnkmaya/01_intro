const img1Btn = document.querySelector('.img1');
const img2Btn = document.querySelector('.img2');
const img3Btn = document.querySelector('.img3');
const block = document.querySelector('.block');

function blockImage(button){
    const src = button.getAttribute('src')
    block.innerHTML = ''

    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', src)

    block.append(imgEl)
}

img1Btn.onclick = () => blockImage(img1Btn)
img2Btn.onclick = () => blockImage(img2Btn)
img3Btn.onclick = () => blockImage(img3Btn)