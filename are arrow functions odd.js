// Time to test your basic knowledge in functions! Return the odds from a list:
//
// odds([1,2,3,4,5]) #=> [1,3,5]

const odd = (num) => {
    let odds = [];
    for (let i = 0; i < num.length; i++){
        if (i % 2 == 0){
            odds.push(num[i])
        }
    }
    return odds;
}

console.log(odd([1, 2, 3, 4, 5]))