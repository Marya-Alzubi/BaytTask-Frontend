import { team, work } from "./data.js";

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu ul");
const nav = document.querySelector(".navbar");
const dropDown = document.getElementById("dropDown");
const subDropDown = dropDown.nextElementSibling;
const scrollUp = document.getElementById("scroll-up");
const contactToggle = document.getElementById("contact-toggle");
const contactSection = document.querySelector(".contact");

// show the side menu after click the buger button
burger.addEventListener("click", function () {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

// Close the menu when clicking anywhere outside of it and outside of the nav element
document.addEventListener("click", function (event) {
  if (
    !menu.contains(event.target) &&
    !nav.contains(event.target) &&
    menu.style.display === "block"
  ) {
    menu.style.display = "none";
  }
  if (!subDropDown.contains(event.target) && !dropDown.contains(event.target))
    subDropDown.style.display = "none";
});

// making sure the css of the nav is working properly
window.addEventListener("resize", function () {
  if (window.innerWidth > 1024) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});

//render (team & work) data
document.addEventListener("DOMContentLoaded", function () {
  subDropDown.style.display = "none";
  // render the team data
  const cardsContainer = document.querySelector(".cards-container");
  cardsContainer.innerHTML = team
    .map(
      (card) =>
        `<div class="card">
          <img src=${card.image} alt="${card.name} image" />
          <h3>${card.name}</h3>
          <p>${card.title}</p>
        </div>`
    )
    .join("");

  // render the work data
  const workContainer = document.querySelector(".work-container");
  workContainer.innerHTML += work
    .map(
      (item) => `<div class="work-card">
          <div><img src=${item.image} alt="${item.title} image" /></div>
          <div>
            <h3>${item.title}</h3>
            <h5>${item.subTitle}</h5>
            ${item.points.map((point) => `<p>${point}</p>`).join("")}
          </div>
        </div>`
    )
    .join("");
});

//show and hide the dropDown list items
dropDown.addEventListener("click", function () {
  if (subDropDown.style.display === "flex") {
    subDropDown.style.display = "none";
  } else {
    subDropDown.style.display = "flex";
  }
});

// show scroll up button after reaching the middle of the screen
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 2) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
});

//scroll to up fuctionallity
scrollUp.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//show and hide contact us section
contactToggle.addEventListener("click", function () {
  if (contactSection.classList.contains("show-grid")) {
    contactSection.classList.remove("show-grid");
    contactSection.classList.add("hide-grid");
  } else {
    contactSection.classList.add("show-grid");
    contactSection.classList.remove("hide-grid");
  }
});
