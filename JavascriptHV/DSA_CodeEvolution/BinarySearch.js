function binarySearch(arr, target){
    let leftIndex=0;
    let rightIndex=arr.length-1;

    while(leftIndex <= rightIndex){
        let middleIndex =Math.floor((leftIndex + rightIndex)/2)
        if(target === arr[middleIndex]) {
            return middleIndex
        }
        if(target <arr[middleIndex]){
            rightIndex=middleIndex -1
        }
        else {
            leftIndex=middleIndex+1
        }
    }
return -1
}

console.log(binarySearch([-5,2,4,6,10],10));
console.log(binarySearch([-5,2,4,6,10],6));
console.log(binarySearch([-5,2,4,6,10], 20));

function binarySearch2(arr, target){
    let leftIndex=0;
    let rightIndex=arr.length-1;
    while(leftIndex <=rightIndex){
        let middleIndex=Math.floor((leftIndex+rightIndex)/2)
        if(arr[middleIndex]===target){
            return middleIndex;
        }
        if(target< arr[middleIndex]){
            rightIndex=middleIndex-1;
        }
        else{
            leftIndex=middleIndex+1;
        }
    }
    return -1;
}

function binarySearch3(arr, target){
    let leftIndex=0;
    letrightIndex=arr.length-1;
    while(leftIndex<=rightIndex){
        let middleIndex=Math.floor((leftIndex+rightIndex)/2);
        if(target===arr[middleIndex]){
            return middleIndex
        }
        if(target<arr[middleIndex]){
            rightIndex=middleIndex-1;
        }
        else{
            leftIndex=middleIndex+1;
        }
    }
    return -1
}

function binarySearch4(arr, target){
    let leftIndex=0;
    let rightIndex=arr.length-1;
    while(leftIndex<=rightIndex){
        let midIndex=Math.floor((leftIndex+rightIndex)/2);
        if(target===midIndex){
            return midIndex;
        }
        if(target<arr[midIndex]){
            rightIndex=midIndex-1;
        }
        else{
            leftIndex=rightIndex+1;
        }
    }
    return -1
};

function binarySearch5(arr, target){
    let leftIndex=0;
    let rightIndex=arr.length-1;
    
    while(leftIndex<=rightIndex){
        let midIndex=Math.floor((leftIndex+rightIndex)/2);
        if(target===arr[midIndex]){
            return midIndex
        }
        if(target<arr[midIndex]){
            rightIndex=midIndex-1
        }
        else{
            leftIndex=midIndex+1;
        }
    }
    return -1;
}

console.log(binarySearch5([1,2,3,4,5,6,7],7));

function binarySearch(arr, target){
    let leftIndex=0;
    let rightIndex=arr.length-1;

    while(leftIndex<=rightIndex){
        let midIndex=Math.floor((leftIndex+rightIndex)/2);
        if(target===arr[midIndex])
        {
            return midIndex;
        }
        if(target<arr[midIndex]){
            rightIndex=midIndex-1;
        }
        else{
            leftIndex=midIndex+1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8],8))