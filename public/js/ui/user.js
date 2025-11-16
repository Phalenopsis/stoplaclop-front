export function displayUser(user) {
    document.getElementById("user").textContent = user;

    document.getElementById("app").classList.remove("no-display");
    document.getElementById("logoutButton").classList.remove("no-display");
    document.getElementById("showLoginDialog").classList.add("no-display");
    document.getElementById("showRegisterDialog").classList.add("no-display");
}

export function hideUser() {
    document.getElementById("user").textContent = "";

    document.getElementById("app").classList.add("no-display");
    document.getElementById("logoutButton").classList.add("no-display");
    document.getElementById("showLoginDialog").classList.remove("no-display");
    document.getElementById("showRegisterDialog").classList.remove("no-display");
}
