// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
//
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

const family = (ages) => {
    let sorted = ages.sort();
    let young = Math.min.apply(null, sorted);
    let old = Math.max.apply(null, sorted);
    let diff = old - young;
    let newAges = [young, old, diff];
    return newAges;
}