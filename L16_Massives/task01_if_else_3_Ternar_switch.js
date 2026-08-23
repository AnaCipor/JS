// ⌘ + P           Быстро открыть файл
// ⌘ + Shift + P   Command Palette
// ⌘ + B           Скрыть/показать боковую панель
// ⌘ + /           Закомментировать строку
// ⌥ + ↑ / ↓       Переместить строку
// ⌘ + D           Выделить следующее совпадение
// ⌘ + Shift + L   Выделить все совпадения
// ⌘ + Enter       Новая строка снизу
// ⌘ + Shift + Enter  Новая строка сверху
// ⌘ + J           Показать/скрыть панель терминала
// Дублировать строку вниз: ⇧ Shift + ⌥ Option + ↓
// Дублировать строку вверх: ⇧ Shift + ⌥ Option + ↑

let temperature = -18;
// Python: and or not
// JS:      && || !
if (temperature < 0) {
  console.log("Очень холодно");
} else if (temperature >= 0 && temperature < 20) {
  console.log("Холодно");
} else if (temperature >= 20 && temperature < 30) {
  console.log("Тепло");
} else {
  console.log("Жарко");
}

if (temperature < 0) {
  console.log("Очень холодно");
} else if (temperature < 20) {
  console.log("Холодно");
} else if (temperature < 30) {
  console.log("Тепло");
} else {
  console.log("Жарко");
}


// Тернарный оператор:
// условие верное?
//     да → взять значение после ?
    // нет → взять значение после :


    
let number = 5;
console.log(number % 2 === 0 ? "Четное" : "Нечетное");

let age = 17;
let isAdult = age >= 18 
console.log(isAdult ? "Совершеннолетний" : "Несовершеннолетний");


// let age = 20;
// let isAdult = age >= 18 ? true : false;
// console.log(isAdult); // not good
//console.log(age >= 18); good

number = 5;
switch (number) {
    case 1: 
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
    default:
    console.log("Unknown day");
}

number = 7;
switch (number) {
    case 1: 
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
    break;
    default:
    console.log("Unknown day");
}


let myName = null;
let result = myName ?? "Unknown"; // null or undefined => ?? неизвестный / аноним 
console.log(result); // Unknown
// value ?? replacement
//«Используй value, но если там null или undefined, используй replacement».
// ?? = «Значение отсутствует (only null or undefined)? Дай запасное».

let price = 25.5; // let price; тогда будет price not available
console.log(price ?? 'Price not available'); // 25.5
// для замены значения/данных на null or undefined - оператор ?? (nullish coalescing operator)




/*
+   // сложить
-   // вычесть
=== // строго сравнить
&&  // логическое «и»
||  // логическое «или» "логический оператор ИЛИ"
??  // если слева null или undefined — взять справа - "оператор нулевого слияния."
*/