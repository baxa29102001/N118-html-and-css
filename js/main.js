const burger_btn = document.querySelector("#burger_btn");
const cancel_btn = document.querySelector(".cancel_btn img");
const animationNavigation = document.querySelector(".animatedNavigation");

function showNav() {
  if (animationNavigation.classList.contains("active")) {
    animationNavigation.classList.remove("active");
    document.querySelector("html").style.overflow = "auto";
  } else {
    animationNavigation.classList.add("active");

    document.querySelector("html").style.overflow = "hidden";
  }
}

burger_btn.addEventListener("click", showNav);
cancel_btn.addEventListener("click", showNav);
