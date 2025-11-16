let accessToken = null;
let user = null;

export function setSession(token, userData) {
    accessToken = token;
    user = userData;
}

export function clearSession() {
    accessToken = null;
    user = null;
}

export function getToken() {
    return accessToken;
}

export function getUser() {
    return user;
}
