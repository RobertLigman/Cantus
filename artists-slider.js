const imgContainer = document.querySelector(".slider-container");
let imgSlides;
const nameContainer = document.querySelector(".name-container");
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
let size;
const namesAndRoles = [
  { name: "Jone smith", role: "Vocal" },
  { name: "Rendi Outhor", role: "Drum" },
  { name: "Renes Odim", role: "Guitar" },
];
const getSize = () => {
  imgSlides = document.querySelectorAll(".card__img");
  size = imgSlides[0].clientWidth;
};
getSize();
window.onresize = getSize();
if (window.innerWidth <= 769) {
  const nextName = () => {
    nameContainer.innerHTML = "";
    const h3 = document.createElement("h3");
    const text = document.createElement("p");
    let index = currentSlide - 1;
    if (currentSlide >= imgSlides.length - 1) {
      index = 0;
    }
    if (currentSlide <= 0) {
      index = imgSlides.length - 2;
    }
    h3.textContent = namesAndRoles[index].name;
    text.textContent = namesAndRoles[index].role;
    nameContainer.appendChild(h3);
    nameContainer.appendChild(text);
  };
  nameContainer.innerHTML = "";
  const h3 = document.createElement("h3");
  const text = document.createElement("p");

  h3.textContent = namesAndRoles[0].name;
  text.textContent = namesAndRoles[0].role;
  nameContainer.appendChild(h3);
  nameContainer.appendChild(text);
  imgContainer.style.transform = `translateX(${-size * currentSlide}px)`;
  imgContainer.addEventListener("transitionend", () => {
    if (imgSlides[currentSlide].id === "lastClone") {
      imgContainer.style.transition = "none";
      currentSlide = imgSlides.length - 2;
      imgContainer.style.transform = `translateX(${-size * currentSlide}px)`;
      nextName();
    }
    if (imgSlides[currentSlide].id === "firstClone") {
      imgContainer.style.transition = "none";
      currentSlide = 1;
      imgContainer.style.transform = `translateX(${-size * currentSlide}px)`;
      nextName();
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
    nextName();
    //   console.log("event swipeRight");
  };

  const prevPicture = () => {
    if (currentSlide <= 0) return;

    imgContainer.style.transition = `transform 0.4s ease-in-out`;
    currentSlide--;

    imgContainer.style.transform = `translateX(${-size * currentSlide}px)`;

    nextName();
    //   console.log("event swipeLeft");
  };
  imgContainer.addEventListener("touchstart", touchStartHandler);
  imgContainer.addEventListener("touchmove", touchMoveHandler);
  imgContainer.addEventListener("swipeLeft", nextPicture);
  imgContainer.addEventListener("swipeRight", prevPicture);
}

// nextBtn.addEventListener("click", nextPicture);
// prevBtn.addEventListener("click", prevPicture);
