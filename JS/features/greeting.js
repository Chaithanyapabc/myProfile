// greeting.js

function getGreetingMessage() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning ☀️";
  if (hour < 18) return "Good Afternoon 🌤️";
  return "Good Evening 🌙";
}

function renderGreeting() {
  const greetingElement = document.getElementById("greeting");

  // Defensive check (avoids runtime errors)
  if (!greetingElement) return;

  greetingElement.textContent = getGreetingMessage();
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", renderGreeting);