import { login as apiLogin, register as apiRegister, logout as apiLogout } from "../api/auth.js";
import { setSession, clearSession } from "../state/session.js";
import { displayUser, hideUser } from "../ui/user.js";
import { getSmokedStats } from "../api/smoked.js";
import { updateStatsUI } from "../ui/stats.js";
import { showError } from "../ui/errors.js";

export async function login(argEmail = null, argPassword = null) {
    const form = document.getElementById("loginForm");
    let email = form.loginEmail.value;
    let password = form.loginPassword.value;

    if (argEmail !== null && argPassword != null) {
        email = argEmail;
        password = argPassword;
    }
    try {
        const response = await apiLogin(email, password);

        const data = await response.json();
        if (response.ok) {
            setSession(data.accessToken, data.user);
            showError();

            displayUser(data.user);

            const statsResponse = await getSmokedStats();
            updateStatsUI(await statsResponse.json());
            return true;
        }

        showError(data.error);
    } catch {
        showError("Une erreur inattendue est survenue")
    }




    return false;

}

export async function register() {
    const form = document.getElementById("registerForm");
    const email = form.registerEmail.value;
    const password = form.registerPassword.value;

    try {
        const response = await apiRegister(email, password);

        if (response.ok) {
            return login(email, password);
        } else {
            const error = await response.json();
            showError(error.error);
        }
    } catch {
        showError("Une erreur inattendue est survenue")
    }

    return false;
}

export async function logout() {
    await apiLogout();
    clearSession();
    hideUser();
    showError();
}
