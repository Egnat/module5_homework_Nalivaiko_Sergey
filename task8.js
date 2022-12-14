/*Создайте произвольный массив Map. 
Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

Используйте шаблонные строки.*/

let people = new Map();
people.set(`${"x"} - Катя`, `${"y"} - 18`);
people.set(`${"x"} - Федя`, `${"y"} - 22`);
people.set(`${"x"} - Вася`, `${"y"} - 26`);
for ( let name of people.keys()) {
  console.log(`ключи и свойства, ключ - ${name}`, people);
}
for ( let age of people.values()) {
  console.log(`ключи и свойства, значения - ${age}`, people);
}

console.log(people.keys());
console.log(people.values()); 