

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
        alert(`course of name "${course.title}" Created, Check console for more info`);

        titleInput.value = '';
        instructorInput.value = '';
         durationInput.value = '';
        });
