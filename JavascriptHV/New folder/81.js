//Prototype is available in only function not in a function
//only functions provide prototype property
function hello(){
    console.log("hello world");
}
hello.prototype.abc="abc";
hello.prototype.xyz="xyz";
hello.prototype.sing=function(){
    return "lalalla";
};
console.log(hello.prototype.sing());