export function updateStatsUI(data) {
    document.getElementById("smokedToday").textContent = data.smokedToday;
    document.getElementById("totalSmoked").textContent = data.totalSmoked;

    const list = document.getElementById("smokedLastWeek");
    list.innerHTML = "";

    data.smokedLastWeek.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = `${entry.day} — ${entry.count}`;
        list.appendChild(li);
    });

    if (data.firstSmokedRecorded) {
        document.getElementById("firstSmokedRecorded").textContent =
            `Première cigarette enregistrée le : ${data.firstSmokedRecorded}`;
    } else {
        document.getElementById("firstSmokedRecorded").textContent = "Aucune cigarette enregistrée.";
    }
}
