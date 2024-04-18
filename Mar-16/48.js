//Function inside function
const app=()=>
{
    

    const myFncc=()=>{
        console.log("Myfncc called");
    }

    const sum=(a,b)=>{
        return a+b;
    }
    console.log("Inside main function");
    myFncc();
    console.log(sum(10,10));
}
app();