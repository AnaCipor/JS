// HW of Alexey
// https://github.com/no13exit/fs66/blob/main/lesson17/hw.js
// https://github.com/no13exit/fs66/blob/main/lesson17/hw2.js

// hw17text
/*
1. Напишите программу,
которая проверяет проверяет и печатает вердикт ,
является ли целое положительное
число любой длины счастливым попозиционно!
ЕСЛИ  Сумма цифр на четных позициях равна
сумме цифр на нечетных позициях - число счастливое,
ИНАЧЕ нет.
1210 - 1+1 = 2+0 счастливое
135 - 1+5 != 3 не счастливое
*/

/*
let number = 1210

let sumEven = 0;
let sumOdd = 0;
let position = 1;

while (num > 0) {
    let digit = num % 10;
    position % 2 === 0 ? evenSum += digit : oddSum += digit;
    number = Math.floor(number / 10);
    position++;
}
console.log(evenSum === oddSum ? "Счастливое" : "Несчастливое");
*/

let sum1 = 0;
let sum2 = 0;
let pos = 1;
let num = 3234;
while (num != 0) {
  if (pos % 2 == 0) {
    sum1 += num % 10;
  } else {
    sum2 += num % 10;
  }
  num = (num - (num % 10)) / 10;
  pos++;
}
if (sum1 === sum2) {
  console.log('Happy Number');
} else {
  console.log('Unhappy Number');
}

console.log('2=============');

num = 3234;
sum1 = 0;
sum2 = 0;
while (num) {
  sum1 += num % 10;
  num = (num - (num % 10)) / 10;
  sum2 += num % 10;
  num = (num - (num % 10)) / 10;
}
if (sum1 === sum2) {
  console.log('Happy Number');
} else {
  console.log('Unhappy Number');
}



console.log('3=============');
num = 10234;
let sum = 0;
while (num) {
    sum = num%10 - sum;
    num=(num-num%10)/10;
}
if (sum===0) { // if (sum!=0)
  console.log('Happy Number');
} else {
  console.log('Unhappy Number');
}


/*  
2. Напишите программу,
которая проверяет и печатает вердикт ,
является ли целое положительное
число  длины 6 цифр счастливым зеркально!
ЕСЛИ  Сумма перваых 3 цифр равна
сумме цифр на последних 3 позициях - число счастливое,
ИНАЧЕ нет.
123420 -1+2+3 = 2+0 счастливое
 
712004- 7+1+2 != 0+0+4 не счастливое
*/

console.log('4=============');
num = 623452;
let summ = 0;
first = (num - num %1000)/1000;
last = num % 1000;
for (let i=1; i<=3; i++) {
    summ = summ + first%10 - last%10;
    last = (last - last %10)/10;
    first=(first-first%10)/10;
}
if (summ===0) { // if (sum!=0)
  console.log('Happy Number');
} else {
  console.log('Unhappy Number');
}



/* 


num = 622451;
second = (second-second%100)/100 + ((second-second%10)/10)%10 + second%10;
first = (first-first%100)/100 + (first-first%10)/10 + first%10;

// if (!!(second === first)) check out !!
if ((second === first)) {
    console.log('Счастливое число');
} else {
    console.log ('Несчастливое число')
}


1) (second - second % 100) / 100
для 451:
451 % 100 = 51
451 - 51 = 400
400 / 100 = 4

2) ((second - second % 10) / 10) % 10
для 451:
451 % 10 = 1
451 - 1 = 450
450 / 10 = 45
45 % 10 = 5
Получили среднюю цифру: 5.

3) И: second % 10
это:
451 % 10 = 1

first = (first-first%100)/100 + ((first-first%10)/10)%10 + first%10;
Если first = 622, получаем: 6 + 2 + 2 = 10
И: first = 10;
После этого: if (second === first)


*/
