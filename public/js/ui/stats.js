import { UserSmokingStats } from '../domain/user-smoking-class.dto.js';

export function updateStatsUI(data) {
    console.log("Updating stats UI with data:", data);
    const userStats = new UserSmokingStats(data);

    userStats.displayFinancialStats();
    userStats.stats.displaySmokedLastWeek();
    userStats.displayStats();
}
