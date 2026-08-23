/*
HW_18_TEXT
 
1.Напишите четыре функции для основных математических действий + - * /
2.Напишите функцию калькулятор, принимающую при вызове два числа
и функцию операции над этими числами и возвращающую результат вычислений
3.Попробуйте написать все эти функции через function-declaration.
4.Попробуйте написать все эти функции через  function-expression.
5.***
Попробуйте написать все эти функции через стрелочный синтаксис
    который имеет свою специфику и подходит не всегда.
 */
 

function sum (a,b) {
    return (a+b);
}

function subtract (a,b) {
    return (a-b);
}

function multiply (a,b) {
    return (a*b);
}

function divide (a,b) {
    if (b===0) {
        return "Division by zero";
    }
    return (a/b);
}

function calculate (a,b,  operation) {  
    if (typeof operation !== "function" || operation !== undefined) {
        return "Operation must be a function";
    }
    return operation (a,b);
}
console.log (calculate (1,2,divide));
console.log (calculate (1,2,add));


// L18_Functions/webinar18_1608.js
/*
console.log(sum(1,2,3,4,5,6));

const surName = 'Jackson';
console.log(person);

function greet (someone) {
    someone['surName'] = 'Smith'
    // console.log(name);
    // return; result undefined <- we don't write same as in Python
}
greet(person, surName);
console.log(person);

let a
console.log (a)
console.log(greet("Anonymus"))

// let async (console.log(a)) => {}
*/


// Calculator
const calc =    {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => {
        if (b===0) {
            return "Division by zero";
        }
        return a / b;
    }
}

console.log(operations["+"](2, 4)); // 6
console.log(operations["-"](2, 4)); // -2
console.log(operations["*"](2, 4)); // 8
console.log(operations["/"](2, 4)); // 0.5
console.log(operations["/"](2, 0)); // Division by zero

/*
function math (firstNumber)
{

}
const calc = math(10)
calc.plus(5) => 15

*/



//1111111111111111111111111111111111111111111111111

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   if (b === 0) {
//     return "Ошибка: деление на 0";
//   }
//   return a / b;
// }

// console.log(multiply(2, 3))

//2222222222222222222222222222222222222222222222222222

// const add = function(a, b) {
//   return a + b;
// };

// const subtract = function(a, b) {
//   return a - b;
// };

// const multiply = function(a, b) {
//   return a * b;
// };

// const divide = function(a, b) {
//   return b === 0 ? "Ошибка: деление на 0" : a / b;
// };

// console.log(multiply(3, 3))

//333333333333333333333333333333333333333333333333333333333

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "Ошибка: деление на 0" : a / b);

 //############################################

 
const calculate = (a, b, func) => {
    return func(a,b); 
};

// const multiply1=123;
console.log(calculate(3, 5,multiply));



// console.log(multiply(3, 3))
// const calculate = (a, b, operator) => {
//   switch (operator) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return b === 0 ? "Ошибка: деление на 0" : a / b;
//     default:
//       return "Неизвестная операция";
//   }
// };

// console.log(calculate(3, 5, "*"))



// https://github.com/IlyaLifsh/L_14