const env = document.documentElement.dataset.env; // 'dev' ou 'prod'
let API_AUTH_URL, API_SMOKED_URL;

if (env === 'prod') {
    API_AUTH_URL = "https://api.stoplaclop.nicosworld.eu/auth";
    API_SMOKED_URL = "https://api.stoplaclop.nicosworld.eu/smoked";
} else {
    API_AUTH_URL = "http://localhost:8080/auth";
    API_SMOKED_URL = "http://localhost:8080/smoked";
}

export { API_AUTH_URL, API_SMOKED_URL };