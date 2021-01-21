const player = document.querySelector(".mp3-player");
const songButtons = [...document.querySelectorAll(".songs")];
console.log(player);
console.log(songButtons);
const changeSong = (e) => {
  console.log(e.target.ariaLabel);
  player.src = e.target.ariaLabel;
};
songButtons.map((btn) => {
  btn.addEventListener("click", (e) => changeSong(e));
});
