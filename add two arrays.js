// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.
 
const sums = (arr1, arr2) => {
    var newSum = arr1.map((a, i) => a + arr2[i]);
    return newSum;
}

console.log(sums([1, 2, 3, 4], [5, 6, 7, 8]))
console.log(sums([1, 3, 9], [2, 4, 9, 11, 12]))
console.log(sums([1, 2, 3], [4, 5]))