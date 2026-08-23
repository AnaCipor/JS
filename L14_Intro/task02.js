'use strict'
// без объектов
let userName = "Vasya";
let userAge = 30;
let isStudent = true;
console.log("Age= ", userAge);

// в виде объекта
let user = {
  name: "Ivan",
  age: 25,
  isStudent: true,
};

console.log(user);
console.log(user.name);

user.age = 26;
console.log(user);

user.email = "Ivancho@test.com";
console.log(user);

delete user.isStudent;
console.log(user);

const user1 = {
  name: "Petro",
  age: 32,
};
console.log(user1);
//user1=25 error
//user1=user
user1.age = 33;
user1.email = "testru@test.com";
console.log(user1);
console.log(typeof user1, typeof user1.name);
