"use strict";
const toggler = document.querySelector(".toggler");
const navItem = document.querySelector(".nav-item-collapse");
let shown = false;
toggler.addEventListener("click", function () {
  if (!shown) {
    navItem.style.display = "block";
    console.log(2);
    shown = true;
  } else {
    navItem.style.display = "none";
    shown = false;
  }
});

const query = window.matchMedia("(min-width : 1199.98px)");

query.addListener(removeCollapsedNavItem);

function removeCollapsedNavItem(b) {
  if (b.matches) {
    navItem.style.display = "none";
  }
}
