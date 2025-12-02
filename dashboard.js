// Check if user is logged in
const userReg = sessionStorage.getItem("userReg");
if (!userReg) {
  window.location.href = "home.html";
} else {
  document.querySelector(".user-badge span").textContent = `Hello, ${userReg}`;
}

// HAMBURGER TOGGLE
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle?.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (
    sidebar.classList.contains("active") &&
    !sidebar.contains(event.target) &&
    event.target !== menuToggle
  ) {
    sidebar.classList.remove("active");
  }
});

// PAGE SWITCHING
const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
    const pageId = item.getAttribute("data-page");
    pages.forEach((p) => (p.id === pageId ? (p.style.display = "block") : (p.style.display = "none")));
    sidebar.classList.remove("active"); // close sidebar on mobile
  });
});

// TYPING ANIMATION
const typingText = document.getElementById("typingText");
const messages = [
  "Welcome to GoUnion",
  "The Global Student Connection Hub",
  "Find Friends • Join Groups • Explore Schools",
  "Your Journey Starts Here"
];

let msgIndex = 0, charIndex = 0;

function typeWriter() {
  if (!typingText) return;
  if (charIndex < messages[msgIndex].length) {
    typingText.textContent += messages[msgIndex][charIndex];
    charIndex++;
    setTimeout(typeWriter, 60);
  } else setTimeout(eraseWriter, 1500);
}

function eraseWriter() {
  if (!typingText) return;
  if (charIndex > 0) {
    typingText.textContent = messages[msgIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseWriter, 40);
  } else {
    msgIndex = (msgIndex + 1) % messages.length;
    setTimeout(typeWriter, 300);
  }
}
typeWriter();

// LOGOUT BUTTON
document.getElementById("logoutBtn")?.addEventListener("click", () => {
  alert("Logging out...");
   window.location.href = "login.html";
});
