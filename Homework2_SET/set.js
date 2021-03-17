window.onload = function() {

};


// (function() {
//     "use strict";
//
//     let setCount = 0;
//     let min = 0;
//     let sec = 0;
//     const COLORS = ["green", "purple", "red"];
//     const STYLES = ["outline", "solid", "striped"];
//     const SHAPES = ["diamond", "oval", "squiggle"];
//     const COUNTS = [1, 2, 3];
//
//     window.addEventListener("load", init);
//
//     function init() {
//         let startBtn = document.getElementById("start");
//         let refreshBtn = document.getElementById("refresh");
//         let backBtn = document.getElementById("main-btn");
//         startBtn.addEventListener("click", start);
//         refreshBtn.addEventListener("click", refreshGame);
//         backBtn.addEventListener("click", backToMenu);
//     }
//
//     function start() {
//         init();
//         setCount = 0;
//         let menuView = document.getElementById("menu-view");
//         let selector = document.querySelector("select");
//         min = selectOption(selector);
//
//         if (min > 0) {
//             setTimeout(countdown, 1000, min, sec);
//         } else {
//             countUp(min, sec);
//         }
//
//         makeBoard();
//         menuView.classList.add("hidden");
//         let gameView = document.getElementById("game-view");
//         gameView.classList.remove("hidden");
//     }
//
//     function selectOption(sel) {
//         let val = sel.options[sel.selectedIndex].value;
//
//         if (val === "60") {
//             min = 1;
//         } else if (val === "180") {
//             min = 3;
//         } else if (val === "300") {
//             min = 5;
//         } else {
//             min = 0;
//         }
//
//         return min;
//     }
//
//     function backToMenu() {
//         let menuView = document.getElementById("menu-view");
//         let gameView = document.getElementById("game-view");
//         let gameBoard = document.getElementById("game");
//         menuView.classList.remove("hidden");
//         gameView.classList.add("hidden");
//         gameBoard.innerHTML = "";
//         clearTimeout(countdown);
//         clearInterval(countUp);
//     }
//
//     function refreshGame() {
//         let gameBoard = document.getElementById("game");
//         gameBoard.innerHTML = "";
//         makeBoard();
//     }
//
//
//     function end() {
//         let refreshBtn = document.getElementById("refresh");
//         refreshBtn.removeEventListener("click", refreshGame);
//         let cards = document.getElementsByClassName("card");
//         cards.removeEventListener("click", selectCard);
//     }
//
//
//     function makeBoard() {
//         let input = document.querySelector("input[name='diff']:checked").value;
//
//         if (input === "easy") {
//             makeCards(9, "easy");
//         } else {
//             makeCards(12, "standard");
//         }
//     }
//
//     function makeCard() {
//         let input = document.querySelector("input[name='diff']:checked").value;
//
//         if (input === "easy") {
//             makeCards(1, "easy");
//         } else {
//             makeCards(1, "standard");
//         }
//     }
//
//
//     function makeCards(numCards, diff) {
//         let gameBoard = document.getElementById("game");
//
//         for (let i = 0; i < numCards; i++) {
//             let card = document.createElement("div");
//             card.addEventListener("click", selectCard);
//             let imgCount = COUNTS[Math.floor(Math.random() * COUNTS.length)];
//             let shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
//             let color = COLORS[Math.floor(Math.random() * COLORS.length)];
//             let style = "";
//
//             if (diff === "easy") {
//                 style = STYLES[1];
//             } else {
//                 style = STYLES[Math.floor(Math.random() * STYLES.length)];
//             }
//
//             if (!document.getElementById(style + "-" + shape + "-" + color + "-" + imgCount)) {
//                 card.id = style + "-" + shape + "-" + color + "-" + imgCount;
//                 card.classList.add("card");
//
//                 for (let j = 0; j < imgCount; j++) {
//                     let img = document.createElement("img");
//                     img.src = "img/" + style + "-" + shape + "-" + color + ".png";
//                     img.alt = "a " + style + " " + color + " " + shape;
//                     card.appendChild(img);
//                 }
//
//                 gameBoard.appendChild(card);
//             } else {
//                 makeCard();
//             }
//         }
//     }
//
//     function countdown(min, sec) {
//         function tick() {
//             let counter = document.getElementById("time");
//             counter.innerText = String(min) + ":" + (sec < 10 ? "0" : "") + String(sec);
//             sec--;
//
//             if (sec >= 0) {
//                 setTimeout(tick, 1000);
//             } else {
//                 if (min >= 1) {
//                     setTimeout(function() {
//                         countdown(min - 1, 59);
//                     }, 1000);
//                 }
//             }
//
//             if (sec === 0 && min === 0) {
//                 end();
//             }
//         }
//
//         tick();
//     }
//     function countUp(min, sec) {
//         let counter = document.getElementById("time");
//         setInterval(function() {
//             sec++;
//
//             if (sec === 60) {
//                 sec = 0;
//                 min++;
//             }
//
//             counter.innerText = [(min < 10 ? "0" + min : min), (sec < 10 ? "0" + sec : sec)].join(':');
//         }, 1000);
//     }
//
//     function selectCard() {
//         this.classList.toggle("add-shadow");
//         let selectedCard = document.getElementsByClassName("add-shadow");
//
//         if (selectedCard.length === 3) {
//             if (isSet(selectedCard)) {
//                 let count = document.getElementById("set-count");
//                 setCount++;
//                 count.innerText = "" + setCount;
//
//                 for (let i = 0; i < selectCard.length; i++) {
//                     partOfSet(selectedCard[i]);
//                 }
//             } else {
//                 for (let i = 0; i < selectCard.length; i++) {
//                     notPartOfSet(selectedCard[i]);
//                 }
//             }
//         }
//     }
// })();
