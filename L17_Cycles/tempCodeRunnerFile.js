num = 623452;
let summ = 0;
first = (num - num %1000)/1000;
last = num % 1000;
for (let i=1; i<=3; i++) {
    summ = summ + first%10 - last%10;
    last = (last - last %10)/10;
    first=(first-first%10)/10;
}
if (summ===0) { // if (sum!=0)
  console.log('Happy Number');
} else {
  console.log('Unhappy Number');
}