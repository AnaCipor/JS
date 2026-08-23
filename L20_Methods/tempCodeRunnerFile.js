const numbers = [1, 5, 2, 9, 4];

const sum = numbers.reduce((accumulator, currentValue) =>
     accumulator + currentValue, 0);
console.log("Сумма всех элементов массива:", sum);