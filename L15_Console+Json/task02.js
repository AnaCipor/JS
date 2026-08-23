let number1 = 5;
let number2 = 5;

let result = number1 === number2; 
console.log(result); // true

result = number1 == number2;
console.log(result); // true

console.log("5" == 5); // true
console.log("5" === 5); // false

console.log("5" != 5); // false
console.log("5" !== 5); // true
// === и !== объявление строгого действия

// < > <= =>
    console.log("1" < 2); // true
console.log("11" <= 2); // false "11" ? "2" ()

console.log([] == ![]) // true всегда проверяй типы в JS (методы приведения типов)
console.log([] === ![]) // false 
