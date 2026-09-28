// DOM то с чем работает JS и он не является стандартом HTML - это структура данных программирования
// то есть он представляет собой структуру данных и не только конструкцию HTML
// JS просто вызывает это документ и получает ответ


// document.createElement - это то, что нам дает DOM для создания элемента (ducoment.)

// document.getElementById(), document.querySelector(), document.querySelectorAll() - это методы DOM API

const app = document.getElementById ('app');
const app1 = DocumentState.querySelector ('#app');
console.log (app === app1); // true!!
const li = document.createElement ('li');
li.textContent = 'Milk';
app.append(li);


 