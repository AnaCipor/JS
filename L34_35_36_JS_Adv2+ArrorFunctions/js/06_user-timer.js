"use strict";

/*
--------------------------------------------------------
0.НАЧАЛЬНОЕ СООБЩЕНИЕ
--------------------------------------------------------
*/

console.log("Context Demo application started");

// 1. Дотягиваемся до всех элементов на странице

const nameInput = document.querySelector("#userName");

const result = document.querySelector("#result");

const showNowButton = document.querySelector("#showNow");

const showBrokenButton = document.querySelector("#showBroken");

const showArrowButton = document.querySelector("#showArrow");

const showBindButton = document.querySelector("#showBind");


// 2. Создаем объект пользователя

const user = {
  name: "",
  showName() {
    console.log("this= " ,this);
    const message = `Hello, ${this.name}`;

    result.textContent = message;
    return message;
  }
};

//3. Обновляем имя пользователя
function updateUserName() {
  const name = nameInput.value.trim();
  user.name = name || "Guest";
}

//4. Show now
function showName() {
  showNowButton.addEventListener
  ("click", ()=>{
    updateUserName();
    user.showName();
  });
}

//5.SHOW LATER (Broken)

showBrokenButton.addEventListener
("click", ()=>{
  updateUserName();
  result.textContent =
    "Waiting 1 second (broken context)...";
  setTimeout(user.showName, 1000);
});


//6.SHOW LATER (ARROW)

showArrowButton.addEventListener
("click", ()=>{
  updateUserName();
  result.textContent =
    "Waiting 1 second (arrow solution)..."
  setTimeout(
    () => {
      user.showName();
    },1000) ;
});

// //7.SHOW LATER (BIND)

showBindButton.addEventListener
("click", ()=>{
    updateUserName();
   result.textContent =
       "Waiting 1 second (bind solution)..."
   const bondShowName=
       user.showName.bind(user);

    setTimeout(bondShowName,1000) ;
});


console.log("Tests simple!!!!!!")

const user1 = {
  name: "Anna",
  greet() {
    console.log("Hello, " + this.name);
  }
};

user1.greet();

console.log("Tests simple!!!!!!")

const user1 = {
  name: "Anna",
  greet() {
    console.log("Hello, " + this.name);
  }
};

user1.greet();//Hello, Anna

const user2= {
  name: "Bob",
  greet() {
    console.log("Hello, " + this.name);
  }
}

const fn=user2.greet;
// fn();//ERROR undefinde.name

const user3 = {
  name: "John",
  greet(){
    const inner = () => {
      console.log("Hello, " + this.name);
    }
    inner();
  }
}

user3.greet();

const user4 = {
  name: "Alice",
  greet: () => {
    console.log("Hello, " + this.name);
  }
}

user4.greet()