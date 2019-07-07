// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot seperating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// Patrick Feeney => P.F

const initial = (name) => {
    var inits = '';
    var letters = name.split(' ');
    for (i = 0; i < letters.length; i++){
        inits += letters[i].substr(0, 1);
    }
    return inits;
}

console.log(initial('james butts'))
console.log(initial('ted dead'))
console.log(initial('jerry berry'))
