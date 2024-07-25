document.addEventListener("DOMContentLoaded", 
  
  function() {
    fetch('../../views/header/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-container').innerHTML = data;
      });
  });