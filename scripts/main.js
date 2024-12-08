// LIVE TIME AND DATE
import { updateTimeWithSeconds, updateTimeWithoutSeconds, } from "./timeDate.js";
import { getDateInDDMMYYYY, getDateInLongFormat } from "./timeDate.js";

function updateTaskbarTime() {
    const timeTaskBar = document.getElementById('sys-info-time');
    timeTaskBar.textContent = updateTimeWithSeconds();
}

function updateDesktopTime() {
    const timeDesktop = document.getElementById('desktop-time');
    timeDesktop.textContent = updateTimeWithoutSeconds();
}

setInterval(() => {
    updateTaskbarTime();
    updateDesktopTime();
}, 1000);

updateTaskbarTime();
updateDesktopTime();

const shortDateElement = document.getElementById('sys-info-date');
const longDateElement = document.getElementById('desktop-date');

shortDateElement.textContent = getDateInDDMMYYYY();
longDateElement.textContent = getDateInLongFormat();