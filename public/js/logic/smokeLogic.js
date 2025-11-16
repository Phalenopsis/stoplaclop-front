import { postSmoked } from "../api/smoked.js";
import { updateStatsUI } from "../ui/stats.js";
import { showError } from "../ui/errors.js";

export async function smokeOne() {
    showError();
    const response = await postSmoked();

    if (response.status === 429) {
        const err = await response.json();
        showError(err.error);
        return;
    }

    if (!response.ok) {
        showError("Erreur lors de l'ajout de la cigarette");
        return;
    }

    updateStatsUI(await response.json());
}
