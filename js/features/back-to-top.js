export function initBackToTop() {
    const btn = document.getElementById("backToTopBtn");

    if (!btn) return;

    // Show / Hide Button
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btn.classList.remove("opacity-0", "pointer-events-none");
            btn.classList.add("opacity-100");
        } else {
            btn.classList.add("opacity-0", "pointer-events-none");
            btn.classList.remove("opacity-100");
        }
    });

    // Scroll to Top
    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent = Math.round((scrollTop / height) * 100);

    if (percent > 5) {
        btn.textContent = `${percent}%`;
    } else {
        btn.textContent = "↑";
    }
});