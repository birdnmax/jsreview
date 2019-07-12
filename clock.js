// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
//
// Your task is to make 'Past' function which returns time converted to miliseconds.
//
// #####Example:
//
// past(0, 1, 1) == 61000
// Note! h, m and s will be only Natural numbers! Waiting for translations and Feedback! Thanks!

const past = (h, m, s) => {
    let hour = h * 3600000;
    let minute = m * 60000;
    let second = s * 1000;
    return hour + minute + second;
}

console.log(past(0, 1, 1));