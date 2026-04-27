function initDeveloperStatus() {
    const statsContainer = document.querySelector(".flex.flex-wrap");

    if (!statsContainer) {
        console.log("Stats container not found");
        return;
    }

    const statsData = [
        { label: "Github commits", value: 98 },
        { label: "LeetCode Questions Solved", value: 100 },
        { label: "Live projects completed", value: 5 }
    ];

    statsContainer.innerHTML = "";

    statsData.forEach(function (stat) {
        const span = document.createElement("span");
        span.textContent = `${stat.value} ${stat.label}`;
        statsContainer.appendChild(span);
    });

    console.log("Developer stats loaded");
}