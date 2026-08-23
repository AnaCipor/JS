// # Попытайтесь не запуская код, определить результат каждого действия. Кратко, но понятно обьясните ответ письменно. Проверьте ваш вывод запустив код.

console.log(false == 0);   // true - тк false это 0 (в данном случае нет проверки типов)
console.log(false === 0); // false -> тк false и 0 это разные типы (строгое сравнение)

console.log("" == 0); // true - тк "" это 0 (в данном случае нет проверки типов)
console.log("" === 0); // false - разные типы данных: string и number

console.log(null == undefined); // true -> специальное правило для == 
console.log(null === undefined); //false ->  разные типы данных при строгом сравнении

console.log("55" == 55); // true -> приведедние к одному типу + нестрогое сравнении 
console.log("55" === 55); // false -> разные типы данных при сторогом сравнении: string и number

console.log("true" == true); // false ->  true → 1, "true" → NaN
console.log("true" === true); // false -> разные типы данных при сторогом сравнении

console.log((0.2 + 0.1 - 0.3) == true); // false -> true = 1 != выражение в скобках =  5.551115123125783e-17 (особенность хранения дробных чисел в JS)
console.log((0.2 + 0.1 - 0.3) === true); // false -> number и boolean не равны (разные типы данных при строгом сравнении)

console.log((0.2 + 0.1 - 0.3) == false); // false -> number != false (false=0) 
console.log((0.2 + 0.1 - 0.3) === false); // false -> number != boolean

/*
#  Adv *** ДОПОЛНИТЕЛЬНО Можно спрашивать ИИ,но важно понять почему такой ответ и внятно и кратко обьяснить 

console.log({} == {});
// false: каждый {} создаёт новый объект.
// Два разных объекта не равны, даже при ==.

console.log({} === {});
// false: каждый {} создаёт новый объект.
// Объекты равны, только если это ссылка на один и тот же объект.


console.log({} == "[object Object]");
// true: при нестрогом сравнении объект преобразуется
// в строку "[object Object]".
// Получается: "[object Object]" == "[object Object]".

console.log({} === "[object Object]");
// false: === не преобразует типы.
// Слева object, справа string.


console.log({} == true);
// false: true преобразуется в 1.
// Объект преобразуется в "[object Object]", а затем в NaN.
// Получается: NaN == 1 → false.

console.log({} == false);
// false: false преобразуется в 0.
// Объект преобразуется в "[object Object]", а затем в NaN.
// Получается: NaN == 0 → false.


console.log({} == 0);
// false: объект преобразуется в "[object Object]",
// а затем в NaN.
// Получается: NaN == 0 → false.

console.log({} == NaN);
// false: объект при числовом преобразовании даёт NaN,
// а NaN не равен никакому значению, даже самому себе.


NaN == NaN;  // false
NaN === NaN; // false
Number.isNaN(NaN); // true

объяснение через truthy здесь не подходит. Truthy/falsy используется, когда значение преобразуют именно в boolean:
Boolean({}); // true

оператор == работает по другим правилам:
{} == 0
Он не делает Boolean({}). Здесь объект преобразуется сначала в строку, а затем в число:
{}
↓
"[object Object]"
↓
NaN
И ещё пример одинаковой ссылки:
const object = {};

console.log(object == object);  // true
console.log(object === object); // true

*/