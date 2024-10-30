let power = Number(prompt("Введите мощность автомобиля"));
let taxRate;

switch (true) {
    case power <= 100:
        taxRate = 12;
        break;
    case power > 100 && power <= 125:
        taxRate = 25;
        break;
    case 125 < power <= 150:
        taxRate = 35;
        break;
    case 150 < power <= 175:
        taxRate = 45;
        break;
    case 175 < power <= 200:
        taxRate = 50;
        break;
    case 200 < power <= 225:
        taxRate = 65;
        break;
    case 225 < power <= 250:
        taxRate = 75;
        break;
    case taxRate >= 250:
        taxRate = 150;
        break;
    default:
        taxRate = 0;
}
let transportTax = power * taxRate

console.log("Сумма налога:", transportTax);
