import { API_AUTH_URL } from "./env.js";
import { fetchWithAuth } from "./http.js";

export async function register(email, password) {
    return fetch(`${API_AUTH_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });
}

export async function login(email, password) {
    return fetch(`${API_AUTH_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });
}

export async function logout() {
    return fetchWithAuth(`${API_AUTH_URL}/logout`, {
        method: "POST"
    });
}
