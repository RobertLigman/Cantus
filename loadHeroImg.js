const heroImg = document.querySelector("#hero__img");
const checkHeroImg = () => {
  if (document.body.clientWidth > 1280) {
    heroImg.src = "/assets/3.png";
  } else heroImg.src = "/assets/3-mobile.png";
};
checkHeroImg();
window.onresize = checkHeroImg;
