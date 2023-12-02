const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const badge = document.querySelector(".badge");
const modalClose = document.querySelector(".close-btn");

const SHOW_CLASS = "show";
const HIDE_CLASS = "hide";

badge.addEventListener('click', () => {
    overlay.classList.remove("hide");
    overlay.classList.add("show");
  })

modalClose.addEventListener('click', () => {
    overlay.classList.remove("show");
  })
