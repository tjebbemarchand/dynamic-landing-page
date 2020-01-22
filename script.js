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

// Get name from localStorage.
function getName() {
    if (localStorage.getItem("landing-page-name") === null) {
        name.textContent = "[Enter name]";
    } else {
        name.textContent = localStorage.getItem("landing-page-name");
    }
}

// Set name in localStorage.
function setName(e) {
    if (e.type === "keypress") {
        // Check if enter is pressed.
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem("landing-page-name", e.target.innerText);
            name.blur();
        }
    } else {
        // Save to localStorage.
        localStorage.setItem("landing-page-name", e.target.innerText);
    }
}

// Get focus from localStorage.
function getFocus() {
    if (localStorage.getItem("landing-page-focus") === null) {
        focus.textContent = "[Enter focus]";
    } else {
        focus.textContent = localStorage.getItem("landing-page-focus");
    }
}

// Set focus in localStorage.
function setFocus(e) {
    if (e.type === "keypress") {
        // Check if enter is pressed.
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem("landing-page-focus", e.target.innerText);
            focus.blur();
        }
    } else {
        // Save to localStorage.
        localStorage.setItem("landing-page-focus", e.target.innerText);
    }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

showTime();
setBackgroundAndGreeting();
getName();
getFocus();
