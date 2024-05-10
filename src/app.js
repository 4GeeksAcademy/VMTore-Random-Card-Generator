/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const newCard = () => {
    const numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    console.log(randomNumber);
    let putNumber = document.getElementById("number-card");
    putNumber.textContent = randomNumber;
  };

  //Función que cambia el color del palo correspondiente

  const randomSuitCard = () => {
    const suits = ["♦", "♥", "♠", "♣"];
    let suit = Math.floor(Math.random() * suits.length);
    let headerSuit = document.getElementById("header-number");
    let footerSuit = document.getElementById("footer-number");

    if (suit === 0) {
      headerSuit.textContent = "♣";
      footerSuit.textContent = "♣";
      headerSuit.style.color = "black";
      footerSuit.style.color = "black";
    } else if (suit === 1) {
      headerSuit.textContent = "♠";
      footerSuit.textContent = "♠";
      headerSuit.style.color = "black";
      footerSuit.style.color = "black";
    } else if (suit === 2) {
      headerSuit.textContent = "♥";
      footerSuit.textContent = "♥";
      headerSuit.style.color = "red";
      footerSuit.style.color = "red";
    } else {
      headerSuit.textContent = "♦";
      footerSuit.textContent = "♦";
      headerSuit.style.color = "red";
      footerSuit.style.color = "red";
    }
  };

  document.querySelector("#button-new-card").addEventListener("click", () => {
    randomSuitCard();
    newCard();
  });
};
