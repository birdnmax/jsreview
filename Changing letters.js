// When provided with a String, capitalize all vowels

// For example:

// Input: "Hello World!"

// Output: "HEllO WOrld!"

const bigVowels = (str) => {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if ('aeiouAEIOU'.indexOf(ch) !== -1) {
           arr.push(ch.toUpperCase());
        } else {
           arr.push(ch.toLowerCase());
        }
    }

    return arr.join("");
}

console.log(bigVowels('hello, my friend'))