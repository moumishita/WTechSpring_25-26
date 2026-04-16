const usernameInput = document.getElementById("FirstName");

// Function to convert text to uppercase
function convertToUpper() {
    usernameInput.value = usernameInput.value.toUpperCase();
}

// Add event listener for typing
usernameInput.addEventListener("input", convertToUpper);