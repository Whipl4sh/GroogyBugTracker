document.addEventListener("DOMContentLoaded", 
  
    function() {
      fetch('../../views/partials/Menu_lateral/menu_lateral.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('aside-container').innerHTML = data;
        });
      
    }
  );