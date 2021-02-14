let tc = 25;
tf = (9 / 5) * tc + 32;
alert ("температура по Фаренгейту будет равна " + tf);

let admin;
let name = 'Василий';
admin = name;
console.log (admin);

/*
1. 10 прибавляем 10 получаем 20 + "10" происходит склеивание и результат 2010(если хотя бы один операнд строка то остальные будут преобразованы в строку)
2. 10 плюс "10" плюс 10 происходит склеивание 101010 (см п.1)
3. 10 плюс 10 плюс 10 равно 30
4. 10 делить на -0 равно минус бесконечности
5.10 делить на NaN даёт NaN
*/


let result = 10 + 10 + "10";
console.log (result);

let result2 = 10 + "10" + 10;
console.log (result2);

let result3 = 10 + 10 + +"10";
console.log (result3);

let result4 = 10 / -"";
console.log (result4);

let result5 = 10 / +"2,5";
console.log (result5);


