// =============================================
// Arpith Thomas Portfolio - script.js
// Firebase Realtime Database Contact Form
// Part of: Local Git → GitHub → CI/CD → Hosting Workflow
// =============================================

// Import Firebase modules (v10 CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// ── Firebase Configuration ──────────────────
const firebaseConfig = {
  apiKey: "AIzaSyAu5CPL7FOvdPmeYYpvDVbnUIJs_n6F9nI",
  authDomain: "my-portfolio-c75b2.firebaseapp.com",
  databaseURL: "https://my-portfolio-c75b2-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-c75b2",
  storageBucket: "my-portfolio-c75b2.firebasestorage.app",
  messagingSenderId: "696445528714",
  appId: "1:696445528714:web:e4d2c5ddb0fab0e3379b73"
};

// ── Initialize Firebase ──────────────────────
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// ── Utility: Validate Email ──────────────────
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ── Utility: Sanitize Input ──────────────────
function sanitize(str) {
  return str.trim().replace(/[<>]/g, "");
}

// ── Contact Form Handler ─────────────────────
const contactForm = document.getElementById("contactForm");
const submitBtn   = document.getElementById("submitBtn");
const btnText     = document.getElementById("btnText");
const formStatus  = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name    = sanitize(document.getElementById("name").value);
    const email   = sanitize(document.getElementById("email").value);
    const message = sanitize(document.getElementById("message").value);

    // ── Client-side Validation ───────────────
    if (!name || name.length < 2) {
      showStatus("Please enter your name.", "error");
      return;
    }
    if (!isValidEmail(email)) {
      showStatus("Please enter a valid email address.", "error");
      return;
    }
    if (!message || message.length < 10) {
      showStatus("Message must be at least 10 characters.", "error");
      return;
    }

    // ── Disable button while sending ────────
    submitBtn.disabled = true;
    btnText.textContent = "Sending...";
    showStatus("", "");

    try {
      // ── Push to Firebase Realtime Database ──
      await push(ref(database, "messages"), {
        name,
        email,
        message,
        timestamp: new Date().toISOString()
      });

      showStatus("✅ Message sent successfully! I'll get back to you soon.", "success");
      contactForm.reset();

    } catch (error) {
      console.error("Firebase error:", error);
      showStatus("❌ Error sending message. Please try again.", "error");

    } finally {
      submitBtn.disabled = false;
      btnText.textContent = "Send Message";
    }
  });
}

// ── Show Status Message ──────────────────────
function showStatus(msg, type) {
  if (!formStatus) return;
  formStatus.textContent = msg;
  formStatus.className = "form-status " + (type === "error" ? "error" : "");
}

// ── Smooth Nav Active State ──────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks  = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinks.forEach(link => {
        link.style.color = link.getAttribute("href") === `#${id}`
          ? "var(--accent)"
          : "";
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

// ── Scroll Reveal for Sections ───────────────
const revealEls = document.querySelectorAll(
  ".skill-card, .project-card, .wf-step, .about-card, .stat"
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  revealObserver.observe(el);
});
