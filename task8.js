let people = new Map()
people.set(`${"x"} - Катя`, `${"y"} - 18`);
people.set(`${"x"} - Федя`, `${"y"} - 22`);
people.set(`${"x"} - Вася`, `${"y"} - 26`);

console.log(people.keys()) 
console.log(people.values()) 

for ( let name of people.keys()) {
console.log(`ключи и свойства, ключ - ${name}`, people)
}
