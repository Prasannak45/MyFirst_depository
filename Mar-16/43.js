const users=[
    {userid:1, username1:"user1", gender:"male"},
    {userid:2, username:"user2", gender:"male"},
    {userid:3, username:"user3", gender:"female"}
];
// const [user1, user2, user3]=user;
// console.log(user1);
// console.log(user2);
// console.log(user3);
const [{username1:var1}, , {gender}]=users;
console.log(var1);
console.log(gender);