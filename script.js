// Sources :
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
//https://medium.com/geekculture/create-scroll-back-to-top-button-with-just-4-lines-of-javascript-code-and-smooth-behavior-61a1edf08df7

window.addEventListener("scroll", function () {
  const backToTopButton = document.getElementById("back-to-top");
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Smooth scroll to top when the button is clicked
document.getElementById("back-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Source: https://swiperjs.com/get-started#use-swiper-from-cdn
// Initialize Swiper
var swiper = new Swiper(".swiper-container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 30,
});
