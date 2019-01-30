const toggleMenu = event => {
  // Toggle the "menu--open" class on your menu refence.

  // menu.classList.toggle("menu--open");
  event.stopPropagation();
  if (forward) {
    tween.play();
    forward = false;
  } else {
    tween.reverse();
    forward = true;
  }
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".header .menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu

// animation
const tween = TweenMax.to(menu, 0.5, {
  left: 0,
  ease: Power2.easeOut
}).reverse();
let forward = true;

menuButton.addEventListener("click", toggleMenu);

// click anywhere outside the menu to close menu
const header = document.querySelector(".header");
const mainArea = document.querySelector(".articles");

// the header and articles pretty much make up the whole page.
const anywhere = [header, mainArea];
anywhere.forEach(element => {
  element.addEventListener("click", event => {
    // if the menu is out
    if (!forward) {
      toggleMenu(event);
    }
  });
});
