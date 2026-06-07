const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {

  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");

});

overlay.addEventListener("click", () => {

  hamburger.classList.remove("active");
  nav.classList.remove("active");
  overlay.classList.remove("active");

});


/* ABOUT制御 */

const aboutLink = document.querySelector('.nav a[href$="#about"]');
const aboutSection = document.getElementById("about");


if (aboutLink && aboutSection) {

  aboutLink.addEventListener("click", function() {

    // index.html内の場合だけ表示
    aboutSection.classList.add("active");

  });

}


/* ページ読み込み時は必ず非表示 */

window.addEventListener("load", () => {

  if (aboutSection) {

    aboutSection.classList.remove("active");

  }

});