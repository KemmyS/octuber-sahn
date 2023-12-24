
const menu = document.querySelector(".menu");
const nav = document.querySelector(".main-nav");

const hasClass = (element, className) => element.classList.contains(className);
const addClass = (element, className) => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);

const SHOW_CLASS = "show";
const HIDE_CLASS = "hide";
const ACTIVE_CLASS = "active";


menu.addEventListener("click", (e) => {
  if (!hasClass(menu, ACTIVE_CLASS)) {
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

//Sticky NAV
const navDiv = document.querySelector(".nav-intro-div");
function headerListener() {
  const navHeight = navDiv.getBoundingClientRect().height / 10
  const hasScrolled = window.scrollY > navHeight;
  navDiv.classList.toggle("sticky-nav", hasScrolled);
}

const navbar = document.querySelector(".main-nav");
// Menu fade animation
const hoverFade = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".nav-list").querySelectorAll(".nav-link");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};
navbar.addEventListener("mouseover", hoverFade.bind(0.3));
navbar.addEventListener("mouseout", hoverFade.bind(1));

/**
 * Scrolling Animation
 */
 const observation = (entries, observer, slideInClass, fadeClass) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  const el = entry.target;

  //add your animations
  removeClass(el, slideInClass);
  addClass(el, fadeClass);

  observer.unobserve(entry.target);
};
const observationOptions = {
  root: null,
  threshold: 0.1,
};

/**
 * MAIN CONTENT OBSERVER
 */
 const sectionSlides = document.querySelectorAll(".slide")
 const contentObservation = (entries, observer) => {
  observation(entries, observer, "move-right", "fade-in");
};
const contentObserver = new IntersectionObserver(
  contentObservation,
  observationOptions
);

sectionSlides.forEach((slide) => {
  contentObserver.observe(slide);
});

const skills = document.querySelector(".skills");
const backSkillCard = document.querySelectorAll(".back");

skills.addEventListener("click", (e) => {
 const pin = e.target;

 if(pin.classList.contains("card-pin")){
  const parentCard = pin.closest(".skills-card");
  const front = parentCard.querySelector(".front")
  const back = parentCard.querySelector(".back")

  if(front.classList.contains("show")) {
    front.classList.remove("show");
    front.classList.add("hide");
    back.classList.remove("hide");
    back.classList.add("show");
  } else{
    back.classList.remove("show");
    back.classList.add("hide");
    front.classList.remove("hide");
    front.classList.add("show");
  }
 }
 
} )

/**
 * MEDIA QUERY
 */
const mediaQuery = window.matchMedia("(min-width: 768px)");
const handleMediaQuery = (event) => {

  if (event.matches) {
    removeClass(nav, HIDE_CLASS);
    addClass(nav, SHOW_CLASS);
    window.addEventListener("scroll", headerListener);
  } else {
    addClass(nav, HIDE_CLASS);
    removeClass(nav, SHOW_CLASS);
    window.removeEventListener("scroll", headerListener);
  }
};

mediaQuery.addEventListener("change", handleMediaQuery);
handleMediaQuery(mediaQuery);



