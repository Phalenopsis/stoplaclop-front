export function initDialogs() {
    const loginDialog = document.getElementById("loginDialog");
    const registerDialog = document.getElementById("registerDialog");

    document.getElementById("showLoginDialog").onclick = () => loginDialog.showModal();
    document.getElementById("cancelLogin").onclick = () => loginDialog.close();

    document.getElementById("showRegisterDialog").onclick = () => registerDialog.showModal();
    document.getElementById("cancelRegister").onclick = () => registerDialog.close();
}
