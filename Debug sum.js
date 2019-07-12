// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.
//
// Example
//
// getSumOfDigits(123) // -> 6

const getSumOfDigits = (n) => {
    return Math.abs(n).toString().split('').reduce(function(a, b){return +a + +b}, 0)
}

console.log(getSumOfDigits(1234))
console.log(getSumOfDigits(555))