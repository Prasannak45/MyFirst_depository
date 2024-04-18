// let a=1;
// let b=2;
// let obj1={
//     c:3,
//     d:4
// };
// let obj2={a,b,...obj1};
// console.log("a==",a);
// console.log("b=",b);
// console.log("obj1=",obj1);
// console.log("obj2=",obj2);



let a=1;
let b=2;
let c="cat";
let obj1={
    c:3,
    d:4,
    m1(){
        console.log("m1 of obj1");
    },
    [c]:5,
    [c+(b-a)]:6,
    get x(){return 33;},
    set x(c){console.log(c);}
};
let obj2={a,b,...obj1};
obj1.m1();
obj2.m1();
console.log("obj1.x is",obj1.x);
obj1.x=99;
console.log("obj1.x is", obj1.x);
console.log("a=",a);
console.log("b=",b);
console.log("obj1=",obj1);
console.log("obj",obj2);