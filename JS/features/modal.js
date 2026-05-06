function initModal() {
    const modal = document.getElementById("contact-modal");
    const modalContent = document.getElementById("modal-content");
    const modalTrigger = document.getElementById("modal-trigger");
    const modalClose = document.getElementById("modal-close");
    const formCancel = document.getElementById("form-cancel");

    const form = document.getElementById("contact-form");
    const toast = document.getElementById("success-toast");
    const errorMsg = document.getElementById("form-message");

    if (!modal || !modalContent || !modalTrigger || !modalClose || !formCancel || !form) {
        console.log("❌ Modal elements not found");
        return;
    }

    // =========================
    // OPEN MODAL
    // =========================
    function openModal() {
        modal.classList.remove("hidden");

        setTimeout(() => {
            modalContent.classList.remove("scale-95", "opacity-0");
            modalContent.classList.add("scale-100", "opacity-100");
        }, 10);
    }

    // =========================
    // CLOSE MODAL
    // =========================
    function closeModal() {
        modalContent.classList.remove("scale-100", "opacity-100");
        modalContent.classList.add("scale-95", "opacity-0");

        setTimeout(() => {
            modal.classList.add("hidden");
        }, 200);
    }

    // =========================
    // EVENT LISTENERS
    // =========================
    modalTrigger.addEventListener("click", openModal);
    modalClose.addEventListener("click", closeModal);
    formCancel.addEventListener("click", closeModal);

    // CLOSE ON BACKDROP CLICK
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // =========================
    // FORM SUBMISSION
    // =========================
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const message = document.getElementById("contact-message").value.trim();

        // VALIDATION
        if (!name || !email || !message) {
            errorMsg.textContent = "All fields are required";
            return;
        }

        if (!email.includes("@")) {
            errorMsg.textContent = "Enter valid email";
            return;
        }

        // CLEAR ERROR
        errorMsg.textContent = "";

        // SUCCESS FLOW
        form.reset();
        closeModal();

        if (toast) {
            toast.classList.remove("hidden");

            setTimeout(() => {
                toast.classList.add("hidden");
            }, 3000);
        }
    });

    console.log("✅ Modal initialized successfully");
}