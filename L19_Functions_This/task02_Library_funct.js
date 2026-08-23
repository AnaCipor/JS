// number
let a=3.14159
let res=Math.floor(a);
console.log(res); // 3

a = -3.999
res=Math.floor(a);
console.log(res); // -4

a = 1.77
res=Math.round(a);
console.log(res); // 2

a = 1.11
res=Math.round(a);
console.log(res); // 1

a = -1.77
res=Math.round(a);
console.log(res); // -2

res=Math.PI;
console.log(res)

console.log(Math.random()); // [0,1) от нуля до единицы

a = 1.77
res=Math.trunc(a); //обрезает дробную часть
console.log(res); //1

res=Math.PI;
res=res.toFixed(4); // возвращает строку!! особенность метода
console.log(res, typeof res);
res=+res; // перевод в число = '+number'
console.log(res, typeof res);
 
//string
 
const str = "Hello Java Script!!!";
//           0      7 9         19    len=20
//                           -4 -1
console.log(str.length); //20
res = str.charAt(19);
console.log(res); //!
res=str[19];
console.log(res);//!
for (s of str){
    console.log(s);    
}
res=str.indexOf('ava');
console.log(res);//7
 
res=str.indexOf('aaaaaaaaaa');
console.log(res);//-1 не существует
 
res=str.lastIndexOf('a');
console.log(res);//9
 
res=str.substring(4,8); // [4...8) - substring не рабротает с отриц значениями, для этого есть slice
//  substring() воспринимает -4
console.log(res);//o Ja

//[start, end)
// = start включаем, end не включаем.

 
res=str.slice(-4,-1);  // начни с четвёртого символа с конца и возьми до конца. Слайс считает от конца строки
    // ... t ! ! !
    //    -4 -3 -2 -1
console.log(res);//t!!


//!!!!!!!!!!!!!!!!!!!!!
// substring → старты/концы от начала, отрицательные → 0,
//             если перепутала start и end → сам переставит

// slice     → умеет считать с конца через минус,
//             границы местами не переставляет