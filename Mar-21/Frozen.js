let obj = {
    a : 1,
    b : 2
 };
 
 console.log(obj);
 console.log(Object.isFrozen(obj));
 
 obj.c = 3;
 console.log(obj);
 
 Object.freeze(obj);
 console.log(Object.isFrozen(obj));
 
 obj.d = 4;
 console.log(obj);
 
 delete obj.a;
 console.log(obj);
 
 obj.b = 200;
 
 console.log(obj.b);