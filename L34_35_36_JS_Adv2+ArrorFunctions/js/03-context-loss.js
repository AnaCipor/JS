"use strict"

const user = {
  name: "John",
  age: 30,
  showName() {
    console.log(`User name: ${this.name}`);
  }
}

user.showName(); // User name: John
//
// const show = user.showName; // редкая операция!!!
// show(); // TypeError: Cannot read properties of undefined (reading 'name')
// в строгом режиме this = undefined


// === Потеря контекста при передаче в качестве аргумента (для callback) ===
const user1 = {
  name5:'John',
  age: 30,
  showName() {
    console.log(`User name: ${this.name5}`);
  }
}

setTimeout(user1.showName, 1000); // user name: Undefined

// setTimeout(user1.showName(), 1000); ERROR - пустая ф-ия возвращает пустую ссылку - неверный синтаксис

// Var 1 - solution: стрелочная ф-ия как обертка для вызова через объект обычной ф-ции

setTimeout(() => user.showName(), 1000);

// const boundShowName = () => {}


//Var 2 решение через bind
const boundShowName = user.showName.bind(user);
// bind (user) - создает новую функцию с привязанным контекстом

boundShowName(); // user name: John

setTimeout(user.showName.bind(user), 1000); // User Name: John

user.showName.bind(user)(); // user name: John
user.showName.bind(user);  // ничего не распечатается - будет пустая строка

// старое решение, мб на экзамене Var 3 call() метод

function introduce() {
  console.log(`My name is ${this.name}`);
}

const user3 = {
  name: "John",
}

introduce.call(user3);

console.log("*********************");
function introduce1  (city, country) {
  console.log(`My name is ${this.name}, 
  I live in ${city}, ${country}`);
}
introduce1.call(user3, 'Haifa', 'Israel');
console.log("========================");

introduce1.apply(user,  ["Holon", "Israel"]);
