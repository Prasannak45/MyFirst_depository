var t = {
    a: 10,
    b: 20
 };
 
 console.log(t.a);
 console.log(t.b);
 
 var h = {
    get: (target, key) => {
        console.log("Trying to Access -> " + key);
        return target[key];
    }
 };
 
 var proxy = new Proxy(t, h);
 
 console.log(proxy.a);
 console.log(proxy.b);