// DOM то с чем работает JS и он не является стандартом HTML - это структура данных программирования
// то есть он представляет собой структуру данных и не только конструкцию HTML
// JS просто вызывает это документ и получает ответ


// document.createElement - это то, что нам дает DOM для создания элемента (ducoment.)

// document.getElementById(), document.querySelector(), document.querySelectorAll() - это методы DOM API

// const app = document.getElementById ('app');
// const app1 = document.querySelector('#app');
// console.log (app === app1); // true!!
// const li = document.createElement ('li');
// li.textContent = 'Milk';
// app.append(li);

// const title = document.createElement ('h1');
// title.textContent = 'List'
// app.append(title);

// // prepend - добавляет элемент в начало списка
// li.textContent = 'Milk';
// app.prepend(li);

// // appendChild - добавляет узел в конец списка
// li.textContent = 'Bread';
// app.appendChild(li);
 
//appendChild() и append() делают почти одно и то же: добавляют что-то внутрь DOM-элемента. Но append() новее и удобнее.

//appendChild() принимает только один DOM-узел
// append() может принять несколько элементов сразу
// append() может принимать обычный текст
// appendChild() возвращает добавленный элемент
// append() возвращает undefined

function createUI(app) {
    const form = document.createElement('form');
    const input = document.createElement('input');
    console.dir(input);
    input.type = 'text';
    input.placeholder = 'Enter product name';
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Add';
    form.append(input, button);
    const list = document.createElement('ul');
    app.append(form, list);
    return {form, input, list};
}

// const ui = createUI(app); //  {form, inout, list}  возвращает объект с тремя свойствами
// const obj = {a,b,c};
// obj.a = 10;
// obj.b = 20;
// obj.c = 30;

// const {a,b,c} = obj;


function createUI(app) {}
const {form, input, list} = createUI(app);
console.dir(input);
// createUI(app);


// addEventListener - добавляет обработчик события на элемент - наблюдатель событий
form.addEventListener("submit", (e)) {
    e.preventDefault();
    const productName = input.value.trim();
    if (!productName) {
        return;
    }
    // console.log('Form sent'); // важно убирать дефалтное поведение с помощью preventDefault()
    console.log(productName); 
}
