function renderSkills() {
  const skillsContainer = document.getElementById("skills-container");

  if (!skillsContainer) {
    console.log("Skills container not found");
    return;
  }

  // 🔷 Clear previous content
  skillsContainer.innerHTML = "";

  skillsData.forEach((skill) => {

    // 🔷 CARD
    const card = document.createElement("div");
    card.className =
      "group w-full max-w-xs p-6 text-center rounded-2xl " +
      "border border-white/10 shadow-md " +
      "hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] " +
      "transition-all duration-300";

    // Premium dark background
    card.style.backgroundColor = "rgb(24, 17, 43)";

    // 🔷 ICON BOX (Dynamic: white or black)
    const iconBox = document.createElement("div");
    iconBox.className =
      `w-14 h-14 mx-auto mb-4 ${skill.boxColor || "bg-white text-black"} ` +
      "rounded-xl flex items-center justify-center shadow-lg " +
      "transition-transform duration-300 group-hover:rotate-6";

    // 🔷 ICON
    const icon = document.createElement("i");
    icon.className = `${skill.icon} text-2xl`;

    iconBox.appendChild(icon);

    // 🔷 SKILL NAME
    const skillName = document.createElement("h3");
    skillName.className =
      "text-lg font-semibold text-white mb-1 tracking-wide";
    skillName.textContent = skill.name;

    // 🔷 DESCRIPTION
    const skillDescription = document.createElement("p");
    skillDescription.className =
      "text-sm text-gray-400 leading-relaxed";
    skillDescription.textContent = skill.description;

    // 🔷 APPEND ELEMENTS
    card.appendChild(iconBox);
    card.appendChild(skillName);
    card.appendChild(skillDescription);

    skillsContainer.appendChild(card);
  });

  console.log("✅ Skills rendered successfully");
}

// 🚀 RUN
renderSkills();