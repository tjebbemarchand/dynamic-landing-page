const time = document.querySelector("#time");
const greeting = document.querySelector("#greeting");
const name = document.querySelector("#name");
const focus = document.querySelector("#focus");

// Show time.
function showTime() {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    // Set AM or PM.
    const amPm = hour >= 12 ? "PM" : "AM";

    // 12hr format.
    hour = hour % 12 || 12;

    // Output time.
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

// Add 0.
function addZero(number) {
    return (parseInt(number, 10) < 10 ? "0" : "") + number;
}

showTime();
