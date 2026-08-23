const price = [30.0, 20.0, 50.0, 10.0, 40.0];

const highPrices = price.filter((p) => p > 30);
console.log("Массив после фильтрации:", highPrices);

/*
function (...) {
    return условие;
}
Если результат условия true или false, это предикат.
const numbers = [1, 5, 10, 20, 30];
const result = numbers.filter((n) => n > 10);
(n) => n > 10 <- Predicate


some():
const hasBig = numbers.some((n) => n > 25);
Предикат:
(n) => n > 25
Смысл:
есть хотя бы одно число, которое проходит проверку?


every():
const allPositive = numbers.every((n) => n > 0);
Предикат:
(n) => n > 0
Смысл:
все элементы проходят проверку?


find():
const found = numbers.find((n) => n > 10);
Предикат тот же:
(n) => n > 10
Но find() вернёт первый подходящий элемент


findIndex():
const index = numbers.findIndex((n) => n > 10);
Предикат:
(n) => n > 10
Но возвращается уже индекс первого подходящего элемента.


const isGoodCandidate = (user) =>
    user.age >= 18 &&
    user.age <= 40 &&
    user.active === true &&
    user.name.length >= 3;
Это всё ещё обычный предикат.
Несмотря на то, что внутри четыре проверки, результат всё равно:
true


const canEnter = (user) =>
    user.age >= 18 || user.isAdmin === true;

С отрицанием:
const isNotEmpty = (str) => str.length !== 0;
или:
const isNotAdmin = (user) => !user.isAdmin;



чаще словом predicate называют именно функцию-проверку, например:
(n) => n > 10
А i < 10 внутри for обычно просто называют условием цикла, хотя логика та же: проверить и получить true/false.
Так что для твоей головы можно держать:
предикат / условие → вопрос
                 → true или false
*/