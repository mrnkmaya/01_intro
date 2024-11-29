/// task 1
function getAverage (a, b, c){
    return (a+b+c)/3
}

console.log(getAverage(1, 2, 3));
console.log(getAverage(2, 3, 4));
console.log(getAverage(3, 4, 5));

/// task 2

function getCelsius(c){
    return c*1.8 + 32
}

function getFahrenheit(f){
    return (f-32)/1.8
}

console.log(getCelsius(25)); 
console.log(getFahrenheit(77));

/// task 3

let celsius = c =>  c*1.8 + 32
let fahrenheit = f => (f-32)/1.8

console.log(celsius(25));
console.log(fahrenheit(77));

/// task 4
a = 3
function count(){
    return a += 1
}

console.log(count());
console.log(count());

/// task 5

function totalSum(price, amount, discount){
    return price*amount - price*amount*(discount/100)
}

console.log(totalSum(25000, 3, 20));
