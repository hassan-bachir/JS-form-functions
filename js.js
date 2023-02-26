
//resposive navigation toggle button
const toggle =document.querySelector('.toggle')
const toggleic =document.querySelector('.toggle i')
const dropdown =document.querySelector('.dropdown')
toggle.onclick = function(){
    dropdown.classList.toggle('open');
    const isopen =dropdown.classList.contains('open');}
    
//json file things
// const fs = require('fs');
// const data = fs.readFileSync('data.json');


//mergesort()

let a = [5,3,8,2,4,3,6,9]

function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);
  
    const sortedLeft = mergeSort(leftArray);
    const sortedRight = mergeSort(rightArray);
    
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(leftArray, rightArray) {
    const resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        resultArray.push(leftArray[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(rightArray[rightIndex]);
        rightIndex++;
      }
    }
    
    return resultArray
      .concat(leftArray.slice(leftIndex))
      .concat(rightArray.slice(rightIndex));
  }
    
    
    console.log(mergeSort(a));
    



  