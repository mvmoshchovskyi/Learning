//
// 86 a
//

const numbers = (number) => number.toString().split('').length

console.log(numbers(123))
console.log(numbers(56726))


//
// 86 b
//

const numbersSum = (number) => number.toString().split('').reduce((a,b)=> a + +b , 0)

console.log("-------------------------------")
console.log(numbersSum(123))
console.log(numbersSum(12432143))

//
// 330
//

const isPerfect = number => {
    let sum = 0;
    for (let i = 0; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i
        }
    }
    return `${number} is ${number === sum}`
};

console.log("-------------------------------")
console.log(isPerfect(6))
console.log(isPerfect(8))
console.log(isPerfect(5))
console.log(isPerfect(25))
console.log(isPerfect(15))
console.log(isPerfect(28))
console.log(isPerfect(496))

module.exports = {
    numbers,
    numbersSum,
    isPerfect
};
