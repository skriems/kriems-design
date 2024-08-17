const closeNav = () =>
  (document.querySelector("#toggle-checkbox").checked = false);

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
    document.getElementById("header").style.top = "-10px";
  } else if (window.pageYOffset > 100) {
    closeNav();
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
