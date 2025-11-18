// duration.js
export class Duration {
    constructor(from, to = new Date()) {
        this.from = from instanceof Date ? from : new Date(from);
        this.to = to instanceof Date ? to : new Date(to);

        const diffMs = this.to - this.from;
        const totalMinutes = Math.floor(diffMs / (1000 * 60));

        this.days = Math.floor(totalMinutes / (60 * 24));
        this.hours = Math.floor((totalMinutes % (60 * 24)) / 60);
        this.minutes = totalMinutes % 60;
    }

    isZero() {
        return this.days === 0 && this.hours === 0 && this.minutes === 0;
    }

    toString() {
        const parts = [];
        if (this.days > 0) parts.push(`${this.days} jour${this.days > 1 ? 's' : ''}`);
        if (this.hours > 0) parts.push(`${this.hours} heure${this.hours > 1 ? 's' : ''}`);
        if (this.minutes > 0) parts.push(`${this.minutes} minute${this.minutes > 1 ? 's' : ''}`);
        if (parts.length === 0) parts.push("moins d'une minute");
        return parts.join(' ');
    }
}
