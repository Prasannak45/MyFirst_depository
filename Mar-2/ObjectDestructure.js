var users=
    [{UserId:1, firstName:{name:"amit"}, gender:"male"}]
    // {UserId:2, firstName:"Mohit", gender:"male"},
    // {UserId:3, firstName:"Nitish", gender:"male"}

// const [{firstName},{name}]=users;
// const [user1, user2, user3]=users;
// console.log(user1);
const [{firstName:{name}}] = users
console.log(name);

    
