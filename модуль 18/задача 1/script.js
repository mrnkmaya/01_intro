// Функция для создания промиса с задержкой и массивом URL
function fetchCatImages() {
    return new Promise((resolve) => {
        const delay = Math.random() * (5000 - 2000) + 2000; // Случайное время от 2 до 5 секунд
        setTimeout(() => {
            resolve([
                "https://kudamoscow.ru/uploads/7bd982ae3b89667b315ba60d12050d97.jpg",
                "https://img.goodfon.ru/original/1680x1050/f/9e/koshka-sidit-stol-golubye-glaza-vzgliad-mordochka-usy-ushi.jpg",
                "https://cdn.lifehacker.ru/wp-content/uploads/2015/09/11_1442481044-800x534.jpg",
            ]);
        }, delay);
    });
}

function fetchDogImages() {
    return new Promise((resolve) => {
        const delay = Math.random() * (5000 - 2000) + 2000; // Случайное время от 2 до 5 секунд
        setTimeout(() => {
            resolve([
                "https://placedog.net/200/300",
                "https://placedog.net/300/300",
                "https://placedog.net/400/300",
            ]);
        }, delay);
    });
}

// Функция для отображения изображений на странице
function renderImages(imageUrls) {
    const container = document.createElement("div");
    container.classList.add("image-container");

    imageUrls.forEach((url) => {
        const img = document.createElement("img");
        img.src = url;
        img.style.margin = "10px";
        img.style.height = "150px";
        container.appendChild(img);
    });

    document.body.appendChild(container);
}

// Обработка промисов и отображение изображений
window.addEventListener("DOMContentLoaded", () => {
    const catPromise = fetchCatImages();
    const dogPromise = fetchDogImages();

    catPromise.then((catUrls) => renderImages(catUrls));
    dogPromise.then((dogUrls) => renderImages(dogUrls));
});
