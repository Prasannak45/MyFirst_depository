//find method
const myArray=["Hello", "cat", "dog", "lion"];
function isLength3(string){
    return string.length===3;
}
const ans=myArray.find(isLength3);
console.log(ans);