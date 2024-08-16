const toggleNav = () =>
  document.querySelector(".nav-links").classList.toggle("expanded");
const closeNav = () =>
  document.querySelector(".nav-links").classList.remove("expanded");

document.querySelector(".hamburger").addEventListener("click", () => {
  toggleNav();
});

/** close nav menu upon click */
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    closeNav();
  });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-60px";
    closeNav();
  }
  prevScrollpos = currentScrollPos;
};
