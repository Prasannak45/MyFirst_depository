var x=10;
function foo(){
    var y=20;
    function bar(){
        var z=15;
        var output=x+y+z;
        return output;
    }
    return bar
}