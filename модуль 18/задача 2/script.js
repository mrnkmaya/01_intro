function progress(timeInSeconds) {
    // Устанавливаем минимальное время на 2 секунды
    const time = Math.max(timeInSeconds, 2);

    // Элементы для прогресс-бара и таймера
    const progressBar = document.getElementById("progress-bar");
    const timerElement = document.getElementById("timer");

    // Устанавливаем продолжительность анимации
    progressBar.style.transitionDuration = `${time}s`;

    // Запускаем анимацию

    // Таймер обратного отсчёта
    let elapsedSeconds = 0;
    let count = -1
    const timerInterval = setInterval(() => {
        elapsedSeconds += 1;
        count += 1
        
        timerElement.textContent = `Прошло секунд: ${elapsedSeconds}`;
        progressBar.style.transform = `scaleX(${count})`

        // Останавливаем таймер, когда время истечёт
        if (elapsedSeconds >= time) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Запуск прогресс-бара с анимацией на 5 секунд
progress(5);
