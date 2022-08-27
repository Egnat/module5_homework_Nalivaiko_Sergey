/*Дана переменная x, которая может принимать любое значение. 
Написать программу, которая в зависимости от типа данных x выводит в консоль 
сообщение вида: «x — число».

Опишите три случая: когда х = числу, строке или логическому типу. 
В других случаях выводите сообщение: «Тип x не определён».

Примечание: в этом задании использовать promt не нужно.*/

let x = undefined;
let result;

switch(result) {
case 1: (x == number)
console.log("x - число");
    break;
  
case 2: (x == string)
console.log("x - строка");
    break;
    
case 3: (x == boolean)
console.log("x - это логический тип");
break; 
default:
console.log("x - тип не определен ");  
}
console.log(typeof x);

/////////////////////////

let x = undefined;
if (x == "undefined") {
console.log("x -  строка");
} else if (x == "boolean") { 
console.log("x - логический тип");
}else if (x == "number") {
console.log("x - число")
} else {
console.log("тип x - не определён");
} 
console.log(typeof x);

//Если нужно, чтоб х был числом :)
let x = undefined;
if (x == undefined) {
console.log("x - число");
} else if (x !== undefined) {
console.log("строка");
} else if (x == boolean) { 
console.log("x -это логический тип");
} else if (x == "number") {
console.log("число");
} else {
console.log("тип x - не определён");
} 