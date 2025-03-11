let isLoginMode = false;

function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    hidecontent();
}
function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    hidecontent1();
}
function hidecontent() {
    document.getElementById("about").style.display = "none";
}
function hidecontent1() {
    document.getElementById("contact").style.display = "none";
}
function hideLogin() {
    document.getElementById("loginForm").style.display = "none";
}

function toggleLoginMode() {
    isLoginMode = !isLoginMode;
    document.getElementById("formTitle").innerText = isLoginMode ? "Login" : "Register";
    document.getElementById("email").style.display = isLoginMode ? "none" : "block";
    document.getElementById("toggleForm").innerText = isLoginMode ? "Don't have an account? Register" : "Already have an account? Login";
}

function handleFormSubmit() {
    alert("Form submitted successfully!");
    hideLogin();
}

function showContent(section) {
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById(section).style.display = "block";
    hideLogin();
}