const imgContainer = document.querySelector(".slider-container");
const imgSlides = document.querySelectorAll(".card__img");

// const imgContainer = document.querySelector(".img");
// const imgSlides = document.querySelectorAll(".img img");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const lastClone = document.querySelector("#lastClone");
const firstClone = document.querySelector("#firstClone");
let currentSlide = 1;
// const nextBtn = document.querySelector(".nextBtn");
// const prevBtn = document.querySelector(".prevBtn");
let initialX = null;
let newEventLeft = new Event("swipeLeft");
let newEventRight = new Event("swipeRight");
let size = imgSlides[0].clientWidth;

imgContainer.style.transform = `translateX(${-size * currentSlide}px)`;
imgContainer.addEventListener("transitionend", () => {
  if (imgSlides[currentSlide].id === "lastClone") {
    imgContainer.style.transition = "none";
    currentSlide = imgSlides.length - 2;
    imgContainer.style.transform = `translateX(${-size * currentSlide}px)`;
  }
  if (imgSlides[currentSlide].id === "firstClone") {
    imgContainer.style.transition = "none";
    currentSlide = 1;
    imgContainer.style.transform = `translateX(${-size * currentSlide}px)`;
  }
});

// imgContainer.style.transition = `translate 0.4s ease-in-out`;
const touchStartHandler = (e) => {
  //   console.log();
  initialX = e.touches[0].clientX;
  //   console.log({ initialX });
};
const touchMoveHandler = (e) => {
  if (!initialX) return;
  //   console.log({ initialX });
  //   console.log(e.touches[0].clientX);
  const diffX = initialX - e.touches[0].clientX;
  //   initialX = null;
  //   console.log({ diffX });
  if (diffX > 0) {
    //w lewo;
    imgContainer.dispatchEvent(newEventLeft);
  } else {
    //w prawo
    imgContainer.dispatchEvent(newEventRight);
  }
  initialX = null;
};
const nextPicture = () => {
  if (currentSlide >= imgSlides.length - 1) return;
  imgContainer.style.transition = `transform 0.4s ease-in-out`;
  currentSlide++;

  imgContainer.style.transform = `translateX(${-size * currentSlide}px)`;

  //   console.log("event swipeRight");
};

const prevPicture = () => {
  if (currentSlide <= 0) return;
  imgContainer.style.transition = `transform 0.4s ease-in-out`;
  currentSlide--;

  imgContainer.style.transform = `translateX(${-size * currentSlide}px)`;
  //   console.log("event swipeLeft");
};
imgContainer.addEventListener("touchstart", touchStartHandler);
imgContainer.addEventListener("touchmove", touchMoveHandler);
imgContainer.addEventListener("swipeLeft", nextPicture);
imgContainer.addEventListener("swipeRight", prevPicture);

nextBtn.addEventListener("click", nextPicture);
prevBtn.addEventListener("click", prevPicture);
