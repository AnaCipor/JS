function sum(a,b,c){
    return a+b+c;
}

const numbers=[10,20,30];

console.log(sum(numbers[0], numbers[1],numbers[2]));//60

console.log(sum(...numbers));

// ...  рассыпать массив в отдельные элементы

// Spread and Rest  - разные вещи

function sum1(...args){
    return args.reduce((acc, item) => acc + item, 0);
}

const values = [1, 2, 3, 4, 5];

console.log(sum1(...values));//15

// spread используется для копирования массивов или объектов на основе существующего, и передачи массива в функцию на основе его элементов, 
// а rest используется для сбора всех оставшихся аргументов функции в массив.

const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // [1, 2, 3]

console.log(original === copy); // false
//  spread создает поверхностную копию массива, а не глубокую. Это означает, 
//  что если массив содержит объекты или другие массивы, то копия будет ссылаться на те же объекты, что и оригинал.

copy.push(4);
console.log(original); // [1, 2, 3]
console.log(copy); // [1, 2, 3, 4]


//объединение массивов
const fruits = ["apple", "banana"];
const vegetables = ["carrot", "potato"];
// const all = fruits.concat(vegetables);
const food = [...fruits, ...vegetables];
console.log(food); // ["apple", "banana", "carrot", "potato"]
const food2 = ['bread', 'milk', ...fruits, ...vegetables];
    console.log(food2); // ['bread, 'milk', 'apple', 'banana', 'carrot', 'potato']


    console.loglog (" ======= Spread и Object  =======")
    const user = {
        name: "John",
        age: 30,
        city: "New York"
    }

    const newUser = user; //ERROR
    newUser.age = 31;
    console.log(user.age);//31
    console.log(newUser.age);//31

    console.log (user === newUser);//true

    const newUser1 = {...user};
    newUser1.age = 50;
    console.log(user.age);//31
    console.log(newUser1.age);//50

    const newUser2 = {...user, age: 99};
    console.log(newUser2.age);//99
    
