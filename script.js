const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
}


const navLi = document.querySelectorAll(".link");

navLi.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
}

