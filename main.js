const burger = document.querySelector(".hamburger__link");
const nav = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger__link");
const toggleNav = () => {
  if (!nav.classList.contains("active")) {
    nav.classList.add("active");
    hamburger.style.border = "2px solid white";
  } else {
    nav.classList.remove("active");
    hamburger.style.border = "none";
  }
};
burger.addEventListener("click", toggleNav);

const players = [
  {
    name: "Adam",
    club: "Borussia Dortmund",
    goals: 10,
  },
  {
    name: "Robert",
    club: "Borussia Dortmund",
    goals: 20,
  },
  {
    name: "Addsaaam",
    club: "Borussia Dortaamund",
    goals: 30,
  },
  {
    name: "Stefan",
    club: "Borussia Doradtmund",
    goals: 40,
  },
  {
    name: "Piotr",
    club: "Borussia Dortmund",
    goals: 510,
  },
];
const borussiaPlayers = players.filter(
  (player) => player.club === "Borussia Dortmund"
);
const sumOfGoals = (player, current) => player + current.goals;
const dortmundGoals = borussiaPlayers.reduce(sumOfGoals, 0);
