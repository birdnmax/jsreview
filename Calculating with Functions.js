// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
//
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
//
const num = (n) => {
    if (n='zero'){
        let n = 0
    } else if (n='one'){
        let n = 1
    } else if (n='two'){
        let n = 2
    } else if (n='three'){
        let n = 3
    } else if (n='four'){
        let n = 4
    } else if (n='five'){
        let n = 5
    } else if (n='six'){
        let n = 6
    } else if (n='seven'){
        let n = 7
    } else if (n='eight'){
        let n = 8
    } else if (n='nine'){
        let n = 9
    }
    return n;
}

const num2 = (n) => {
    if (n='zero'){
        let n = 0
    } else if (n='one'){
        let n = 1
    } else if (n='two'){
        let n = 2
    } else if (n='three'){
        let n = 3
    } else if (n='four'){
        let n = 4
    } else if (n='five'){
        let n = 5
    } else if (n='six'){
        let n = 6
    } else if (n='seven'){
        let n = 7
    } else if (n='eight'){
        let n = 8
    } else if (n='nine'){
        let n = 9
    }
    return n;
}

const plus = (n1, n2) => {
    return n1 + n2;
}

const minus = (n1, n2) => {
    return n1 - n2;
}

const times = (n1, n2) => {
    return n1 * n2;
}

const dividedBy = (n1, n2) => {
    return n1 / n2;
}