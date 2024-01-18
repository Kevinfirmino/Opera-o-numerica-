let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo úmero")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("Soma: " + sum)
alert("Subtração : " + sub)
alert("Multiplicação: " + multi)
alert("divição: " + div)
alert("Resto da Divição: " + restDiv)