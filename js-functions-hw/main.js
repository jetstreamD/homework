// 1
console.log('TASK 1)')

function helloName(anyName) {
    return `Hello ${anyName}!`
}
console.log(helloName('Jake'))


// 2)
console.log('TASK 2)')

const numbersArray = [1, 10, 2, 20, 3, 30, 4, 40, 5, 50]

function isMoreThanTen(numbersArray) {
    for (let h = 0; h < numbersArray.length; h++) {
        if (numbersArray[h] > 10) {
            console.log(numbersArray[h])
        }
    }
}
isMoreThanTen(numbersArray)


// 3)
console.log('TASK 3)')

function calculator(number1, number2, operator) {
    if (operator === 'addition') {
        result = number1 + number2
        console.log(result)
    } 
    if (operator === 'subtraction') {
        result = number1 - number2
        console.log(result)
    }
    if (operator === 'multiplication') {
        result = number1 * number2
        console.log(result)
    }
    if (operator === 'division') {
        result = number1 / number2
        console.log(result)
    }
}
calculator(100, 25, 'addition')
calculator(100, 25, 'subtraction')
calculator(100, 25, 'multiplication')
calculator(100, 25, 'division')





