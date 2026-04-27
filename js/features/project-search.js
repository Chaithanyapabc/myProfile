function searchProject() {
    const searchInput = document.getElementById("project-search");

    if (!searchInput) {
        console.log("Search input not found");
        return;
    }

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();

        const filteredProjects = projectsData.filter(function (project) {
            return (
                project.name.toLowerCase().includes(query) ||
                project.category.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query)
            );
        });

        renderFilteredProjects(filteredProjects);
    });
}

// reusable renderer (important for clean architecture)
function renderFilteredProjects(data) {
    const projectsContainer = document.getElementById("projects-container");

    projectsContainer.innerHTML = "";

    data.forEach(function (project) {
        const card = document.createElement("div");
        card.className = "relative p-8 text-center bg-white rounded-3xl shadow-lg";

        card.innerHTML = `
            <h2 class="text-xl font-bold mb-2">${project.name}</h2>
            <h5 class="text-blue-800 mb-2">${project.category}</h5>
            <p class="text-sm mb-2">${project.description}</p>
            <span class="text-green-600">${project.technologies.join(", ")}</span>
            <div class="absolute top-2 right-2 bg-red-500 text-white text-sm rounded px-2 py-1">${project.status}</div>
        `;

        projectsContainer.appendChild(card);
    });
}