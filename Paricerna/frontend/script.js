
const homeButton = document.getElementById('home-btn');
const signInButton = document.getElementById('signin-btn');
const medicineButton = document.querySelector('a[href="#medicine"]');
const emergencyButton = document.querySelector('a[href="#emergency"]');

const homeSection = document.getElementById('home-section');
const contentSection = document.getElementById('content-section');
const signInSection = document.getElementById('signin-section');

const medicineSection = document.createElement('section');
medicineSection.id = "medicine-section";
medicineSection.innerHTML = "<h2>Medicine Section</h2><p>Content related to emergencies.</p>";

const emergencySection = document.createElement('section');
emergencySection.id = "emergency-section";
emergencySection.innerHTML = "<h2>Emergency Section</h2><p>Content related to emergencies.</p>";

function showHomeSection() {
  homeSection.style.display = 'block'; // Show home section
  contentSection.style.display = 'block'; // Show content section
  signInSection.style.display = 'none'; // Hide sign-in section
  medicineSection.style.display = 'none'; // Hide medicine section
  emergencySection.style.display = 'none'; // Hide emergency section
}

function showSignInSection() {
  homeSection.style.display = 'none'; // Hide home section
  contentSection.style.display = 'none'; // Hide content section
  signInSection.style.display = 'block'; // Show sign-in section
  medicineSection.style.display = 'none'; // Hide medicine section
  emergencySection.style.display = 'none'; // Hide emergency section
}


function showMedicineSection() {
  homeSection.style.display = 'none'; // Hide home section
  contentSection.style.display = 'none'; // Hide content section
  signInSection.style.display = 'none'; // Hide sign-in section
  medicineSection.style.display = 'block'; // Show medicine section
  emergencySection.style.display = 'none'; // Hide emergency section
}


function showEmergencySection() {
  homeSection.style.display = 'none'; // Hide home section
  contentSection.style.display = 'none'; // Hide content section
  signInSection.style.display = 'none'; // Hide sign-in section
  medicineSection.style.display = 'none'; // Hide medicine section
  emergencySection.style.display = 'block'; // Show emergency section
}


homeButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default anchor behavior
  showHomeSection();
});

signInButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default button behavior
  showSignInSection();
});

medicineButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default anchor behavior
  showMedicineSection();
});

emergencyButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default anchor behavior
  showEmergencySection();
});


document.body.append(medicineSection);
document.body.append(emergencySection);
const doctorsSection = document.createElement('section');
doctorsSection.id = "doctors-section";
doctorsSection.innerHTML = `
  <h2>Doctors Directory</h2>
  <p>Find doctors near you:</p>
  <ul>
    <li>Dr. Smith (Cardiologist)</li>
    <li>Dr. Sharma (Orthopedic)</li>
    <li>Dr. Khan (General Practitioner)</li>
  </ul>
`;
document.body.append(doctorsSection);
function showDoctorsSection() {
    homeSection.style.display = 'none';
    contentSection.style.display = 'none';
    signInSection.style.display = 'none';
    medicineSection.style.display = 'none';
    emergencySection.style.display = 'none';
    doctorsSection.style.display = 'block';
  }
  
  const doctorsButton = document.querySelector('a[href="#doctors"]');
  doctorsButton.addEventListener('click', function (event) {
    event.preventDefault();
    showDoctorsSection();
  });
  


