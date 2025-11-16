import { getToken } from "../state/session.js";

export async function fetchWithAuth(url, options = {}) {
    const token = getToken();

    const headers = {
        "Content-Type": "application/json",
        ...(options.headers || {}),
        ...(token ? { "Authorization": "Bearer " + token } : {})
    };

    return fetch(url, { ...options, headers });
}
