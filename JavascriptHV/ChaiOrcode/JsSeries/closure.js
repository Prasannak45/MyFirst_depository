function outerFunction(){

    function innnerFunction(){
        console.log("Hello world");
    }
    return innnerFunction;
}

const ans=outerFunction();
ans();

function printFullName(name1, name2){
    function printName(){
        console.log(`name is ${name1} And last name is ${name2}`);
    }
    return printName;
}
let ans1=printFullName("Harshit", "Vashisth");
ans1();