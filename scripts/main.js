import { updateTimeWithSeconds, updateTimeWithoutSeconds, } from "./timeDate.js";
import { getDateInDDMMYYYY, getDateInLongFormat } from "./timeDate.js";

function updateTaskbarTime() {
    const timeTaskBar = document.getElementById('sys-info-time');
    timeTaskBar.textContent = updateTimeWithSeconds(); // Get the current time with seconds
}

function updateDesktopTime() {
    const timeDesktop = document.getElementById('desktop-time');
    timeDesktop.textContent = updateTimeWithoutSeconds(); // Get the current time without seconds
}

setInterval(() => {
    updateTaskbarTime();
    updateDesktopTime();
}, 1000);

updateTaskbarTime();
updateDesktopTime();


const shortDateElement = document.getElementById('sys-info-date');
const longDateElement = document.getElementById('desktop-date');

// Example usage
shortDateElement.textContent = getDateInDDMMYYYY(); // Outputs: 07-12-2024
longDateElement.textContent = getDateInLongFormat(); // Outputs: Saturday, 7 December