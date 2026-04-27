function initGithubStats() {
    const username = "Chaithanyapabc";

    const container = document.getElementById("github-stats");
    const repoContainer = document.getElementById("github-repos");

    if (!container) return;

    // Loader UI
    container.innerHTML = "Loading GitHub data...";

    // Fetch user + repos in parallel
    Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    ])
        .then(async ([userRes, repoRes]) => {
            if (!userRes.ok || !repoRes.ok) {
                throw new Error("GitHub API failed");
            }

            const user = await userRes.json();
            const repos = await repoRes.json();

            // Render User Stats
            container.innerHTML = `
                <div class="flex gap-6 flex-wrap justify-center text-center">
                    <div>
                        <h3 class="text-xl font-bold">${user.public_repos}</h3>
                        <p>Repositories</p>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold">${user.followers}</h3>
                        <p>Followers</p>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold">${user.following}</h3>
                        <p>Following</p>
                    </div>
                </div>
            `;

            // 🔹 Render Top 5 Repositories
            if (repoContainer) {
                repoContainer.innerHTML = "";

                repos.slice(0, 5).forEach(repo => {
                    const card = document.createElement("div");

                    card.className = "border p-4 rounded shadow";

                    card.innerHTML = `
                        <h4 class="font-bold text-lg">${repo.name}</h4>
                        <p class="text-sm text-gray-600">
                            ${repo.description || "No description"}
                        </p>
                        <div class="flex justify-between mt-2 text-sm">
                            <span>⭐ ${repo.stargazers_count}</span>
                            <span>🍴 ${repo.forks_count}</span>
                        </div>
                        <a href="${repo.html_url}" target="_blank" class="text-blue-500 text-sm mt-2 inline-block">
                            View Repo →
                        </a>
                    `;

                    repoContainer.appendChild(card);
                });
            }
        })
        .catch(error => {
            console.error(error);

            container.innerHTML = `
                <p class="text-red-500 text-center">
                    Failed to load GitHub data
                </p>
            `;
        });
}