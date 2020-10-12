// Basic Sorting Algorithm
// Bubble Sort

function bubbleSort(len){
    for(let i = 0; i < len.length; i++){
        for(let j = 0; j < len.length - (i + 1); j++){
            if(len[j] > len[j+1]){
                let length = len[j];
                len[j] = len[j+1];
                len[j+1] = length;
            }
        }
    }
    return len;
}

//console.log(bubbleSort([26,4,56,3,21,4,6,8,89]))

//selection Sort

function selectionSort(len){
    for(let i = 0 ;i < len.length ; i++){
        let min = i;
        for(let j = i + 1; j < len.length; j++){
            if(len[i] > len[j])
            min = j;
        }
        if(min !== i){
        let next = len[i];
        min = len[i];
        min = next;
        }
    }
    return len;
}

//console.log(bubbleSort([26,4,56,3,21,4,6,8,89]))

//Insertion Sort

let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};

//console.log(insertionSort([26,4,56,3,21,4,6,8,89]))

//INTERMEDIATE SORTING Algorithm

// Merge Sort

function mergeSort(unsorted){
    if(unsorted.length <= 1)
    return unsorted;

    const center = Math.floor(unsorted.length/2);

    const left = unsorted.slice(0, center);
    const right = unsorted.slice(center);

    return merge(
        mergeSort(left), mergeSort(right)
      );

}

function merge(left, right){
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          resultArray.push(left[leftIndex]);
          leftIndex++;
        } else {
          resultArray.push(right[rightIndex]);
                rightIndex++;
        }
      }
 
      return resultArray
              .concat(left.slice(leftIndex))
              .concat(right.slice(rightIndex));
}

//console.log(mergeSort([3,45,6,7,5,3,4,5,6,7,65,4,3,21,-1,-3,-5,34,45]))

//QuickSort

function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
  };
  
  var unsorted = [23, 45, 16, 37, 3, 99, 22];
  var sorted = quicksort(unsorted);
  
  console.log('Sorted array', sorted);