export function showError(message = "") {
    const errorBox = document.getElementById("errorBox");
    if (!errorBox) return alert(message); // fallback

    errorBox.textContent = message;
    errorBox.classList.add("visible");

    setTimeout(() => errorBox.classList.remove("visible"), 3500);
}
