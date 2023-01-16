const navItemDropDownList = document.querySelectorAll(".nav-item-dropdown");
const navToggleOpen = document.querySelector(".navbar-toggler-open");
const navToggleClose = document.querySelector(".navbar-toggler-close");
const navbarCollapseDiv = document.querySelector(".navbar-collapse");

navItemDropDownList.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navItem.nextElementSibling.classList.toggle("show-dropdown");

    if (navItem.firstElementChild.className === "fas fa-chevron-down") {
      navItem.firstElementChild.className = "fas fa-chevron-up";
    } else {
      navItem.firstElementChild.className = "fas fa-chevron-down";
    }
  });
});

navToggleOpen.addEventListener("click", () => {
  navbarCollapseDiv.classList.add("show-navbar")
})

navToggleClose.addEventListener("click", () => {
  navbarCollapseDiv.classList.remove("show-navbar")
})

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
})
