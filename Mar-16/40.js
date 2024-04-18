const array1=[10,20,30,40,50,60,70,80];
const array2=[1,2,3,4,5,6,7,8,];
const array3=[...array1,...array2,89];
console.log(array3);
// for (let i in array3)
// {
//     console.log(array3[i]);
// };

// const newArray=[..."abc"];
// console.log(newArray);

const obj1={
    key1:"value1",
    key2:"value2",
};

const obj2={
    key1:"value59",
    key3:"value3",
    key4:"value4"
}
const newObject={
    ...obj2,...obj1
}
console.log("new object",newObject);

const myObj={...["array1", "array2"]};
// const newObj={}
console.log(myObj);
