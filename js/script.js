const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".badge");
const modalClose = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
const nav = document.querySelector(".main-nav");


const hasClass = (element, className) => element.classList.contains(className);
const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);

const SHOW_CLASS = "show";
const HIDE_CLASS = "hide";
const ACTIVE_CLASS = "active";

openModal.addEventListener('click', () => {
    overlay.classList.remove("hide");
    overlay.classList.add("show");
  })

modalClose.addEventListener('click', () => {
    overlay.classList.remove(SHOW_CLASS);
    overlay.classList.add(HIDE_CLASS);
  })


  menu.addEventListener('click', (e) => {
    const item = e.target; 

    if(!hasClass(menu, ACTIVE_CLASS)) {
        //show the navbar
        addClass(menu, ACTIVE_CLASS);
        addClass(nav, SHOW_CLASS);
        removeClass(nav, HIDE_CLASS);
    } else {
        //hide the navbar
        removeClass(menu, ACTIVE_CLASS);
        removeClass(nav, SHOW_CLASS);
        addClass(nav, HIDE_CLASS);
    }

});

const mediaQuery = window.matchMedia("(min-width: 768px)")


const handleMediaQuery = (event) => {
  if (event.matches) {
      removeClass(nav,HIDE_CLASS);
      addClass(nav,SHOW_CLASS);
    }
};

mediaQuery.addEventListener('change', handleMediaQuery);

handleMediaQuery(mediaQuery);

