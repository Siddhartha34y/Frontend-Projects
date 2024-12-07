document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulated user data (for demonstration purposes)
    const users = {
        admin: "admin123",
        operator: "operator123"
    };

    // Check if the username exists and password matches
    if (users[username] && users[username] === password) {
        alert(`Welcome ${username}!`);
        // Redirect or handle login for different user roles
        if (username === "admin") {
            window.location.href = "admin_dashboard.html"; // Redirect to Admin Dashboard
        } else if (username === "operator") {
            window.location.href = "operator_dashboard.html"; // Redirect to Operator Dashboard
        }
    } else {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.style.display = "block";
        errorMessage.textContent = "Invalid username or password!";
    }
});
