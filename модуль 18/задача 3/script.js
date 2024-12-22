
const mockFunction1 = () => {
    const time = Math.floor(Math.random() * 3) + 2;
    const urls = [
        'https://cdn.lifehacker.ru/wp-content/uploads/2015/09/11_1442481044-800x534.jpg',
        'https://img.goodfon.ru/original/1680x1050/f/9e/koshka-sidit-stol-golubye-glaza-vzgliad-mordochka-usy-ushi.jpg',
        'https://kudamoscow.ru/uploads/7bd982ae3b89667b315ba60d12050d97.jpg'
    ];
    return new Promise((resolve) => {
        setTimeout(() => resolve(urls), time * 1000);
    });
};

const mockFunction2 = () => {
    const time = Math.floor(Math.random() * 3) + 2; 
    const urls = [
        'https://placedog.net/200/300',
        'https://placedog.net/250/350',
        'https://placedog.net/300/400'
    ];
    return new Promise((resolve) => {
        setTimeout(() => resolve(urls), time * 1000);
    });
};

const progress = (time, container) => {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';

    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';

    const timer = document.createElement('div');
    timer.className = 'timer';
    timer.textContent = 'Прошло секунд: 0';

    progressContainer.appendChild(progressBar);
    container.appendChild(progressContainer);
    container.appendChild(timer);

    progressBar.style.transitionDuration = `${time}s`;
    
    let elapsedSeconds = 0;
    let count = 0
    const timerInterval = setInterval(() => {
        timer.textContent = `Прошло секунд: ${elapsedSeconds}`;
        elapsedSeconds += 1;
        progressBar.style.transform = `scaleX(${count})`;
        count += 1
        if (elapsedSeconds >= time) clearInterval(timerInterval);
    }, 1000);

    return new Promise((resolve) => setTimeout(resolve, time * 1000));
};

const runMockFunctionsWithProgress = async () => {
    const app = document.getElementById('app');

    const firstContainer = document.createElement('div');
    firstContainer.className = 'result';
    app.appendChild(firstContainer);

    const firstMockTime = Math.floor(Math.random() * 3) + 2;
    await progress(firstMockTime, firstContainer);

    const firstResult = await mockFunction1();
    const firstImages = document.createElement('div');
    firstImages.className = 'image-row';
    firstImages.innerHTML = firstResult
        .map((url) => `<img src="${url}" alt="Image" style="margin: 5px; max-width: 100px;">`)
        .join('');
    firstContainer.appendChild(firstImages);

    const secondContainer = document.createElement('div');
    secondContainer.className = 'result';
    app.appendChild(secondContainer);

    const secondMockTime = Math.floor(Math.random() * 3) + 2;
    await progress(secondMockTime, secondContainer);

    const secondResult = await mockFunction2();
    const secondImages = document.createElement('div');
    secondImages.className = 'image-row';
    secondImages.innerHTML = secondResult
        .map((url) => `<img src="${url}" alt="Image" style="margin: 5px; max-width: 100px;">`)
        .join('');
    secondContainer.appendChild(secondImages);
};

runMockFunctionsWithProgress();
