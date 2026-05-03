const container = document.getElementById("educationContainer");

function renderEducation() {
  container.innerHTML = "";

  educationData.forEach((edu) => {
    const div = document.createElement("div");
    div.classList.add("education-item");

    div.innerHTML = `
      <div class="education-degree">${edu.degree}</div>
      <div class="education-institute">${edu.institute}</div>
      <div class="education-year">${edu.year}</div>
      <div class="education-score">${edu.score}</div>
    `;

    container.appendChild(div);
  });
}

renderEducation();