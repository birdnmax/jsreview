// Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

const counter = (arr) => {
    let sheep = arr.filter(e => e == true)
    return sheep.length;
}

console.log(counter([true,  true,  true,  false]))
console.log(counter([true,  true,  false,  false]))