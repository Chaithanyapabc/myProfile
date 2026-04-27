function initContactAPI() {
    const form = document.getElementById("contact-form");
    const statusBox = document.getElementById("form-status");

    if (!form) return;

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const message = document.getElementById("contact-message").value.trim();

        // UI: Loading state
        statusBox.textContent = "Sending...";
        statusBox.className = "text-blue-500";

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            });

            if (!response.ok) {
                throw new Error("Failed request");
            }

            const data = await response.json();

            // SUCCESS UI
            statusBox.textContent = "Message sent successfully ✅";
            statusBox.className = "text-green-500";

            console.log("Server Response:", data);

            form.reset();

        } catch (error) {
            console.error(error);

            //  ERROR UI
            statusBox.textContent = "Failed to send message ❌";
            statusBox.className = "text-red-500";
        }
    });
}