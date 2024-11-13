function filterDoctors() {
    const searchInput = document.getElementById("search-box").value.toLowerCase();
    const doctors = document.querySelectorAll("#doctors li");
  
    doctors.forEach((doctor) => {
      const name = doctor.getAttribute("data-name").toLowerCase();
      if (name.includes(searchInput)) {
        doctor.style.display = "block";
      } else {
        doctor.style.display = "none";
      }
    });
  }
  