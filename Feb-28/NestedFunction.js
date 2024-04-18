function f1()
{
    console.log("Entering f1");
    var a=1;
    var b=2;
    function f2()
    {
        console.log("Entering f2");
         var c=3;
         var d=4;
         console.log("c="+c);
         console.log("d="+d);
         console.log("Leaving f2");
    }
    console.log("a="+a);
    console.log("b="+b);
    f2();
    console.log("Leaving f1");
}
f1();