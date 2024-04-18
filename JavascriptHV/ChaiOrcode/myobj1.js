const myObj={
    name:"Harshit",
    age:28,
    email:"harshit@gmail.com",
    address:"Mumbai"
};

for(let key of Object.keys(myObj)){
    console.log(myObj[key]);
}