// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika humburger menu di klik
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar untuk menghilangkan nav
const humburger = document.querySelector("#humburger-menu");

document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
