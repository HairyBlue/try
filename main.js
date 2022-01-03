window.addEventListener("scroll", function() {
    var nav = document.querySelector("header");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

const menu_btn = document.querySelector(".hamburger");

menu_btn.addEventListener("click", function() {
    menu_btn.classList.toggle("is-active");
})