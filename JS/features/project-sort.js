const sortSelect = document.getElementById("sortProjects");

sortSelect.addEventListener("change", () => {
  let sorted = [...projectsData];

  if (sortSelect.value === "az") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortSelect.value === "status") {
    sorted.sort((a, b) => a.status.localeCompare(b.status));
  }

  renderProjects(sorted);
});