//HW16TEXT
// 1. В файле 1 создайте массив с числами от 1 до 10. Выведите его в консоль.
// для пунктов 2-5 используйте методы массива push, shift, pop , unshiftи length соответственно.
// 2. Добавьте в конец массива число 11 , а в начало 0 и выведите массив в консоль.
// 3. Удалите первый и последний элемент массива и выведите массив в консоль.
// 4. Замените третий элемент массива на число 99 и выведите массив в консоль.
// 5. Выведите длину массива в консоль.
// 6. В файле 2 повторите пункты 1-5, но используйте методы массива splice и length соответственно.

// FILE 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
numbers.push(11);
numbers.unshift(0);
console.log(numbers);
numbers.shift(); // всегда удаляет 1й элемент, не надо помечать
numbers.pop(); //всегда удаляет последний элемент, не надо помечать
console.log(numbers);
numbers[2] = 99; // по условию делай перезаписывание 3го элемента (с индексом 2) на 99
console.log(numbers);
numbers.splice(2, 1, 99);
console.log(numbers.length);

console.log('******************');
// FILE 2
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);
nums.splice(10, 0, 11);
nums.splice(0, 0, 0);
console.log(nums);
nums.splice(0, 1);
nums.splice(10, 1);
console.log(nums);
nums.splice(2, 1, 99);
// nums.splice(nums.length, 0, 11); nums.length  означает «вставить в конец массива»

console.log(nums);
console.log(nums.length);


/*
const ar3 = ['banana', 'apple', 'orange'];
console.log(ar3.at(0)); // banana

ar3[0]      // первый элемент
ar3.at(0)   // первый элемент

ar3.at(-1)  // последний элемент
ar3.at(-2)  // предпоследний
То есть отрицательные числа читаются с конца:
['banana', 'apple', 'orange']
    -3        -2        -1

*/

