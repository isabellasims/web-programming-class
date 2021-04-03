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
//     /**
//      * Adds the functionality of the buttons on
//      * the html page. Their functions respond once
//      * they are clicked by the user. One button starts
//      * the game, another refreshes the game, and the other
//      * goes back to the main menu.
//      */
//     function init() {
//         let startBtn = document.getElementById("start");
//         let refreshBtn = document.getElementById("refresh");
//         let backBtn = document.getElementById("main-btn");
//         startBtn.addEventListener("click", startGame);
//         refreshBtn.addEventListener("click", refreshGame);
//         backBtn.addEventListener("click", backToMenu);
//     }
//
//     /**
//      * Switches the menu view to the game board
//      * with randomly generated cards and starts the
//      * timer depending on the options selected from
//      * menu view.
//      */
//     function startGame() {
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
//         generateBoard();
//         menuView.classList.add("hidden");
//         let gameView = document.getElementById("game-view");
//         gameView.classList.remove("hidden");
//     }
//
//     /**
//      * Sets the number of minutes depending on the option selected
//      * from the main menu
//      * @param {DOMObject} sel - the drop down menu selection for times
//      * @return {number} - the number of minutes for the timer
//      */
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
//     /**
//      * Switches the game view to the main menu
//      * and stops the game and timer.
//      */
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
//     /**
//      * Generates a new board of cards during the game.
//      */
//     function refreshGame() {
//         let gameBoard = document.getElementById("game");
//         gameBoard.innerHTML = "";
//         generateBoard();
//     }
//
//     /**
//      * After time runs out, the refresh button is disabled
//      * and the game will end and will stay on the game view
//      * until the user clicks the back to menu button
//      */
//     function endGame() {
//         let refreshBtn = document.getElementById("refresh");
//         refreshBtn.removeEventListener("click", refreshGame);
//         let cards = document.getElementsByClassName("card");
//         cards.removeEventListener("click", selectCard);
//     }
//
//     /**
//      * Generates a board of random cards, the number and type(s) generated
//      * depends on the difficulty chosen at the beginning.
//      */
//     function generateBoard() {
//         let input = document.querySelector("input[name='diff']:checked").value;
//
//         if (input === "easy") {
//             generateCards(9, "easy");
//         } else {
//             generateCards(12, "standard");
//         }
//     }
//
//     /**
//      * Generates one random card.
//      */
//     function generateOneCard() {
//         let input = document.querySelector("input[name='diff']:checked").value;
//
//         if (input === "easy") {
//             generateCards(1, "easy");
//         } else {
//             generateCards(1, "standard");
//         }
//     }
//
//     /**
//      * Generates multiple random cards with specific attributes and no duplicates.
//      * If easy mode is selected, then all cards have the solid attribute, while in
//      * standard mode all attributes are used.
//      * @param {number} numCards - the number of cards being generated
//      * @param {string} diff - the difficulty setting for the game.
//      */
//     function generateCards(numCards, diff) {
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
//                 generateOneCard();
//             }
//         }
//     }
//
//     /**
//      * Counts down the timer when timed mode is selected. When the timer
//      * goes to 0 then the game ends.
//      * @param {number} min - the number of minutes
//      * @param {number} sec - the number of seconds
//      */
//     function countdown(min, sec) {
//         /**
//          * Formats the timer and counts down every second.
//          */
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
//                 endGame();
//             }
//         }
//
//         tick();
//     }
//
//     /**
//      * The timer that goes on continuously when unlimited mode is selected.
//      * @param {number} min - the number of minutes
//      * @param {number} sec - the number of seconds
//      */
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
//     /**
//      * Allows the user to select up to 3 cards and see if they're a set or not.
//      */
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
//
//     /**
//      * Checks if the 3 cards are a set.
//      * @param {array} selectedCard - the 3 selected cards.
//      * @return {boolean} - true if it is a set, false otherwise.
//      */
//     function isSet(selectedCard) {
//         let card1 = selectedCard[0].id.split("-");
//         let card2 = selectedCard[1].id.split("-");
//         let card3 = selectedCard[2].id.split("-");
//         let cardArray = [card1, card2, card3];
//         let isSet = true;
//
//         for (let i = 0; i < cardArray[0].length; i++) {
//             if (!(cardArray[0][i] === cardArray[1][i] && cardArray[0][i] === cardArray[2][i]) &&
//                 !(cardArray[0][i] !== cardArray[1][i] && cardArray[1][i] !== cardArray[2][i] &&
//                     cardArray[0][i] !== cardArray[2][i])) {
//                 isSet = false;
//             }
//         }
//
//         return isSet;
//     }
//
//     /**
//      * If the cards were a set, a message will be displayed saying so.
//      * Then, the cards are replaced with randomly generated cards.
//      * @param {DOMObject} card - the card being replaced.
//      */
//     function partOfSet(card) {
//         while (card.hasChildNodes()) {
//             card.removeChild(card.lastChild);
//         }
//
//         card.innerText = "SET!";
//
//         setTimeout(function() {
//             card.innerText = "";
//             card.classList.toggle("add-shadow");
//             let tempCard = card;
//
//             while (tempCard.hasChildNodes()) {
//                 card.appendChild(tempCard.removeChild(tempCard.lastChild));
//             }
//
//             card.id = tempCard.id;
//         }, 1000);
//     }
//
//     /**
//      * If the cards weren't a set, a message will be displayed saying so.
//      * @param {DOMObject} card - the card that's having the message displayed
//      * over it
//      */
//     function notPartOfSet(card) {
//         let tempContainer = [];
//         let i = 0;
//
//         while (card.hasChildNodes()) {
//             tempContainer[i] = card.removeChild(card.lastChild);
//             i++;
//         }
//
//         card.innerText = "Not a Set :(";
//
//         setTimeout(function() {
//             card.innerText = "";
//             card.classList.toggle("add-shadow");
//
//             for (let j = 0; j < tempContainer.length; j++) {
//                 card.appendChild(tempContainer[i]);
//             }
//         }, 1000);
//     }
// })();

// window.onload = function() {
//
//     // globals
//     // menu view HTML
//     const MENU_VIEW = document.getElementById("menu-view");
//
//     // time selector HTML
//     // let timeSel = document.querySelector("select");
//     // 3 options for everything. same idea as randomly generating num 1-3
//     const COUNTS = [1, 2, 3];
//     // initialize minutes to 0
//     let mins = 0;
//     let setCount = 0;
//     // init time selector
//     let timeSel;
//     // buttons
//     const START = document.getElementById("start");
//     const BACK = document.getElementById("main-btn");
//     const REFRESH = document.getElementById("refresh");
//
//
//
//     // let refreshBtn = document.getElementById("refresh");
//
//     //
//     // refreshBtn.addEventListener("click", refreshGame);
//     // backBtn.addEventListener("click", backToMenu);
//
//
//
//
//     START.addEventListener("click", function(){
//         MENU_VIEW.setAttribute('style',"display:none");
//
//         console.log("start clicked");
//
//         getTime();
//         startGame();
//         //  makeCards2(12);
//         //   startGame();
//         //  let val = timeSel.options[selector.selectedIndex].value;
//     });
//
//     // REFRESH.addEventListener("click", function(){
//     //     //refreshGame();
//     //     getTime();
//     //     makeCards2();
//     // });
//
//     BACK.addEventListener("click", function(){
//         MENU_VIEW.setAttribute('style',"display:inherit");
//         console.log("back clicked");
//     });
//
//     //startGame();
//
//
//
//
//     function getTime() {
//         let counter = document.getElementById("time");
//         timeSel = document.querySelector("select");
//         let val = timeSel.options[timeSel.selectedIndex].value;
//         let sec = parseInt(val);
//         sec = 10;
//
//         let minCount = 0;
//         function dec() {
//
//             sec--;
//             if (val === "60") {
//                 mins = 0;
//             } else if (val === "180") {
//                 mins = 2;
//
//             } else if (val === "300") {
//                 mins = 4;
//             } else {
//
//                 countUp();
//
//             }
//
//             if (sec === 0){
//                 minCount ++;
//
//                 sec = 10;
//             }
//
//             mins = mins - minCount;
//
//             counter.innerText = String(mins) + ":" + (sec < 10 ? "0" : "") + String(sec);
//             if(mins === 0 && sec <=1){
//                 alert("game over");
//                 endGame();
//             }
//             else{
//                 setTimeout(dec, 1000);
//             }
//
//
//
//             // setTimeout(dec, 1000);
//             console.log(sec);
//             console.log(mins);
//
//
//
//         }
//         // dec();
//         if (mins === 0){
//             let i = 0;
//             // This block will be executed 100 times.
//             setInterval(function() {
//                 counter.innerText = i.toString();
//                 i++;
//                 // if (i === 100) clearInterval(this);
//                 // else counters.innerText = i.toString();
//                 // i ++;
//             }, 1000);
//         }
//         else {
//             dec();
//         }
//     }
//
//
//     function endGame() {
//         let refreshBtn = document.getElementById("refresh");
//         refreshBtn.removeEventListener("click", refreshGame);
//         let cards = document.getElementsByClassName("card");
//         // cards.removeEventListener("click", selectCard);
//     }
//
//
//
//     function countUp() {
//         let i = 100;
//         // This block will be executed 100 times.
//         setInterval(function() {
//             counter.innerText = i.toString();
//             i++;
//             // if (i === 100) clearInterval(this);
//             // else counters.innerText = i.toString();
//             // i ++;
//         }, 1000);
//     } // End
//
//
//     function countDown() {
//         let i = 0;
//         // This block will be executed 100 times.
//         setInterval(function() {
//             if (i === 100) clearInterval(this);
//             else counters.innerText = i.toString();
//             i ++;
//         }, 1000);
//     } // End
//
//
//
//
//
//     function startGame(){
//         // let selector = document.querySelector("select");
//
//         let difficulty = document.querySelector("input[name='diff']:checked").value;
//
//         if (difficulty === "easy") {
//             makeCards2(9, "easy");
//         } else {
//             makeCards2(12, "standard");
//         }
//
//
//
//
//
//         // let timeSel = document.querySelector("select");
//         //
//         // let val = timeSel.options[timeSel.selectedIndex].value;
//         // let min;
//         //
//         // if (val === "60") {
//         //     min = 1;
//         // } else if (val === "180") {
//         //     min = 3;
//         // } else if (val === "300") {
//         //     min = 5;
//         // } else {
//         //     min = 0;
//         // }
//         // console.log(time);
//     }
//
//
//     //   makeCards2(12);
//
//     // generate one card if there is a duplicate
//     function dupFlag() {
//         let input = document.querySelector("input[name='diff']:checked").value;
//
//         if (input === "easy") {
//             makeCards2(1, "easy");
//         } else {
//             makeCards2(1, "standard");
//         }
//     }
//
//
//     // easy = 9
//     // standard = 12
//     // just gonna go with standard for the first deliverable I guess?
//     // creates a random shape once then adds that shape to a card numShapes times
//     function makeCards2(numCards,difficulty) {
//         const COLORS = ["purple", "green", "red"];
//         let FILLS = ["outline", "solid", "striped"];
//         const SHAPES = ["diamond", "squiggle", "oval"];
//
//
//         // if (difficulty === "easy"){
//         //     FILLS = ["solid"]
//         // }
//
//
//         let gameBoard = document.getElementById("game");
//         for (let i = 0; i < numCards; i++) {
//
//             let card = document.createElement("div");
//             card.addEventListener("click",selected);
//
//
//
//             if (difficulty === "easy") {
//                 FILLS = ["solid"]
//             }
//             // else{
//             let fill = FILLS[Math.floor(Math.random() * FILLS.length)];
//             // number of shapes per card
//             let numShapes = COUNTS[Math.floor(Math.random() * COUNTS.length)];
//             let shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
//             let color = COLORS[Math.floor(Math.random() * COLORS.length)];
//
//
//             // if (difficulty === "easy") {
//             //     fill = FILLS[1];
//             // } else {
//             //     fill = FILLS[Math.floor(Math.random() * FILLS.length)];
//             // }
//             // add the CSS to the cards
//             card.id = fill + "-" + shape + "-" + color + "-" + numShapes;
//             card.classList.add("card");
//
//             // // add shadow class and toggle
//             // card.classList.add("add-shadow");
//             // card.classList.toggle("add-shadow");
//             // card.onclick = function () {
//             //     card.classList.toggle("add-shadow");
//             //
//             // };
//
//
//
//             // generate cards until dup, then gen one card until no dup
//             if (!document.getElementById(fill + "-" + shape + "-" + color + "-" + numShapes)) {
//
//                 for (let j = 0; j < numShapes; j++) {
//                     let img = document.createElement("img");
//                     img.src = "img/" + fill + "-" + shape + "-" + color + ".png";
//                     img.alt = "a " + fill + " " + color + " " + shape;
//                     card.appendChild(img);
//                 }
//
//                 gameBoard.appendChild(card);
//             }
//             else{
//                 dupFlag();
//             }
//
//         }
//
//         // let selectedCard = document.getElementsByClassName("add-shadow");
//         //
//         // selectedCard.addEventListener("click",function(){
//         //     if (checkCorrect(selectedCard)) {
//         //         let count = document.getElementById("set-count");
//         //         setCount++;
//         //         count.innerText = "" + setCount;
//         //
//         //         for (let i = 0; i < selectedCard.length; i++) {
//         //             showCorrect(selectedCard[i]);
//         //         }
//         //     }
//         // });
//
//
//
//     }
//
//     function selected() {
//         this.classList.toggle("add-shadow");
//         let selectedCard = document.getElementsByClassName("add-shadow");
//
//         if (selectedCard.length === 3) {
//             console.log(selectedCard.length);
//             if (checkCorrect(selectedCard)) {
//                 let count = document.getElementById("set-count");
//                 setCount++;
//                 count.innerText = "" + setCount;
//
//                 for (let i = 0; i < selectedCard.length; i++) {
//                     showCorrect(selectedCard[i]);
//                 }
//             } else {
//                 for (let i = 0; i < selectedCard.length; i++) {
//                     showWrong(selectedCard[i]);
//
//                 }
//             }
//         }
//     }
//
//
//     function checkCorrect(card) {
//         // remove "-"
//         let card1 = card[0].id.split("-");
//         let card2 = card[1].id.split("-");
//         let card3 = card[2].id.split("-");
//         let cards = [card1, card2, card3];
//         console.log(cards);
//         let correct = true;
//
//         // check for incorrect conditions
//         for (let i = 0; i < cards[0].length; i++) {
//             if (!(cards[0][i] === cards[1][i] && cards[0][i] === cards[2][i]) &&
//                 !(cards[0][i] !== cards[1][i] && cards[1][i] !== cards[2][i] &&
//                     cards[0][i] !== cards[2][i])) {
//                 correct = false;
//             }
//         }
//
//         // if not ^, correct is true
//         return correct;
//     }
//
//     // show user that cards are correct and display update
//     function showCorrect(card) {
//         // remove correct cards
//         while (card.hasChildNodes()) {
//             card.removeChild(card.lastChild);
//         }
//
//         card.innerText = "SET!";
//
//         setTimeout(function() {
//             card.innerText = "";
//             card.classList.toggle("add-shadow");
//             let tempCard = card;
//
//             while (tempCard.hasChildNodes()) {
//                 card.appendChild(tempCard.removeChild(tempCard.lastChild));
//             }
//
//             card.id = tempCard.id;
//         }, 1000);
//     }
//
//     // show not a set if not a set
//     function showWrong(card) {
//         let tempContainer = [];
//         let i = 0;
//
//         while (card.hasChildNodes()) {
//             // remove clicked cards
//             tempContainer[i] = card.removeChild(card.lastChild);
//             i++;
//         }
//
//         card.innerText = "Not a Set :(";
//
//         setTimeout(function() {
//             card.innerText = "";
//             card.classList.toggle("add-shadow");
//
//             // add clicked cards back
//             for (let j = 0; j < tempContainer.length; j++) {
//                 card.appendChild(tempContainer[j]);
//
//             }
//         }, 1000);
//     }
//
//
//     //  makeCards2(12);
//
//
// }



window.onload = function() {

    // globals
    // menu view HTML
    const MENU_VIEW = document.getElementById("menu-view");
    const GAME_VIEW= document.getElementById("game-view");

    // time selector HTML
    // let timeSel = document.querySelector("select");
    // 3 options for everything. same idea as randomly generating num 1-3
    const COUNTS = [1, 2, 3];
    // initialize minutes to 0
    let min = 0;
    let sec = 0;
    let setCount = 0;
    // init time selector
    let timeSel;
    // buttons
    const START = document.getElementById("start");
    const BACK = document.getElementById("main-btn");
    const REFRESH = document.getElementById("refresh");



    // let refreshBtn = document.getElementById("refresh");

    //
    // refreshBtn.addEventListener("click", refreshGame);
    // backBtn.addEventListener("click", backToMenu);




    START.addEventListener("click", function(){
        MENU_VIEW.setAttribute('style',"display:none");
        GAME_VIEW.setAttribute('style',"display:inherit");

        console.log("start clicked");


        startGame();

    });


    // clearTimeout(countdown);
    // clearInterval(countUp);
    BACK.addEventListener("click", function(){
        let gameBoard = document.getElementById("game");
        MENU_VIEW.setAttribute('style',"display:inherit");
        GAME_VIEW.setAttribute('style',"display:none");
        console.log("back clicked");
        gameBoard.innerHTML = "";
        clearTimeout(countdown);
        clearInterval(countUp);
    });


    function startGame(){
         let selector = document.querySelector("select");

        min = selectOption(selector);

        if (min > 0) {
            setTimeout(countdown, 1000, min, sec);
        } else {
            countUp(min, sec);
        }

        let difficulty = document.querySelector("input[name='diff']:checked").value;

        if (difficulty === "easy") {
            makeCards2(9, "easy");
        } else {
            makeCards2(12, "standard");
        }
    }



    // generate one card if there is a duplicate
    function dupFlag() {
        let input = document.querySelector("input[name='diff']:checked").value;

        if (input === "easy") {
            makeCards2(1, "easy");
        } else {
            makeCards2(1, "standard");
        }
    }


    // easy = 9
    // standard = 12
    // just gonna go with standard for the first deliverable I guess?
    // creates a random shape once then adds that shape to a card numShapes times
    function makeCards2(numCards,difficulty) {
        const COLORS = ["purple", "green", "red"];
        let FILLS = ["outline", "solid", "striped"];
        const SHAPES = ["diamond", "squiggle", "oval"];



        let gameBoard = document.getElementById("game");
        for (let i = 0; i < numCards; i++) {

            let card = document.createElement("div");
            card.addEventListener("click",selected);



            if (difficulty === "easy") {
                FILLS = ["solid"]
            }

            let fill = FILLS[Math.floor(Math.random() * FILLS.length)];
            // number of shapes per card
            let numShapes = COUNTS[Math.floor(Math.random() * COUNTS.length)];
            let shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
            let color = COLORS[Math.floor(Math.random() * COLORS.length)];



            // add the CSS to the cards
            card.id = fill + "-" + shape + "-" + color + "-" + numShapes;
            card.classList.add("card");


            // generate cards until dup, then gen one card until no dup
            if (!document.getElementById(fill + "-" + shape + "-" + color + "-" + numShapes)) {

                for (let j = 0; j < numShapes; j++) {
                    let img = document.createElement("img");
                    img.src = "img/" + fill + "-" + shape + "-" + color + ".png";
                    img.alt = "a " + fill + " " + color + " " + shape;
                    card.appendChild(img);
                }

                gameBoard.appendChild(card);
            }
            else{
                dupFlag();
            }

        }

    }

    function selected() {
        this.classList.toggle("add-shadow");
        let selectedCard = document.getElementsByClassName("add-shadow");

        if (selectedCard.length === 3) {
            console.log(selectedCard.length);
            if (checkCorrect(selectedCard)) {
                let count = document.getElementById("set-count");
                setCount++;
                count.innerText = "" + setCount;

                for (let i = 0; i < selectedCard.length; i++) {
                    showCorrect(selectedCard[i]);
                }
            } else {
                for (let i = 0; i < selectedCard.length; i++) {
                    showWrong(selectedCard[i]);

                }
            }
        }
    }


    function checkCorrect(card) {
        // remove "-"
        let card1 = card[0].id.split("-");
        let card2 = card[1].id.split("-");
        let card3 = card[2].id.split("-");
        let cards = [card1, card2, card3];
        console.log(cards);
        let correct = true;

        // check for incorrect conditions
        for (let i = 0; i < cards[0].length; i++) {
            if (!(cards[0][i] === cards[1][i] && cards[0][i] === cards[2][i]) &&
                !(cards[0][i] !== cards[1][i] && cards[1][i] !== cards[2][i] &&
                    cards[0][i] !== cards[2][i])) {
                correct = false;
            }
        }

        // if not ^, correct is true
        return correct;
    }

    // show user that cards are correct and display update
    function showCorrect(card) {
        // remove correct cards
        while (card.hasChildNodes()) {
            card.removeChild(card.lastChild);
        }

        card.innerText = "SET!";

        setTimeout(function() {
            card.innerText = "";
            card.classList.toggle("add-shadow");
            let tempCard = card;

            while (tempCard.hasChildNodes()) {
                card.appendChild(tempCard.removeChild(tempCard.lastChild));
            }

            card.id = tempCard.id;
        }, 1000);
    }

    // show not a set if not a set
    function showWrong(card) {
        let tempContainer = [];
        let i = 0;

        while (card.hasChildNodes()) {
            // remove clicked cards
            tempContainer[i] = card.removeChild(card.lastChild);
            i++;
        }

        card.innerText = "Not a Set :(";

        setTimeout(function() {
            card.innerText = "";
            card.classList.toggle("add-shadow");

            // add clicked cards back
            for (let j = 0; j < tempContainer.length; j++) {
                card.appendChild(tempContainer[j]);

            }
        }, 1000);
    }

    function endGame() {
        let refreshBtn = document.getElementById("refresh");
        refreshBtn.removeEventListener("click", refreshGame);
        let cards = document.getElementsByClassName("card");
        cards.removeEventListener("click", selectCard);
    }

    function refreshGame() {
        let gameBoard = document.getElementById("game");
        gameBoard.innerHTML = "";
        startGame();
    }



    //  makeCards2(12);

    function selectOption(sel) {
        let val = sel.options[sel.selectedIndex].value;

        if (val === "60") {
            min = 1;
        } else if (val === "180") {
            min = 3;
        } else if (val === "300") {
            min = 5;
        } else {
            min = 0;
        }

        return min;
    }

    function backToMenu() {
        let menuView = document.getElementById("menu-view");
        let gameView = document.getElementById("game-view");
        let gameBoard = document.getElementById("game");
        menuView.classList.remove("hidden");
        gameView.classList.add("hidden");
        gameBoard.innerHTML = "";
        clearTimeout(countdown);
        clearInterval(countUp);
    }

    function countdown(min, sec) {
        /**
         * Formats the timer and counts down every second.
         */
        function tick() {
            let counter = document.getElementById("time");
            counter.innerText = String(min) + ":" + (sec < 10 ? "0" : "") + String(sec);
            sec--;

            if (sec >= 0) {
                setTimeout(tick, 1000);
            } else {
                if (min >= 1) {
                    setTimeout(function() {
                        countdown(min - 1, 59);
                    }, 1000);
                }
            }

            if (sec === 0 && min === 0) {
                endGame();
            }
        }

        tick();
    }

    /**
     * The timer that goes on continuously when unlimited mode is selected.
     * @param {number} min - the number of minutes
     * @param {number} sec - the number of seconds
     */
    function countUp(min, sec) {
        let counter = document.getElementById("time");
        setInterval(function() {
            sec++;

            if (sec === 60) {
                sec = 0;
                min++;
            }

            counter.innerText = [(min < 10 ? "0" + min : min), (sec < 10 ? "0" + sec : sec)].join(':');
        }, 1000);
    }


}
