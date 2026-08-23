const numbers = [5, -2, 0, 17, -8, 4,0,3];

let count = 0;
for (const number of numbers) {
    if (number > 0) {
        count++;
    }
}
console.log(count);

let positive =0;
let negative = 0;
let zero = 0;

for (const number of numbers) {
    if (number>0) {
        positive++;
    } else if (number===0){
        zero++;
    } else {
     negative++;
    }
}
console.log ("Positive numbers" + positive + "Negative" + negative + "Zero" + zero);

const prices = [100, 200, 250, 50, 60];

let sum = 0;
for (price of prices) {
    sum += price;
}
console.log(sum); //node L17_Cycles/webinar17_1208.js   
console.log(sum/prices.length);

const temperatures = [20, 25, 30, 45, 35, 26];
let max = temperatures [0];
let maxIndex = 0;
for (let index = 1; index < temperatures.length; index++); {
    if (temperatures[index] > max) {
        max = temperatures[index];
    }
}
console.log(max);
console.log(maxIndex);

const numbers1 = [1,0,2,3,4,5,6,7,8,9,2,8,7,5,4,6,7,8,6,7,8,8,7,7,8]
const counts = Array (10).fill(0);
let mostFrequent = 0;
let maxCount = 0;

for (const number of numbers) {
    counts[number]++;
    if(maxCount < counts [numbers]) {
        maxCount = count [number];
        mostFrequent = number;
    }
}

console.log(counts);
console.log('Most Frequent:' + mostFrequent + "counter:" + maxCount);
// console.log(maxCount);

