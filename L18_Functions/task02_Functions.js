// node L18_Functions/task03.js

function sayHello() {
  console.log('Hello');
}
sayHello();
sayHello();
sayHello();

console.log("1=====================");

greet("Ivan");
greet("Alex");
function greet(name) {
  console.log(`Hello, ${name}!`);
}

console.log("2=====================");
const result = getSum(3, 5);
console.log(result);
console.log(getSum(22, 33));
console.log(getSum());
console.log(getSum); // not to use YET

function getSum(number1, number2) {
  return number1 + number2;
}

console.log("3=====================");
const numbers = [1, 2, 3, 4, 5];
const cities = ["London", "Paris", "Madrid"];

function getLastElement(array) {
  return array[array.length - 1];
}
console.log(getLastElement(numbers));

console.log("4=====================");

console.log(generateArray(5));
function generateArray(size) {
  const result = [];
  for (let i = 1; i <= size; i++) {
    result.push(i);
  }
  return result;
}

console.log("5=====================");

function greeting1(name = "Anonymous") {
  return `Hello ${name}!!!!!!!!`;
}
// console.log(greeting1('Vasya'));
console.log(greeting1());

console.log("6=====================");

const greet1 = function greet1Func(name = "Anonymous") {
  return `Hello ${name}`;
};
console.log(greet1("Peter"), typeof greet1);
const greet2 = function (name = "Unknown") {
  return `HELLO ${name}`;
};
console.log(greet2("Nicola"));

console.log("7=====================");
const greet3 = (name = "Vasya") => {
  //стрелочная функция
  let abc = "DFG";
  return `Hello ${name} ${abc}`;
};
console.log(greet3("Olya"));

const greet4 = (name) => `Hello ${name}!!!`; //укороченный вариант записи строк 67-70
console.log(greet4("John"));

const greet5 = () => console.log("Hello World!");
greet5();
console.log(typeof greet5, greet5);



/*
HW_18_TEXT

1.Напишите четыре функции для основных математических действий + - * /
2.Напишите функцию калькулятор, принимающую при вызове два числа 
и функцию операции над этими числами и возвращающую результат вычислений
3.Попробуйте написать все эти функции через function-declaration.
4.Попробуйте написать все эти функции через  function-expression.
5.*** 
Попробуйте написать все эти функции черед стрелочный синтаксис
    который имеет свою специфику и подходит не всегда.
 */
