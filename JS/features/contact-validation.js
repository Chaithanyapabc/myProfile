function initContactValidation() {
  const contactForm = document.getElementById("contact-form");
  const contactName = document.getElementById("contact-name");
  const contactEmail = document.getElementById("contact-email");
  const contactMessage = document.getElementById("contact-message");
  const formMessage = document.getElementById("form-message");

  if (!contactForm || !contactName || !contactEmail || !contactMessage || !formMessage) {
    console.log("Contact form elements not found");
    return;
  }

  // 🔷 Utility: Set message
  function setMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = "text-sm";

    if (type === "error") {
      formMessage.classList.add("text-red-500");
    } else if (type === "success") {
      formMessage.classList.add("text-green-500");
    }
  }

  // 🔷 Validation Functions
  function validateName(name) {
    if (!name) return "Name is required";
    if (name.length < 3) return "Name must be at least 3 characters";
    return "";
  }

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!pattern.test(email)) return "Enter a valid email";
    return "";
  }

  function validateMessage(msg) {
    if (!msg) return "Message is required";
    if (msg.length < 10) return "Message must be at least 10 characters";
    return "";
  }

  // 🔷 Submit Handler
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactName.value.trim();
    const email = contactEmail.value.trim();
    const message = contactMessage.value.trim();

    const nameError = validateName(name);
    if (nameError) {
      setMessage(nameError, "error");
      contactName.focus();
      return;
    }

    const emailError = validateEmail(email);
    if (emailError) {
      setMessage(emailError, "error");
      contactEmail.focus();
      return;
    }

    const messageError = validateMessage(message);
    if (messageError) {
      setMessage(messageError, "error");
      contactMessage.focus();
      return;
    }

    // ✅ Success
    setMessage("Message submitted successfully 🚀", "success");

    console.log("Valid Data:", { name, email, message });

    contactForm.reset();
  });

  // 🔷 Real-time clearing
  [contactName, contactEmail, contactMessage].forEach((input) => {
    input.addEventListener("input", () => {
      formMessage.textContent = "";
    });
  });
}