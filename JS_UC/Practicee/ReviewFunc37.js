function calcAge(birthYear, firstName){
    const age=2037-birthYear;
    console.log(`${firstName} is ${age} years old`);
    return age;
}
const age=calcAge(1991, 'Jonas');
console.log(age);


/* Write your code below. Good luck! 🙂 */

const calcAverage=(a, b , c)=>{
    const average=(a+b+c)/3;
    return average;
}

const scoreDolphins=calcAverage(44,23,71);
const scoreKoalas=calcAverage(65,54,49);

const checkWinner=(avgDolphins, avgKoalas)=>{
    if(avgDolphins>avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    }
    else if(avgKoalas>avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    }
    else{
        console.log(`No teams win`);
    }
}
checkWinner(scoreDolphins, scoreKoalas)