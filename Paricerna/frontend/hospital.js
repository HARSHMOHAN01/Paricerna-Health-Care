document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to server
  
    // Gather form data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const hospital = document.getElementById('hospital').value;
    const condition = document.getElementById('condition').value;
  
    // Display confirmation message
    alert(`Thank you, ${name}. Your information has been submitted to ${hospital}.You recieve a mail form our experts nearly`);
    window.location.href = "index.html";
    
    // Optionally, clear the form after submission
    document.getElementById('registration-form').reset();
  });
  