import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDWuPgCsTIxWgEM09V3008SQ9D8zCa8AeQ",
    authDomain: "backend-315d3.firebaseapp.com",
    projectId: "backend-315d3",
    storageBucket: "backend-315d3.firebasestorage.app",
    messagingSenderId: "708539211462",
    appId: "1:708539211462:web:5e838a6f3dc86964c681c7",
    measurementId: "G-7VZD6FNTH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const message = document.getElementById("contact-message").value;

    try {
        await addDoc(collection(db, "contacts"), {
            name: name,
            email: email,
            message: message,
            createdAt: new Date()
        });

        alert("Message sent successfully ✅");
        form.reset();
    } catch (error) {
        console.error(error);
        alert("Error ❌");
    }
});