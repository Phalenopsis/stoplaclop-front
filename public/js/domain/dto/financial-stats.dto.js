export class FinancialStats {
    constructor({ burnedMoney, savedMoney, savedMoneyToday }) {
        this.burnedMoney = burnedMoney ?? 0;
        this.savedMoney = savedMoney ?? 0;
        this.savedMoneyToday = savedMoneyToday ?? 0;
    }

    displayBurnedMoney() {
        return this.burnedMoney.toFixed(2);
    }

    displaySavedMoney() {
        return this.savedMoney.toFixed(2);
    }

    displaySavedMoneyToday() {
        return this.savedMoneyToday.toFixed(2);
    }
}