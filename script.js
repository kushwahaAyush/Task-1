const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function toggleMenu() {
  const navList = document.getElementById("nav-list");
  navList.classList.toggle("active");
}
