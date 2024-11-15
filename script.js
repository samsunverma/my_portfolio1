
console.log("JavaScript is linked and loaded!");

const toggleButtons = document.querySelectorAll(".toggle-button");

toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
        
        const projectDetails = button.nextElementSibling;
        
        if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
            projectDetails.style.display = "block";
            button.textContent = "Hide Details";
        } else {
            projectDetails.style.display = "none";
            button.textContent = "Show Details";
        }
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("nameError").textContent = '';
    document.getElementById("emailError").textContent = '';
    document.getElementById("messageError").textContent = '';

    let isValid = true;

    let name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    let email = document.getElementById("email").value;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    let message = document.getElementById("message").value;
    if (message.trim() === "") {
        document.getElementById("messageError").textContent = "Message cannot be empty.";
        isValid = false;
    }

    if (isValid) {
        alert("Form successfully submitted!");
    }
});

const getLocationButton = document.getElementById('getLocation');
const locationDisplay = document.getElementById('locationDisplay');

getLocationButton.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        locationDisplay.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
      },
      (error) => {
        locationDisplay.textContent = "Location access denied.";
      }
    );
  } else {
    locationDisplay.textContent = "Geolocation is not supported by your browser.";
  }
});