"use strict";

//SELSCT ELEMENT FROM HTML:
let elShovModal = document.querySelector(".show-modal");
let elModal = document.querySelector(".modal");
let elCloseModal = document.querySelector(".close-modal");
let elOverlay = document.querySelector(".overlay");

//ADD FUNCTION:
let addHidden = function () {
  elModal.classList.add("hidden");
  elOverlay.classList.add("hidden");
};

//REMOVE FUNCTION:
let removeHidden = function () {
  elModal.classList.remove("hidden");
  elOverlay.classList.remove("hidden");
};

//REMOVE CLICK:
elShovModal.addEventListener("click", function () {
  removeHidden();
});

//ADD CLICK:
document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    addHidden();
  }
});

elCloseModal.addEventListener("click", function () {
  addHidden();
});

elOverlay.addEventListener("click", function () {
  addHidden();
});
