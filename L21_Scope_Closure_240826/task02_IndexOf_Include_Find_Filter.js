const arr = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'forteen',
  'three',
  'four',
];

console.log('============== IndexOf, LastIndexOf ================');
console.log(arr.indexOf('three'));
console.log(arr.lastIndexOf('three'));

console.log('============== Includes ================');
console.log(arr.includes('three'));
console.log(arr.includes('twenty'));

// Supermaven

console.log('============== Find, FindIndex ================');
console.log(arr.find((item) => item.toLowerCase() === 'three'));
console.log(arr.findIndex((item) => item.toLowerCase() === 'three'));


console.log('============== Find & Filter  ================');
console.log(arr.find((e, index) => index %2  === 0 && e.length > 4));
console.log(arr.filter((e, index) => index %2  === 0 && e.length > 4));



// console.log('============== ObjArray  ================');

// const persons = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 35 },
//     { name: 'David', age: 25 }
// ]
