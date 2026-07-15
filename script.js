// Shop Now Button
function shopNow() {
    document.getElementById("collection").scrollIntoView({
        behavior: "smooth"
    });
}

// Welcome Message
window.onload = function () {
    alert("🌸 Welcome to Rachana Summer One-Piece Shop!");
};

// Buy Now Buttons
const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        alert("✅ Thank you for shopping with Rachana!");
    });
});

// Header Color Change on Scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 100) {
        header.style.background = "#ff1493";
    } else {
        header.style.background = "#ff69b4";
    }
});

// Hero Text Animation
const heroText = document.querySelector(".hero-text");

heroText.style.opacity = "0";
heroText.style.transform = "translateY(50px)";

window.addEventListener("load", function () {
    heroText.style.transition = "1s";
    heroText.style.opacity = "1";
    heroText.style.transform = "translateY(0)";
});