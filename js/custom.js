var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".top-panel__toggle");

navMain.classList.remove("main-nav--nojs");
navMain.classList.add("main-nav--closed");
navToggle.classList.remove("top-panel__toggle--nojs");
navToggle.classList.remove("top-panel__toggle--open");
navToggle.classList.add("top-panel__toggle--closed");

navToggle.addEventListener('click', function(event) {
  event.preventDefault();
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navToggle.classList.remove("top-panel__toggle--closed");
    navMain.classList.add("main-nav--opened");
    navToggle.classList.add("top-panel__toggle--open");
  }
  else {
    navMain.classList.add("main-nav--closed");
    navToggle.classList.remove("top-panel__toggle--open");
    navToggle.classList.add("top-panel__toggle--closed");
  }
});