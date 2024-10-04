let i = 0
let currentYear = 2024

let personName1 = prompt('Введите имя')
let year1 = prompt("Введите год рождения")
let age1 = currentYear - year1
i++
console.log(i, personName1, age1);

let personName2 = prompt('Введите имя')
let year2 = prompt("Введите год рождения")
let age2 = currentYear - year2
i++
console.log(i, personName2, age2);

let personName3 = prompt('Введите имя')
let year3 = prompt("Введите год рождения")
let age3 = currentYear - year3
i++
console.log(i, personName3, age3);
console.log('Средний возраст пользователей:', Math.round((age1+age2+age3)/3));
