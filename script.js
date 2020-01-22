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

    // Call showTime every second.
    setTimeout(showTime, 1000);
}

// Add 0.
function addZero(number) {
    return (parseInt(number, 10) < 10 ? "0" : "") + number;
}

// Set background and greeting.
function setBackgroundAndGreeting() {
    let now = new Date();
    let hour = now.getHours();

    if (hour < 12) {
        // Morning.
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        greeting.textContent = "Good Morning";
    } else if (hour < 18) {
        // Afternoon.
        document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
        greeting.textContent = "Good Afternoon";
    } else {
        // Evening.
        document.body.style.backgroundImage = "url('./img/evening.jpg')";
        greeting.textContent = "Good Afternoon";
        document.body.style.color = "white";
    }
}

// Get name.
function getName() {
    const localStorageName = localStorage.getItem("landing-page-name");
    if (localStorageName === null) {
        name.textContent = "[Enter name]";
    } else {
        name.textContent = name;
    }
}

// Get focus.
function getFocus() {
    const localStorageFocus = localStorage.getItem("landing-page-focus");
    if (localStorageFocus === null) {
        focus.textContent = "[Enter focus]";
    } else {
        focus.textContent = name;
    }
}

showTime();
setBackgroundAndGreeting();
getName();
getFocus();
