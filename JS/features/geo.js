// geo.js

const locationElement = document.getElementById("locationMsg");

// Utility: safe DOM update
function updateLocationMessage(message) {
  if (!locationElement) return;
  locationElement.textContent = message;
}

// Reverse geocoding (lat → city)
async function getCityFromCoords(lat, lon) {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    );

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();

    const address = data.address || {};
    return (
      address.city ||
      address.town ||
      address.village ||
      address.state ||
      "your area"
    );
  } catch (error) {
    return null;
  }
}

// Main logic
function initGeolocation() {
  if (!navigator.geolocation) {
    updateLocationMessage("Geolocation not supported");
    return;
  }

  updateLocationMessage("Detecting your location...");

  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const { latitude, longitude } = pos.coords;

      const city = await getCityFromCoords(latitude, longitude);

      if (city) {
        updateLocationMessage(`Browsing from ${city} 📍`);
      } else {
        updateLocationMessage("Location detected 📍");
      }
    },
    (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          updateLocationMessage("Location permission denied ❌");
          break;
        case error.POSITION_UNAVAILABLE:
          updateLocationMessage("Location unavailable");
          break;
        case error.TIMEOUT:
          updateLocationMessage("Location request timed out");
          break;
        default:
          updateLocationMessage("Unable to fetch location");
      }
    }
  );
}

// Init on DOM load
document.addEventListener("DOMContentLoaded", initGeolocation);