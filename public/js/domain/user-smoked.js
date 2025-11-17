import { SmokedCountByDay } from './smoke-count-by-day.js';
import { Duration } from './duration.js';

export class UserSmoked {
    constructor(data) {
        this.smokedToday = data.smokedToday;
        this.totalSmoked = data.totalSmoked;
        this.firstSmokedRecorded = data.firstSmokedRecorded ? new Date(data.firstSmokedRecorded) : null;
        this.lastSmokedRecorded = data.lastSmokedRecorded ? new Date(data.lastSmokedRecorded) : null;

        this.smokedLastWeek = (data.smokedLastWeek || []).map(
            entry => new SmokedCountByDay(entry.day, entry.count)
        );
    }

    hasSmokedToday() {
        return this.smokedToday > 0;
    }

    lastSmokedFormatted() {
        if (!this.lastSmokedRecorded) return "Aucune cigarette enregistrée.";
        const duration = new Duration(this.lastSmokedRecorded);
        return `Dernière cigarette fumée il y a ${duration.toString()}`;
    }
}
