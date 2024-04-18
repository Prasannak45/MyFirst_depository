const person1={
    id:1,
    firstName:"harshit"
};
const extraInfo=new Map();
extraInfo.set(person1,{age:1,gender:"male"})
console.log(person1.id);
console.log(extraInfo.get(person1))
for(let i in extraInfo)
{
    console.log(i);
}