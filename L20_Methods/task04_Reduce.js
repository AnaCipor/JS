
// у callback-функции reduce() есть фиксированный порядок аргументов:
// (accumulator, currentValue) 
// То есть первый аргумент всегда: acc = накопленное значение
// а второй: n = текущий элемент массива.

// numbers.reduce((sum, current) => sum + current, 0);
// REDUCE: reduce() = пройти по массиву и собрать всё в один результат
//  numbers.reduce((banana, x) => banana + x, 0);

// первый параметр всё равно будет аккумулятором, второй текущим элементом.
// (acc, n) => acc + n
// возьми то, что уже накопилось, и прибавь текущий элемент.

// Formula: 
// array.reduce(
//     (acc, current) => что_делаем,
//     начальное_значение
// );


// !!! если внутри аргументов есть вызов функции something(),
// сначала надо получить результат этого вызова, чтобы внешняя функция знала, что ей передали.
// 
const numbers = [1, 5, 2, 9, 4];

const sum = numbers.reduce((accumulator, currentValue) => // reduce() это метод массива, который сворачивает весь массив в одно итоговое значение.
     accumulator + currentValue, 0);
console.log("Сумма всех элементов массива:", sum);

const mult=numbers.reduce((acc , n) =>
     acc  * n, 1);
console.log("Произведение всех элементов массива:", mult);

const mult1=numbers.reduce((acc , n) =>
     acc  * n); //  reduce() берёт первый элемент массива как стартовое значение acc. 
     // - то есть если значения условия [3,5,8] - то первым берется 3
console.log("Произведение всех элементов массива:", mult1);

const concat=numbers.reduce((acc , n) =>
     acc  + n, "");
console.log("Конкатенация всех элементов массива:", concat);   

const avgResult=numbers.reduce((acc,n) => acc + n, 0)/numbers.length;
console.log("Среднее арифметическое всех элементов массива:", 
    avgResult);


    /**
          array.reduce((acc, current) => {
          return новоеЗначениеAcc;
          }, начальноеЗначение);

То есть:
acc      → что уже накопили
current  → что сейчас взяли из массива
     
     */