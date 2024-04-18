const test=()=>{
    try {
        throw new Error("This is error")
    }
    catch(err){
        return err
    }
    finally{
        return "Inside finally"
    }
}; 

let res=test();
console.log(res);

