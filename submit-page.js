

//resposive navigation toggle button
const toggle =document.querySelector('.toggle')
const toggleic =document.querySelector('.toggle i')
const dropdown =document.querySelector('.dropdown')
toggle.onclick = function(){
    dropdown.classList.toggle('open');
    const isopen =dropdown.classList.contains('open');}

 //create course thing

 class Course {
    constructor(title, instructor, duration) {
      this.title = title;
      this.instructor = instructor;
      this.duration = duration;
    }
  }
    const titleInput = document.getElementById('title');
    const instructorInput = document.getElementById('instructor');
    const durationInput = document.getElementById('duration');
    const submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', () => {
        
        const title = titleInput.value;
        const instructor = instructorInput.value;
        const duration = parseInt(durationInput.value);

        const course = new Course(title, instructor, duration);
        console.log(course);

        titleInput.value = '';
        instructorInput.value = '';
         durationInput.value = '';
        });

     //prompt to merge anchor  
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

          const activateMergeBtn = document.getElementById('activate-merge');
          activateMergeBtn.addEventListener('click', promptForNumbers);

//merge sort


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
    