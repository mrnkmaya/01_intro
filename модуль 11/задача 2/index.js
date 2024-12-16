document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    const name = document.querySelector('.name');
    const weight = document.querySelector('.weight');
    const distance = document.querySelector('.distance');
    const results = document.querySelector('.list tbody');
    const error = document.querySelector('.error');

    function validate(weight, distance){
        let isValid = true
        if (weight <= 0 || distance <= 0) {
            error.textContent = 'Пожалуйста, введите верные значения для веса и расстояния'
            isValid = false
        }
        return isValid
    }

    function calculate(weight, distance){
        return (weight*distance)/10
    }

    function addToList(name, weight, distance, cost){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${weight} кг</td>
            <td>${distance} км</td>
            <td>${cost.toFixed(2)} ₽</td>`
        results.appendChild(row)
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        if (validate(parseFloat(weight.value), parseFloat(distance.value))) {
            const cost = calculate(parseFloat(weight.value), parseFloat(distance.value))
            addToList(name.value.trim(), parseFloat(weight.value), parseFloat(distance.value), cost)
        }

        form.reset()
    });


})