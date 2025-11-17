import { UserSmoked } from '../domain/user-smoked.js';

export function updateStatsUI(data) {
    const userStats = new UserSmoked(data);

    document.getElementById("smokedToday").textContent = userStats.smokedToday;
    document.getElementById("totalSmoked").textContent = userStats.totalSmoked;

    const list = document.getElementById("smokedLastWeek");
    list.innerHTML = "";
    userStats.smokedLastWeek.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = entry.formatted();
        list.appendChild(li);
    });

    document.getElementById("lastSmokedRecorded").textContent = userStats.lastSmokedFormatted();
}
