'use strict';

const adviceButton = document.querySelector('.advice-button');
const adviceText = document.querySelector('.advice-text');
const adviceId = document.querySelector(".advice-id");


function generateAdvice() {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((response) => response.json())
    .then((response) => {
      let data = response.slip;
      let dataId = data.id;
      let dataAdvice = data.advice;

      adviceId.innerHTML = `advice #${dataId}`.toUpperCase();
      adviceText.innerHTML = dataAdvice;
    });
}

// When button is clicked, run the generateAdvice function
adviceButton.addEventListener("click", () => {
  generateAdvice();
});

  
 