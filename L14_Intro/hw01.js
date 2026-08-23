'use strict'

// 1) Object
// let astronaut = {
//     name: 'Niel',
//     age: 33,
//     isCommander: true,
//     planet: 'Mars',
//     missionDuration: 10,
// }
// console.log(astronaut)


// 2) Переменные
let astronautName = 'John Neilson';
// console.log(astronautName);
let astronautAge = 33;
let isCommander = true;
let planet = 'Mars';
let missionDuration = 10; // in days
console.log ('Astronaut Age in 10 years =', astronautAge+10);
console.log ('Mission duration after changes = ', (missionDuration + 30));
console.log (astronautName + planet + isCommander);
missionDuration = 55;
console.log (missionDuration);
isCommander = false;


/*
# Задача: Система профилей астронавтов 🚀
## Mission 👨‍🚀
Создайте JavaScript-программу для хранения информации об астронавте.

---
## What You Need to Do 📘
### 1. Создать переменные
Создайте переменные:
- astronautName
- astronautAge
- isCommander
- planet
- missionDuration

### 2. Использовать разные типы данных

Использовать:
- string
- number
- boolean

### 3. Выполнить вычисления

Посчитать:
- возраст астронавта через 10 лет
- длительность миссии после увеличения на 30 дней
 
### 4. Выполнить конкатенацию строк

Создать сообщения:
- имя астронавта
- планета
- статус командира


### 5. Вывести результаты

Использовать console.log()

### 6. Изменить значения переменных , Вывести результаты

Изменить:
- длительность миссии
- статус командира
 */


// const astronautName = "Neil Armstrong";
// let astronautAge = 38;
// let isCommander = true;
// let planet = "Moon";
// let missionDuration = 8; // in days
// console.log('Astronaut Age in 10 years: ' + (astronautAge + 10));
// console.log('Mission Duration is extended by 30 days: ' + (missionDuration + 30));
// isCommander = false;
// console.log('UpdateMissionDuration: ', + missionDuration);
// console.log('Is the austronaut still the commander: ', + isCommander);
// const astronautDateofBirth = '1930-08-05'
// console.log('Astronaut Date of Birth: ', + astronautDateofBirth);

// # Задача: Система профилей астронавтов 🚀


// ## Mission 👨‍🚀

// Создайте JavaScript-программу для хранения информации об астронавте.

// ---

// ## What You Need to Do 📘

// ### 1. Создать переменные

// Создайте переменные:

// - astronautName 
let astronautName = 'John';

// - astronautAge
let astronautAge = 34;

// - isCommander
let isCommander = true;

// - planet
let planet = 'Mars';

// - missionDuration
let missionDuration = 360;

console.log(astronautName);
console.log(astronautAge);
console.log(isCommander);
console.log(planet);
console.log(missionDuration);

// ### 2. Использовать разные типы данных

// Использовать:
// - string
// - number
// - boolean

// ### 3. Выполнить вычисления

// Посчитать:
// - возраст астронавта через 10 лет
let ageInTenYears = astronautAge + 10;
console.log(ageInTenYears);

// - длительность миссии после увеличения на 30 дней
let updatedMissionDuration = missionDuration + 30;
console.log(updatedMissionDuration);

// ### 4. Выполнить конкатенацию строк

// Создать сообщения:
// - имя астронавта
console.log('Astronaut name is', astronautName);

// - планета
console.log('Mission planet is', planet);

// - статус командира
console.log('Is the astronaut commander?', isCommander);

// ### 5. Вывести результаты

// Использовать console.log()

// ### 6. Изменить значения переменных

// Изменить:
// - длительность миссии
missionDuration = 430;
console.log(missionDuration);

// - статус командира
isCommander = false;
console.log(isCommander);

// ### 7. Проверить программу через debugger

// Поставить breakpoint и проверить значения переменных.


// git config --global user.email "you@example.com"
// git config --global user.name "Your Name"