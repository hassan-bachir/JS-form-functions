
//resposive navigation toggle button
const toggle =document.querySelector('.toggle')
const toggleic =document.querySelector('.toggle i')
const dropdown =document.querySelector('.dropdown')
toggle.onclick = function(){
    dropdown.classList.toggle('open');
    const isopen =dropdown.classList.contains('open');}
    
//json file things
const submitBtn = document.getElementById("submit-button");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const dateOfBirth = document.getElementById("b-date").value;
  const password = document.getElementById("password").value;

  const userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    dateOfBirth: dateOfBirth,
    password: password,
  };

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "data.json");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(userData));
});




//MERGE SORT ALGORITHMS

function promptForNumbers() {
  const numbers = [];
  for (let i = 0; i < 10; i++) {
    const number = prompt(`Enter number ${i + 1}:`);
    if (number !== null && number.trim() !== '') {
      numbers.push(Number(number));
    }
  }
 
  
  prompt(mergeSort(numbers));
}

const activateMergeBtn = document.getElementsByClassName('activate-merge');
for(i=0;i<activateMergeBtn.length;i++){
activateMergeBtn[i].addEventListener('click', promptForNumbers);
}

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
    
    
  //PALINDROME FUNCTION
  
 
const palindAnchors = document.querySelectorAll('.palind');
palindAnchors.forEach(anchor => {
  anchor.addEventListener('click', () => {
    
    const inputStr = prompt('Enter a string:');
    const isPalind = isPalindrome(inputStr);

    alert(`The string "${inputStr}" is ${isPalind ? 'a palindrome' : 'not a palindrome'}.`);
  });
});

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


  async function evenIp() {
    const ipAddress = await getIPAddress();
    const digits = ipAddress.match(/\d/g);
    let sum = 0;
    for (i=0;i<digits.length;i++) {
      if (digits[i] % 2 === 0) {
        sum += Number(digits[i]);
      }
    }
    return sum;
  }
  

  async function myFunction() {
    const sum = await evenIp();
    console.log(sum); 
   
  }
//   myFunction();


//location function

//need to create an h3 to handle this function
function getCurrentLocation() {
    const locationElement = document.getElementById('h3');
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        locationElement.textContent = `Your current location is: ${latitude}, ${longitude}`;
      });
    } else {
      locationElement.textContent = "Geolocation is not supported by this browser.";
    }
  }