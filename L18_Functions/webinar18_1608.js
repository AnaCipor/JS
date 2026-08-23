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