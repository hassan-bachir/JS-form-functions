
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
      } 
      else {
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
    } 
    else {return false;}

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


  //create course thing

  class Course {
    constructor(title, instructor, duration) {
      this.title = title;
      this.instructor = instructor;
      this.duration = duration;
    }
  } //this is creating an error at the main sign up menu 
    const titleInput = document.getElementById('title');
    const instructorInput = document.getElementById('instructor');
    const durationInput = document.getElementById('duration');
    const submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', () => {
        
        const title = titleInput.value;
        const instructor = instructorInput.value;
        const duration = parseInt(durationInput.value);

        const course = new Course(title, instructor, duration);
        //console.log(course);

        titleInput.value = '';
        instructorInput.value = '';
         durationInput.value = '';
        });





 //banana to ananabay

 function removeConsonants(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const arr = str.split('');
    let consonants = '';
    let i = 0;
    while (i < arr.length && !vowels.includes(arr[i])) {
      consonants += arr[i];
      i++;
    }
    if (consonants.length === 0) {
      return str + 'ay';
    }
     else {
      return arr.slice(i).join('') + consonants + 'ay';
    }
  }
 // console.log(removeConsonants("bbanana"));


  //reverse numbers


  function reverseNumbers(str) {

    const arr = str.split('');
    let num = '';
  
    
    for (let i = 0; i < arr.length; i++) {
      if (!isNaN(arr[i])) {
        num += arr[i];
      } 
      else {
        arr.splice(i - num.length, num.length, ...num.split('').reverse());
        num = '';
      }
    }
  if (num.length > 0) {
      arr.splice(arr.length - num.length, num.length, ...num.split('').reverse());
    }
   return arr.join('');
  }

//console.log(reverseNumbers("hf634f"));

// get ip 

async function getIPAddress() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  }
  console.log(getIPAddress());