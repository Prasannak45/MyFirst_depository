//iterables
// iterables mean jispe hum loop laga skte hai
//string array are iterables
// 

const firstName='Harshit';
for(let i in firstName){
    console.log(i)
};

for(let i of firstName){
    console.log(i)
}

//array like object
//jinke pass length property hoti hai
//aur jinko hum index se access kar skte hai
//example- String

const obj1=[{
    firstName:"Harshit Vashisth",
    age:22
}];

for(let i of obj1){
    console.log(i);
};