// 1. Scope = где переменная видна.

// 2. Внутренняя функция видит переменные снаружи.

// 3. Внешний код не видит локальные переменные внутренней функции.

// 4. Closure = функция может помнить переменные из своей внешней области
//    даже после того, как внешняя функция закончилась.

/*
function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3


outer закончилась
↓
inner ушла наружу
↓
inner всё ещё помнит переменные outer
↓
ЭТО closure / замыкание

Замыкание = внутренняя функция сохранила доступ к переменным внешней функции после завершения внешней функции.
*/


/*
function createCartCounter() {
    let count = 0;

    function addItem() {
        count++;
        console.log(`Товаров в корзине: ${count}`);
    }

    return addItem;
}

const addToCart = createCartCounter();

addToCart(); // Товаров в корзине: 1
addToCart(); // Товаров в корзине: 2
addToCart(); // Товаров в корзине: 3


То есть практический смысл замыкания тут такой:
сохранить внутреннее состояние между вызовами функции.

И при этом count снаружи напрямую недоступен:
console.log(count); // ReferenceError
Это тоже полезно: счётчик как бы спрятан внутри и менять его можно только через функцию addToCart().
*/



const number = [7,3,9,22,11,3,7,15];
console.log ('=========== Sort =============');
console.log(number.sort((a,b) => a-b));
number.sort((a,b) => Math.random() - 0.5);

console.log ('=========== Random =============');
number.sort((a,b) => Math.random() - 0.5);
// number.sort(() => Math.random() - 1.0); // перевернет наоборот при - 1.0
console.log(number);


console.log ('=========== MyFindIndex =============');

function myFindIndex(array, callback) {
    for (let i=0; i < array.length; i++) {
        if (callback(array[i])) {
            return i;
        }
    }
    return -1;
}
let res = myFindIndex(number, (item) => item === 22);
console.log(res);


console.log ('=========== CheckEven =============');
console.log(number);
function checkEven(item) {
    return item % 2 ===0;
}
let res2 = myFindIndex(number, checkEven);
console.log(res2)

console.log ('=========== ObjectSort =============');
const persons = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 25 }
];
persons.sort((a, b) => {
    if (a.age === b.age) {
        return a.name.localeCompare(b.name);
    }
    return a.age - b.age;
});
console.log(persons);