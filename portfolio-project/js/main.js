import { initBackToTop } from "./features/back-to-top.js";
document.addEventListener("DOMContentLoaded",function(){
    //Render renderSkills
    renderSkills();
    initModal();
    initContactValidation();
    initThemeToggle();
    filterProject();
    searchProject();
    initDeveloperStatus();
    initLanguageSwitch();
    initGithubStats();
    initContactAPI();
    initContactFirebase();
    initDynamicGreeting();
    initBackToTop();
})
