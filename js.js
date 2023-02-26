
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


//mergesort Algorithm

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
    
    
  //palindrome function 

  function isPalindrome(str){
    //base case
   str = str.toLowerCase();
    if (str.length <= 1 ){
        return true;
    }
    

    if (str[0] == str[str.length -1]){
       return isPalindrome(str.substring(1,str.length - 1));
    } else {return false;}

  }

  //check prime year function
  function isPrime(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;
  
    if (age <= 1) {
        return false;
    } 
    else if (age == 2)
     {
      return true;
    } 
    else {
    
      for (let i = 2; i < age; i++) {
        if (age % i == 0)
         {
          return false;
        }
      }
      return true;
    }
  }
  

  