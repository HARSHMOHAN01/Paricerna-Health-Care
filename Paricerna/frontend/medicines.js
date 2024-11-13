function filterMedicines() {
    const searchBox = document.getElementById('search-box').value.toLowerCase();
    const medicines = document.querySelectorAll('#medicines li');
  
    medicines.forEach(medicine => {
      const name = medicine.getAttribute('data-name').toLowerCase();
      if (name.includes(searchBox)) {
        medicine.style.display = '';
      } else {
        medicine.style.display = 'none';
      }
    });
  }
  