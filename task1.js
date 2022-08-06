let meaning = +prompt("Введите значение");
if (isNaN(meaning)) {
console.log("Вы ошиблись"); 
} else if(meaning %2 == 1) {
console.log("не четное"); 
} else if (meaning %2 !== 1) {
console.log("четное"); 
}
console.log(typeof meaning)