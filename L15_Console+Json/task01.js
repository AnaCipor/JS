console.log("Hello World!");


//alt+shift+f - форматирование кода
//alt+shift+down - дублирование строки
//alt+shift+up - перемещение строки вверх
//ctrl+shift+f - поиск по проекту
//ctrl+shift+r - поиск и замена по проекту
//ctrl+shift+s -save all
//ctrl+shift+e - открыть проводник
//ctrl+shift+` - открыть терминал
//Ctrl+F5 - run without debugging

// ⌘ + P           Быстро открыть файл
// ⌘ + Shift + P   Command Palette
// ⌘ + B           Скрыть/показать боковую панель
// ⌘ + /           Закомментировать строку
// ⌥ + ↑ / ↓       Переместить строку
// ⌘ + D           Выделить следующее совпадение
// ⌘ + Shift + L   Выделить все совпадения
// ⌘ + Enter       Новая строка снизу
// ⌘ + Shift + Enter  Новая строка сверху
// ⌘ + J           Показать/скрыть панель терминала
// Дублировать строку вниз: ⇧ Shift + ⌥ Option + ↓
// Дублировать строку вверх: ⇧ Shift + ⌥ Option + ↑

let user = {
    name: 'John',
    age: 30,
    isAdmin: true,  
    email: 'john@example.com',
    'city': 'New York',
    'is a developer': true,

}
console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);
console.log(user.email);
console.log(user.city);
console.log(user);
console.log(user['name']);
let fieldName = 'age';
console.log(user[fieldName]);
user['second name'] = 'Smith';
console.log(user['second name']);

console.log("===================");
console.log(user);

let userJson = JSON.stringify(user);
console.log(userJson);
console.log(typeof userJson); //string
console.log(user.name);
console.log(userJson.name); // undefined

let productJson = '{"name":"iPhone","price":999,"isAvailable":true}';
let product = JSON.parse(productJson); //parse = расшифруй и создай объект
console.log(product); // {name: 'iPhone', price: 999, isAvailable: true}
console.log(typeof product); //object
console.log(product.name); //iPhone


// https://github.com/IlyaLifsh/L_14.git