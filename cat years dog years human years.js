// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears or human_years years ago.

// Return their respective ages now as [humanYears,catYears,dogYears] or [human_years,cat_years,dog_years]

// NOTES:

// humanYears >= 1
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

const years = (humanYears) => {
    let catYears, dogYears;
    if(humanYears <= 0 || typeof humanYears !== 'number'){
      return [0,0,0];
    }
    if(humanYears === 1){
        catYears = 15;
        dogYears = 15;
    }
    if(humanYears === 2){
        catYears = 15 + 9;
        dogYears = 15 + 9;
    }
      if(humanYears > 2){
        catYears = (16) + (4 * humanYears);
        dogYears = (18) + (5 * humanYears);
    }
    return [humanYears, catYears, dogYears];
  };

  console.log(years(12));