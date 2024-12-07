setInterval(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    console.log(`${hours}:${minutes}:${seconds}`); // Update time
}, 1000); // Updates every second
