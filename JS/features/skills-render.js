function renderSkills() {
  const skillsContainer = document.getElementById("skills-container");

  if (!skillsContainer) {
    console.log("Skills container not found");
    return;
  }

  skillsContainer.innerHTML = "";

  skillsData.forEach((skill) => {

    // 🔷 Decent Professional Card
    const card = document.createElement("div");
    card.className =
      "w-full max-w-xs p-6 text-center rounded-2xl " +
      "bg-gradient-to-br from-slate-50 to-cyan-100 " +
      "border border-cyan-200 shadow-sm " +
      "hover:shadow-lg hover:-translate-y-1 " +
      "transition-all duration-300";

    // 🔷 Icon Box (Soft Aqua)
    const iconBox = document.createElement("div");
    iconBox.className =
      "w-14 h-14 mx-auto mb-4 " +
      "bg-cyan-500 text-white " +
      "rounded-xl flex items-center justify-center shadow";

    // 🔷 Icon Text
    const iconText = document.createElement("span");
    iconText.className = "text-lg font-bold";
    iconText.textContent = skill.shortLabel;

    iconBox.appendChild(iconText);

    // 🔷 Skill Name
    const skillName = document.createElement("h3");
    skillName.className = "text-lg font-semibold text-gray-800 mb-1";
    skillName.textContent = skill.name;

    // 🔷 Description
    const skillDescription = document.createElement("p");
    skillDescription.className = "text-sm text-gray-600 leading-relaxed";
    skillDescription.textContent = skill.description;

    // 🔷 Append Elements
    card.appendChild(iconBox);
    card.appendChild(skillName);
    card.appendChild(skillDescription);

    skillsContainer.appendChild(card);
  });

  console.log("Skills rendered successfully");
}

// Run
renderSkills();