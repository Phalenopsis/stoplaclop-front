import { API_SMOKED_URL } from "./env.js";
import { fetchWithAuth } from "./http.js";

export async function getSmokedStats() {
    return fetchWithAuth(API_SMOKED_URL);
}

export async function postSmoked() {
    return fetchWithAuth(API_SMOKED_URL, { method: "POST" });
}
