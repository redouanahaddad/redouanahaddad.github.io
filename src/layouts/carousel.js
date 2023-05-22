document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const items = carousel.querySelectorAll(".carousel__item");
  let isScrolling = false;
  let startX;
  let scrollLeft;

  // Define the interval in milliseconds (e.g., 3000ms for 3 seconds)
  const interval = 3000;
  let timer;

  function startTimer() {
    timer = setInterval(() => {
      carousel.scrollLeft += carousel.offsetWidth;
    }, interval);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  carousel.addEventListener("mousedown", (e) => {
    isScrolling = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    stopTimer();
  });

  carousel.addEventListener("mouseleave", () => {
    isScrolling = false;
    startTimer();
  });

  carousel.addEventListener("mouseup", () => {
    isScrolling = false;
    startTimer();
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scrolling speed here
    carousel.scrollLeft = scrollLeft - walk;
  });

  function carouselPrev() {
    carousel.scrollLeft -= carousel.offsetWidth;
  }

  function carouselNext() {
    carousel.scrollLeft += carousel.offsetWidth;
  }

  // Start the timer initially
  startTimer();
});
