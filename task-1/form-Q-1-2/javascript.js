
  // const form = document.getElementById('student-form');

  // form.addEventListener('submit', (e) => {
  //   e.preventDefault();

  //   const rollNumber = document.getElementById('rollNumber').value;
  //   const name = document.getElementById('name').value;
  //   const batch = document.getElementById('batch').value;
  //   const section = document.getElementById('section').value;

  //   const studentData = {
  //     rollNumber,
  //     name,
  //     batch,
  //     section
  //   };

  //   sessionStorage.setItem('studentData', JSON.stringify(studentData));
  // });


  const form = document.getElementById('student-form'); // Get the HTML form element with the id 'student-form'

form.addEventListener('submit', (e) => { // Add an event listener to the form's submit event
  e.preventDefault(); // Prevent the default form submission behavior

  const rollNumber = document.getElementById('rollNumber').value; // Get the value of the input field with the id 'rollNumber'
  const name = document.getElementById('name').value; // Get the value of the input field with the id 'name'
  const batch = document.getElementById('batch').value; // Get the value of the input field with the id 'batch'
  const section = document.getElementById('section').value; // Get the value
};

sessionStorage.setItem('studentData', JSON.stringify(studentData));
 );