//If u refer object then it will assign address
const obj1={
    firstName:"Harshit",
    age:16
};

const obj2=obj1

//Clone object using 

// 1--Clone object using read opearator
//   const obj3={...obj1};

// 2-- Clone object using assign operator
const obj4=Object.assign({}, obj1);
obj4.key3="Value3";
console.log(obj4);