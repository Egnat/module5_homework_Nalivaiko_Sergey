/*Записать в переменную случайное целое число в диапазоне [0; 100]. 
Используйте объект Math.*/

let numArr = [0, 100]
function getRandomIntInclusive(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min; 
}
console.log(getRandomIntInclusive(0, 100));