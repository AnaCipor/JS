let sum1=0;
let sum2=0;
let pos=1;
let num=3234;
while(num!=0) {
    if (pos%2==0){
        sum1+=num%10
    } else {sum2+=num%10}
    num =(num-num%10)/10
    pos++;
}
if (sum1 === sum2) {
    console.log('Счастливое число');
} else {
    console.log ('Несчастливое число')
}
console.log ("4===============")
num=1234;
sum1=0;
sum2=0;
while(num) {
    sum1+=num%10
    num=(num-num%10)/10;
    sum2+= num%10;
    num = (num -(num%10)) / 10;
}
if (sum1 === sum2) {
    console.log('Счастливое число');
} else {
    console.log ('Несчастливое число')
}

console.log ("5===============")

num=3234;
let sum =0;

while (num) {
    sum=num%10-sum;
    num=(num-num%10)/10;
}

if (sum===0) {
    console.log('Счастливое число');
} else {
    console.log ('Несчастливое число')
}

console.log ("6===============")

num=623452;
sum =0;
let first=(num-num%1000)/1000;
let second=num%1000;
for (let i=1; i<=3; i++);
    sum=sum+first%10-second%10;
    second=(num-num%10)/10;
    second=(second-second%10)/10;
    first=(first-first%10)/10;

if (sum===0) {
    console.log('Счастливое число');
} else {
    console.log ('Несчастливое число')
}

console.log ("7===============")
num = 622451;
second = (second-second%100)/100 + ((second-second%10)/10)%10 + second%10;
first = (first-first%100)/100 + (first-first%10)/10 + first%10;

// if (!!(second === first)) check out !!
if ((second === first)) {
    console.log('Счастливое число');
} else {
    console.log ('Несчастливое число')
}


/*

// hw17text
/*
1. Напишите программу,
которая проверяет проверяет и печаттает вердикт ,
является ли целое положительное
число любой длины счастливым попозиционно!
ЕСЛИ  Сумма цифр на четных позициях равна
сумме цифр на нечетных позициях - число счастливое,
ИНАЧЕ нет.
1210 - 1+1 = 2+0 счастливое
135 - 1+5 != 3 не счастливое
 
2. Напишите программу,
которая проверяет и печаттает вердикт ,
является ли целое положительное
число  длины 6 цифр счастливым зеркално!
ЕСЛИ  Сумма перваых 3 цифр равна
сумме цифр на последних 3 позициях - число счастливое,
ИНАЧЕ нет.
123420 -1+2+3 = 2+0 счастливое
 
712004- 7+1+2 != 0+0+4 не счастливое
*/
