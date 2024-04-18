//splice
//it is used for insert or delte element in array
//It will change original array
//start, delete, insert
//If u delete any element then it will be return

const myArray=["item1", "item2","item3","item4"];
console.log(myArray);

//for delete second element in an array
myArray.splice(1,1);
console.log(myArray)

//for insert element in an array at 1 position
//start,delete,insert
myArray.splice(1,0,"newInserted element");
console.log(myArray);

const deletedItem=myArray.splice(1,1);
console.log(myArray);
console.log(deletedItem);

//insert and delete item at the same time;
console.log("BeforeInserted",myArray);
myArray.splice(1,2,"InsertedItem1","InsertedItem2");
console.log("After inserted", myArray)