//function inside function
const app=()=>{
    const insideApp=()=>{
        console.log("Inside func");
    }
    const addTwo=(a, b)=>{
        return a+b;
    }


    console.log("Inside App");
    insideApp();
    const a=addTwo(10,11);
    console.log(a);
}


app();