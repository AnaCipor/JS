const products = [
 {name: "Молоко", count: 2.0, price: 1.5, expDate: "2024-07-01"},
 {name: "Хлеб", count: 0.5, price: 0.8, expDate: "2024-06-15"},
 {name: "Яйца", count: 12, price: 2.5, expDate: "2024-07-10"},
];

console.log("==Содержимое холодильника==");
console.log(products);

const p2 = {name: "Сыр", count: 2.0, price: 1.5, expDate: "2024-07-01"};
console.log(products);

console.log("==Добавление продукта в холодильник==");

console.log("==Содержимое холодильника в виде JSON==");
const res = JSON.stringify (products, null, 2); // - сохраняет в строку JSON данные из массива products, 
// null - без замены значений, 2 - с отступами в 2 пробела - и это строка   
console.log(res);

console.log("==Содержимое холодильника в виде объекта JavaScript==");
const res2 = JSON.parse(res); // - преобразует строку JSON обратно в объект JavaScript
console.log(res2);
