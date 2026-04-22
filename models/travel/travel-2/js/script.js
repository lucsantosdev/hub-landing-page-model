
// Start of JavaScript Coding...

const container = document.querySelector(".container");
const navLinks = document.querySelectorAll(".nav-link");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

Array.from(navLinks).forEach((link) => {
  link.addEventListener("click", () => {
    container.classList.remove("change");
  });
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

// END of JavaScript Coding...
