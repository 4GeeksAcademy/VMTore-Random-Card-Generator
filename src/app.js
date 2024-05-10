/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//window.onload = function() {};

const newCard = () => {
  let min = 1;
  let max = 12;

  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};
console.log(newCard());
/*const newCard = document.querySelector("#number-card");
console.log(newCard);*/
/*const newCard = () => {
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
    "K",
  ];
  const suits = ["♦", "♥", "♠", "♣"];

  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  newCard(randomNumber, randomSuit);
};*/

//Función que devuelve un palo aleatorio con su color correspondiente

/*const randomSuit = () => {
  let suit = Math.floor(Math.random() * 4);
  let headerSuit = document.getElementById("#header-number");
  let footerSuit = document.getElementById("#footer-number");

  if (suit === 0) {
    suit = "♣";
    headerSuit.style.color = "black";
    footerSuit.style.color = "black";
  } else if (suit === 1) {
    suit = "♠";
    headerSuit.style.color = "black";
    footerSuit.style.color = "black";
  } else if (suit === 2) {
    suit = "♥";
    headerSuit.style.color = "red";
    footerSuit.style.color = "red";
  } else {
    suit = "♦";
    headerSuit.style.color = "red";
    footerSuit.style.color = "red";
  }

  return suit(color);
};

randomSuit();*/

//♦ ♥ ♠ ♣

//TERNARIO = if (a>10){b=5}else{b=15}          ///////////     a>10? b=5 : b=15;
