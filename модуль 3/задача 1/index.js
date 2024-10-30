const isCard = true;
let money = 500;
let bankOperation = prompt("Введите сумму банковской операции");

if (isCard && bankOperation <= money) {
    console.log("Операция выполняется");
}
else {
    console.log("Операция отклонена");
}
