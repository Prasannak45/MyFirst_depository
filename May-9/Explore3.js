var t = {
    a: 10,
    b: 20
 };
 
 var h = {
    get: (target, key) => {
        console.log("Trying to Access -> " + key);
        return target[key];
    },
    set: (target, key, value) => {
        console.log("Trying to Write -> " + key + " = " + value);
        return target[key] = value;
    }
 };
 
 var proxy = new Proxy(t, h);
 
 console.log(proxy.a);
 console.log(proxy.b);
 
 proxy.a = 100;
 proxy.b = 200;
 
 console.log(proxy.a);
 console.log(proxy.b);