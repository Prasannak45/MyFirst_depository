const arr1=[1,2,3,4,5,6,7];
const total=arr1.reduce((acc , curr)=> acc+curr,0);
console.log(total);

const myArr1=[
    {
        course:"Java",
        Price:4999
    },
    {
        course:"JS",
        Price:49999
    },
    {
        course:"Python",
        Price:7999
    },
    {
        course:"Swift",
        Price:4999
    }
];

const totalCost=myArr1.reduce((acc, course)=>acc+course.Price,0);
console.log(totalCost);

const arrNum=[1,2,3,4,5,6];
// const numRes=arrNum.reduce((first, second)=>first*second,1);
// console.log(numRes);
// arrNum.pop();
arrNum.push(7);
console.log(arrNum);






