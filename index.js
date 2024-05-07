function scrollBar() {
  const navbar = document.querySelector("nav");
  const NavUl = document.querySelector("nav ul");
  const scrollBar1 = window.scrollY;

  if (scrollBar1 > 250) {
    navbar.classList.add("navBG");
    navbar.style.transition = ".7s";
    NavUl.classList.add("navUlBG");
  } else {
    navbar.classList.remove("navBG");
    NavUl.classList.remove("navUlBG");
  }
}

window.addEventListener("scroll", scrollBar);

const bar = document.querySelector(".bar input");
const navUl = document.querySelector("nav ul");

bar.addEventListener("click", function () {
  navUl.classList.add("slide");
});

document.addEventListener("click", function (e) {
  if (!bar.contains(e.target) && !navUl.contains(e.target)) {
    navUl.classList.remove("slide");
  }
});
