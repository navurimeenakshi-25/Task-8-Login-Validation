function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let error = document.getElementById("loginError");

    if (user === "" || pass === "") {
        error.innerText = "All fields are required";
    } else {
        alert("Login successful");
    }
}

function resetPassword() {
    let newPass = document.getElementById("newPassword").value;
    let confirmPass = document.getElementById("confirmPassword").value;
    let error = document.getElementById("errorMsg");

    if (newPass !== confirmPass) {
        error.innerText = "Passwords do not match";
    } else {
        alert("Password reset successful");
        window.location.href = "login.html";
    }
}
