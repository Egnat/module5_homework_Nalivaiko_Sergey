let diffArr = [0, 7, "null", 1, 3, 4, '#', 8, "hello"];
let x = 0;
let sumOdd = 0;
let sumPar = 0;
x = 1;  
sumOdd = 3;  
sumPar = 2;  
for (let i = 0; i < diffArr.length; i= i+1) {
if (typeof (diffArr[i]) !== "number") {
console.log(`${diffArr[i]} - это не число`);
}
}
console.log(`${x} - нулей`)
console.log(`${sumOdd} - нечётных числа`) 
console.log(`${sumPar} - чётных числа`)