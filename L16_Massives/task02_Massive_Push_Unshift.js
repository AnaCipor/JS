console.log('=========Arrays=========');

let arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // 1
console.log(arr);
arr = ['a', 'b', 'c', 'd', 1, 2, 3, false, true];
console.log(arr[0]); // 'a'
console.log(arr);

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]);
console.log(fruits);
// fruits[1] = 'grape';
// fruits = ['kiwi', 'mango', 'pear']; // операция переприсваивания недопустима тк стоит const 
console.log(fruits);

// добавление элемента в конец массива
fruits.push('kiwi');
console.log(fruits);
// добавление элемента в начало массива
fruits.unshift('mango');
console.log(fruits);
// удаление последнего элемента из конца массива
fruits.pop();
console.log(fruits);
// удаление первого элемента из начала массива
fruits.shift();
console.log(fruits);
// удаление элемента по индексу
fruits.splice(1, 1); // удаляем 1 элемент с индекса 1
console.log(fruits);
// добавление элемента по индексу
fruits.splice(1, 0, 'pear'); // добавляем 'pear' на индекс 1
console.log(fruits);

fruits.splice(1, 1, 'kiwi'); // заменяем 1 элемент на индексе 1 на 'kiwi'
console.log(fruits);

fruits.push('pear', 'watermelon');
console.log(fruits);
fruits.unshift('strawberry', 'blueberry');
console.log(fruits);

const myFruits = ['tomato', 'cucumber'];
// fruits.push(...myFruits); "всыпать" дополнительный массив в массив fruits - все перемешается "в коробочке" - эти три точки
//  '...' - spread syntax, оператор распространения / spread.
// fruits.push(myFruits); → кладём одну коробку
// ['apple', 'banana', ['tomato', 'cucumber']]
// или 
// fruits.push(...myFruits);
// → открываем коробку и высыпаем содержимое
// ['apple', 'banana', 'tomato', 'cucumber']

fruits.push(fruits.push(myFruits));
console.log(fruits);
console.log('================');

//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// fruits.push(...myFruits)
//  → высыпали содержимое коробки
// fruits.push(myFruits)
// → засунули целую коробку внутрь другой коробки
// fruits.push(fruits.push(myFruits))
// → засунули коробку, получили число новой длины массива, а потом ещё и это число засунули туда же.


console.log(fruits.pop());
console.log(fruits);
console.log('================');
console.log(fruits.shift());
console.log(fruits);
// CRUD - Create, Read, Update, Delete

fruits.splice(1, 5, 'tomato', 'cucumber', 'carrot'); // с какого индекса начать (1), сколько элементов удалить (5 элементов начиная с первого) и на что переписать (tomato, cucumber))
// можно не заменять на новые элементы, можно прописать 0 -  и удалять не будет
console.log(fruits);
// start index, how many elements to delete, what to add
fruits.splice(1, 0, 'tomato', 'cucumber', 'carrot');
console.log(fruits);

