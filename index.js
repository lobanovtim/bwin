const body = document.querySelector(".body");
const regulations = document.querySelector(".footer__button-regulations");
const popup = document.querySelector(".popup");
const btnClose = document.querySelector(".popup__close");
const btnPlay = document.querySelector(".main__button-play");

const togglePopup = () => {
  popup.classList.toggle("popup__is-avtive");
  body.classList.toggle("body__not-active");
  closePopup();
};

regulations.addEventListener("click", () => {
  togglePopup();
});

const closePopup = () => {
  btnClose.addEventListener("click", function () {
    togglePopup();
  });
};

btnPlay.addEventListener("click", () => {
  console.log("Button clicked");
});
