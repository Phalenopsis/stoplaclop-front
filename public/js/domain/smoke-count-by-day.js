export class SmokedCountByDay {
    constructor(day, count) {
        this.day = new Date(day);
        this.count = count;
    }

    formatted() {
        return `${this.day.toLocaleDateString()} — ${this.count}`;
    }
}
