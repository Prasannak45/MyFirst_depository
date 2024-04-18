const obj1={
    firstName:"Harshit",
    age:20,
    about:function(){
        console.log(`Name is ${this.firstName} and age is ${this.age}`)
    }
};
obj1.about();

const obj2={
    firstName:"Haryy",
    age:18
};
obj1.about.call(obj2);

obj1.about.call()    //It will return undefined
//Because if u pass method with call method then for u need to pass this object with this.
// If u writing call then u have to pass this value(U need to pass object).