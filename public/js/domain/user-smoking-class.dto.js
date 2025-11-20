import { FinancialStats } from "./dto/financial-stats.dto.js";
import { SmokingStats } from "./dto/smoking-stats.dto.js";

export class UserSmokingStats {
    constructor({ financial, stats }) {
        this.financial = financial ? new FinancialStats(financial) : null;
        this.stats = stats ? new SmokingStats(stats) : null;
    }

    displayFinancialStats() {
        document.getElementById("burnedMoney").textContent = this.financial.displayBurnedMoney();
        document.getElementById("savedMoney").textContent = this.financial.displaySavedMoney();
        document.getElementById("savedMoneyToday").textContent = this.financial.displaySavedMoneyToday();
    }

    displayStats() {
        document.getElementById("smokedToday").textContent = this.stats.smokedToday;
        document.getElementById("minutesSinceLastSmoked").textContent = this.stats.displayMinutesSinceLastSmoked();
        this.stats.displaySmokedLastWeek();
    }
}
