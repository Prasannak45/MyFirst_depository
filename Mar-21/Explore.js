let obj = {
   a : 1,
   b : 2
};

console.log(obj);
console.log(Object.isSealed(obj));

obj.c = 3;
console.log(obj);

Object.seal(obj);
console.log(Object.isSealed(obj));

obj.d = 4;
console.log(obj);

delete obj.a;
console.log(obj);