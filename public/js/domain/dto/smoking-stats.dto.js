import { SmokedCountByDay } from './smoked-count-by-day.dto.js';

export class SmokingStats {
    constructor({ smokedToday, smokedLastWeek, minutesSinceLastSmoked }) {
        this.smokedToday = smokedToday ?? 0;

        this.smokedLastWeek = Array.isArray(smokedLastWeek)
            ? smokedLastWeek.map(item => new SmokedCountByDay(item))
            : [];

        this.minutesSinceLastSmoked = minutesSinceLastSmoked ?? null;
    }

    displayMinutesSinceLastSmoked() {
        const m = this.minutesSinceLastSmoked;

        if (m === null || m < 0) {
            return "Aucune cigarette fumée récemment";
        }

        if (m === 0) {
            return "Dernière cigarette fumée à l'instant";
        }

        const hours = Math.floor(m / 60);
        const minutes = m % 60;

        const parts = [];

        if (hours > 0) {
            parts.push(`${hours} ${hours > 1 ? "heures" : "heure"}`);
        }

        if (minutes > 0) {
            parts.push(`${minutes} ${minutes > 1 ? "minutes" : "minute"}`);
        }

        return `Dernière cigarette fumée il y a ${parts.join(" et ")}`;
    }


    displaySmokedLastWeek() {
        const list = document.getElementById("smokedLastWeek");
        list.innerHTML = "";
        this.smokedLastWeek.forEach(entry => {
            const li = document.createElement("li");
            li.textContent = entry.formatted();
            list.appendChild(li);
        });
    }
}