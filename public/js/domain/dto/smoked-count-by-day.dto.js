export class SmokedCountByDay {
    constructor({ day, count }) {
        this.day = day ? new Date(day) : null;
        this.count = count ?? 0;
    }

    formatted() {
        if (!this.day) return `Unknown date: ${this.count} cigarettes`;

        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const dayStr = this.day.toLocaleDateString(undefined, options);
        return `${dayStr}: ${this.count} cigarettes`;
    }
}