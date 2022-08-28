//Дан произвольный массив. Необходимо вывести количество элементов массива, 
//затем перебрать его и вывести в консоль каждый элемент массива.

let numArr = [1, 2, 3, 4, 5, 6, 7];
  console.log(numArr);
  console.log(numArr.length);
for (let i = 0; i <numArr.length; i += 1) {
  console.log(numArr[i]);
}
let sum = 0; //эио просто так, это я сделал дополнительно
for (let i = 0; i <numArr.length; i ++) {
  sum += numArr[i];
  debugger
}
console.log(sum); // вывел сумму в консоль

/////////////////////

let arr = [1, 3, 5];
  console.log(arr);
arr.map(function(arr) {
  console.log(arr);
});
