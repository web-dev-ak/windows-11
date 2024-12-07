import { updateTimeWithSeconds, updateTimeWithoutSeconds } from "./timeDate.js";

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
