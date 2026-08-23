"use strict";

const user = {
  id: 7,
  name: "John",
  age: 25,
  "is Admin": true,
};
console.log(user);
console.log(user.age);
// console.log(user."is Admin"); ERROR

console.log(user["age"]);
console.log(user["is Admin"]);
let myField = "is Admin";
console.log(user[myField]);
console.log("=================");
for (let key in user) {
  // console.log(user.key); //ERROR no such field on 'user'
  console.log(key, user[key]);
  console.log(`${key} -->> ${user[key]}`);
}
const fruits = ["apple", "kiwi", "banana"];
for (let fruit of fruits) {
  console.log(fruit);
}

for (let fruit in fruits) {
  console.log(fruit);
}

/*
for...of → значение: 
apple
kiwi
banana


for...in → ключ / индекс
0
1
2
*/


// for (fruit of fruits) { // wrong var
//     console.log(fruit, fruits [fruit]);
// }

// const user = {
//   id: 7,
//   name: "John",
//   age: 25,
//   "is Admin": true,
// };
// console.log(user);
// console.log(user.age);
// // console.log(user.'is Admin'); ERROR
// console.log(user.isAdmin);
// console.log(user["age"]);
// console.log(user["is Admin"]);
// let myField = "is Admin";
// console.log(user[myField]);

// console.log ("1====================")

// for(let key in user) {
//     console.log(user[key]);
//     console.log('${key} -->> $user[key]');
// }
