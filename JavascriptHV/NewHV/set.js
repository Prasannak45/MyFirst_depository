const myArray=[1,2,3,4,5,6,7,8,9,9,10];
const unique=new Set(myArray);
console.log(unique);
// for(let i of unique){
//     console.log(i)
// }

// let length=0;
// for(let i of unique){
//     length++;
// }
// console.log("length",length)

if(unique.has(15)){
    console.log("15 is available")
}
else{
    console.log("Number is not available");
};


//How to create Set 
const  myArra2=[1,2,3,4,4,5,6,7,8,8];
//for creating unique elements array
const unique2=new Set(myArra2);
console.log(unique2);
//Calculate unique2 length
let unique2Length=0
for(let i of unique2){
unique2Length++;
};
console.log(unique2Length)