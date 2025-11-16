import { login, register, logout } from "../logic/authLogic.js";
import { smokeOne } from "../logic/smokeLogic.js";

export function initEvents() {

    document.getElementById("loginForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        login();
        document.getElementById("loginDialog").close();
    });

    document.getElementById("registerForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        register();
        document.getElementById("registerDialog").close();
    });

    document.getElementById("logoutButton").onclick = logout;
    document.getElementById("addSmokedBtn").onclick = smokeOne;
}
