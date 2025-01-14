// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
//
// if bmi <= 18.5 return "Underweight"
//
// if bmi <= 25.0 return "Normal"
//
// if bmi <= 30.0 return "Overweight"
//
// if bmi > 30 return "Obese"

const bmi = (w, h) => {
    var bmi = w / h ^ 2;
    if (bmi <= 18.5){
        return 'Underweight'
    } else if (bmi <= 25){
        return 'Normal'
    } else if (bmi <= 30){
        return 'Overweight'
    } else{
        return 'Obese'
    }
}

console.log(bmi(150, 5))
console.log(bmi(130, 5))
console.log(bmi(90, 5))