"use strict"

const button = document.quierySelector("#demoButton");
// при вызове через addEventListener -> this будет элементом, на котором зарегистрирован обработчик

// button.addEventListener("click", function (event) {
//   console.log(this);
//   console.log(this.textContent);
// });
//
// button.addEventListener("click",  () => {
//     console.log(this); // window
// }) //  неверное использование стрелочной ф-ции - this пробует использовать внешний источник

button.addEventListener("click", (event) => {
  console.log(event.currentTarget);
  // элемент на котором зарегистрирован обработчик
});


// Разница между Target and currentTarget
button.addEventListener("click", (event) => {
  console.log(event.target);
});

// arguments and arrows
function showArguments() {
  console.log(arguments);
};

showArguments(10,20,30,40,50);

const showArgumentsArrow = () => {
  console,log(arguments); //Error
};

showArgumentsArrow(10,20,30,40,50); // [10,20,30,40,50]


// Arrows and NEW

function User(name){
  this.name = name;
};
const user = new User('John');
console.log(user.name);

const UserArrow = (name) => {
  this.name = name;
};
const userArrow = new UserArrow("Vasek"); // ERROR: userArrow is not a constructor

/*
                      ОБЫЧНАЯ ФУНКЦИЯ                         СТРЕЛОЧНАЯ ФУНКЦИЯ
синтаксис               function(0){}                             () => {}
собственный this       да(определяется способом вызова)             нет(используется внешний)
NEW                             да                                  нет
agruments                       да                                  нет
call/apply/bind (меняют this)   да                                  нет
this                            window                              window
target                          window                              window
краткий return                  нет                                 да
удобство для CallBack           да                                  да, особенно при необходимости внешнего this
currentTarget                   window                              window

*/

// Обычная ф-ия - когда нам нужен метод объекта,
// когда нужен конструктор, когда нам нужен this от DOM-элемента в обработчике

// Стрелочная ф-ция - когда нам нужен this от внешнего контекста,
// для коротких преобразований, для преобразований массивов-фильтров-map-forEach etc,
// для обработчиков, которым не нужен собственный this

