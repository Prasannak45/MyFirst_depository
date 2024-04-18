//lexical scope
const myVar="value1";
function myApp(){
    function myFunc(){
                        const myVar="value2";
                        const myFunc2=()=>{
                            console.log("inside myFunc2", myVar);
                        }
                        myFunc2();
                    }
                    console.log(myVar);
                    
}

