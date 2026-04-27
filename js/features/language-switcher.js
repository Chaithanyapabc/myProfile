function initLanguageSwitch() {
    const translations = {
        en: {
            projects: "My Projects",
            skills: "Skills"
        },
        hi: {
            projects: "मेरे प्रोजेक्ट्स",
            skills: "कौशल"
        }
    };

    let currentLang = "en";

    const button = document.createElement("button");
    button.textContent = "🌐";
    button.className = "fixed top-4 right-20 bg-gray-200 px-3 py-2 rounded";

    document.body.appendChild(button);

    button.addEventListener("click", function () {
        currentLang = currentLang === "en" ? "hi" : "en";

        document.querySelector("#projects h2").textContent =
            translations[currentLang].projects;

        document.querySelector("#skills h2").textContent =
            translations[currentLang].skills;
    });

    console.log("Language switch ready");
}