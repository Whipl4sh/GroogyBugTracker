document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch('../views/partials/Menu_lateral/menu_lateral.html');
    const data = await response.text();
    document.getElementById('aside-container').innerHTML = data;

    
    if (typeof iniciarMenuLateral === "function") {
      iniciarMenuLateral();
    }
  } catch (error) {
    console.error("Error al cargar el menú lateral:", error);
  }
});