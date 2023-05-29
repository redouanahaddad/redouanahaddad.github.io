document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const items = carousel.querySelectorAll(".carousel__item");
  let isScrolling = false;
  let startX;
  let scrollLeft;
  let images;

  carousel.addEventListener("mousedown", (e) => {
    isScrolling = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("mouseleave", () => {
    isScrolling = false;
  });

  carousel.addEventListener("mouseup", () => {
    isScrolling = false;
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scrolling speed here
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Attach click event listeners to images in the carousel
  items.forEach((item) => {
    const image = item.querySelector("img");
    image.addEventListener("click", () => {
      const imageUrl = image.getAttribute("src");
      openModal(imageUrl);
    });
  });

  // Attach click event listener to modal close button
  modalClose.addEventListener("click", closeModal);
  images = carousel.querySelectorAll(".carousel__item img"); // Assign images
  items.forEach((item) => {
    const image = item.querySelector("img");
    image.addEventListener("click", () => {
      const imageUrl = image.getAttribute("src");
      openModal(imageUrl);
    });
  });
});
