const form = document.querySelector("form");

form.addEventListener("input", () => {
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  localStorage.setItem("contactData", JSON.stringify(data));
});

// Load on refresh
window.addEventListener("DOMContentLoaded", () => {
  const saved = JSON.parse(localStorage.getItem("contactData"));

  if (saved) {
    form.name.value = saved.name || "";
    form.email.value = saved.email || "";
    form.message.value = saved.message || "";
  }
});