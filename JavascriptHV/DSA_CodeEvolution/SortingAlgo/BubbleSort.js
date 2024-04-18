// function bubbleSort(arr){
//     let swapped
//     do {
//         swapped=false
//         for(let i=0; i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                let temp=arr[i];
//                 arr[i]=arr[i+1];
//                 arr[i+1]=temp;
//                 swapped=true;
//             }
//         }
//     }while(swapped)
// }

// const arr=[-8,5,2,1,7,3,-9];
// bubbleSort(arr);
// console.log(arr);

function bubbleSort(arr){
    let swapped;
    do{
        swapped=false;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                swapped=true;
            }
        }
    }while(swapped)
}

const arr=[50,40,-20,70,-80,10,30,90];
bubbleSort(arr);
console.log(arr);

function bubbleSort1(arr1){
    let swapped1;
    do{
        swapped1=false;
        for(let i=0;i<arr1.length-1;i++){
            if(arr1[i]>arr1[i+1]){
                let temp1=arr1[i];
                arr1[i]=arr1[i+1];
                arr1[i+1]=temp1;
                swapped1=true;
            }
        }
    }while(swapped1)
}

const arr2=[29,69,46,-16,37];
bubbleSort1(arr2);
console.log(arr2);