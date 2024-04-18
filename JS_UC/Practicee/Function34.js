//Function declaration

function ageCalculator(birthYear){
  return  2024-birthYear;
}
let currentAge=ageCalculator(1995);
console.log(currentAge);

//Function expression
//Anonymous function
const calc2=function(birthYear){
    return 2024-birthYear;
}
let currentAge2=calc2(1995);
console.log(currentAge2);