function left(){
    console.log("left");
};
function right(){
    console.log("right");
};
// left() || right()
console.log(typeof (left())); 
// right()

function createNestedArray(...arrays) {
    return arrays.map(array => [array]);
}
 
// Example usage:
const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const arr3 = [true, false];
const nestedArray = createNestedArray(arr1, arr2, arr3);
console.log(nestedArray);