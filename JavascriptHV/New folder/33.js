// for of loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);

// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

for (let i=0; i<fruits.length;i++)
{
    console.log(fruits[i]);
}

for(let i=0;i<fruits.length;i++)
{
    fruits2.push(fruits[i].toUpperCase());
}
for(let i=0; i<fruits2.length;i++){
    console.log(fruits2[i]);
}
