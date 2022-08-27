/*Дана строка. Необходимо вывести в консоль перевёрнутый вариант. 
Например, "Hello" -> "olleH".*/

function reverseString(str) {
reverseStringr = str.split('').reverse().join('')
console.log(reverseStringr)
}
reverseString('Hello')