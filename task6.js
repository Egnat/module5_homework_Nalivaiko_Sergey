let numArr = [3, 55, 8, 7, 77, 3, 20];
let check = numArr[0];
numArr.forEach((item, index, numArr) => {
if(item == check) {
console.log(`true`);
} else  {
console.log(`false`); 
}
}) 