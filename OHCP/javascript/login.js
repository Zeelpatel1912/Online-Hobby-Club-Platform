document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validateEmail(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    if (validateEmail(email) && password.length >= 6) {
        alert("Login successful!");
        // Add logic for actual login submission here
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
