// var obj={
//     a:10,
//     b:20
// };
// console.log(obj);
// console.log(obj.a);
// console.log(obj.b);


// var obj={
//     a:10,
//     b:20,
// } ;
// console.log(obj);
// console.log(obj.a);
// console.log(obj.b);

// obj.c=30;
// console.log(obj.c);
// console.log(obj);
// delete obj.c;
// console.log(obj);


// var obj={
//     a:10,
//     b:20
// };
// console.log(obj);
// console.log(obj['a']);
// console.log(obj['b']);
// obj['c']=30;
// console.log(obj['c']);
// console.log(obj);
// let m='c';
// delete obj[m];
// console.log(obj);




// var amit={
//     a:10,
//     b:20
// };
// console.log(amit);
// console.log(amit.a);
// console.log(amit.b);

// var moti={
//     m:30,
//     n:40
// };

// console.log(moti);
// console.log(moti.m);
// console.log(moti.n);

// amit.dost=moti;
// console.log(amit);
// console.log(amit.dost);
// console.log(amit.dost.m);
// console.log(amit.dost.n);

// console.table(amit);
// console.table(moti);



var amit={
    a:10,
    b:20
};
console.log(amit);
console.log(amit.a);
console.log(amit.b);

var moti={
    m:30,
    n:40
}
console.log(moti);
console.log(moti.m);
console.log(moti.n);
var raju={
    i:50,
    j:60
};
console.log(raju);
console.log(raju.i);
console.log(raju.j);

amit.dost=moti;
moti.friend=raju;
raju.mitra=amit;
console.log(amit);
console.log(amit.dost);
console.log(amit.dost.m);
console.log(amit.dost.n);
console.log(moti);
console.log(moti.friend);
console.log(raju);
console.log(raju.mitra);
console.log(amit.dost.friend.i);
console.log(amit.dost.friend.mitra.a);

console.log(this);
console.log(window);