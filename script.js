// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger-menu diklik
const hamburgerMenu = document.querySelector("#hamburger-menu");
hamburgerMenu.addEventListener("click", function () {
  navbarNav.classList.toggle("active");
});

// click diluar sidebar untuk menghilangkan menu
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
