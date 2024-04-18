// const obj1={
//     userName:"Hitesh",
//     logName:function(){
//         console.log(`user name is ${this.userName}`);
//     }
// };

// obj1.logName();


// obj1.userName="harry";
// obj1.logName()


function chai(){
    console.log(this);
}

chai();