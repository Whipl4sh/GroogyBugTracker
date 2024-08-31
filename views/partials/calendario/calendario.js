document.addEventListener("DOMContentLoaded", function() {
    const daysContainer = document.querySelector(".days");
    const currentMonth = 7; // Agosto (0 = Enero, 1 = Febrero, etc.)
    const currentYear = 2024;

    // Obtener el número de días en el mes
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Obtener el primer día del mes (0 = Domingo, 1 = Lunes, etc.)
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    // Comenzar a llenar días desde el primer Lunes
    let currentDay = (firstDayOfMonth === 0) ? 1 : 1 + (7 - firstDayOfMonth);

    while (currentDay <= daysInMonth) {
        for (let weekday = 1; weekday <= 5; weekday++) { // Lunes a Viernes
            if (currentDay <= daysInMonth) {
                const dayDiv = document.createElement("div");
                dayDiv.classList.add("day");
                dayDiv.textContent = currentDay;
                daysContainer.appendChild(dayDiv);
                currentDay++;
            }
        }
        currentDay += 2; // Saltar el fin de semana (Sábado y Domingo)
    }
});