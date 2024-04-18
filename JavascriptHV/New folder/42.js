const users=[
    {UserId:1, firstName:"Harshit", gender:"Male"},
    {UserId:2, firstName:"Mohit", gender:"male"},
    {UserId:3,firstName:"Nitish", gender:"male"}
]

// for(let i of users)
// {
//     console.log(i);
// }

// const [user1, user2, user3]=users;
// console.log(user1.UserId);
const [{UserId:user1ID, firstName}, , {gender}]=users;
console.log(user1ID);
console.log(gender);
console.log(firstName);