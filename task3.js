let stringArr = ['Hello World'];
for (let i = 0; i < stringArr.length; i++) {
stringArr[i] = stringArr[i].split('').reverse().join('');
}
console.log(stringArr)
