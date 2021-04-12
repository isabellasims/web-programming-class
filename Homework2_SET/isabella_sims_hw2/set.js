window.onload = function() {

    // globals
    // menu view HTML
    const MENU_VIEW = document.getElementById("menu-view");
    const GAME_VIEW= document.getElementById("game-view");


    // 3 options for everything. same idea as randomly generating num 1-3
    const COUNTS = [1, 2, 3];
    // initialize minutes to 0
    let min = 0;
    let sec = 0;
    let setCount = 0;
    // init time selector

    // buttons
    const START = document.getElementById("start");
    const BACK = document.getElementById("main-btn");
    const REFRESH = document.getElementById("refresh");




    REFRESH.addEventListener("click",refreshGame);

    START.addEventListener("click", function(){
        MENU_VIEW.setAttribute('style',"display:none");
        GAME_VIEW.setAttribute('style',"display:inherit");

        console.log("start clicked");


        startGame();

    });



    BACK.addEventListener("click", function(){
        // let gameBoard = document.getElementById("game");
         MENU_VIEW.setAttribute('style',"display:inherit");
         GAME_VIEW.setAttribute('style',"display:none");
        let gameBoard = document.getElementById("game");
        gameBoard.innerHTML = "";
        clearTimeout(countdown);
        clearInterval(countUp);
    });


    function startGame(){
        // clearTimeout(countdown);
        // clearInterval(countUp);
         let selector = document.querySelector("select");

        min = getOptions(selector);

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

            // fills only solid for easy mode
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
        let temp = [];
        let i = 0;

        while (card.hasChildNodes()) {
            // remove clicked cards
            temp[i] = card.removeChild(card.lastChild);
            i++;
        }

        card.innerText = "SET!";

        setTimeout(function() {
            card.innerText = "";
            card.classList.toggle("add-shadow");

            // add clicked cards back
            for (let j = 0; j < temp.length; j++) {
                card.appendChild(temp[j]);

            }
        }, 1000);
    }

    // show not a set if not a set
    function showWrong(card) {
        let temp = [];
        let i = 0;

        while (card.hasChildNodes()) {
            // remove clicked cards
            temp[i] = card.removeChild(card.lastChild);
            i++;
        }

        card.innerText = "Not a Set :(";

        setTimeout(function() {
            card.innerText = "";
            card.classList.toggle("add-shadow");

            // add clicked cards back
            for (let j = 0; j < temp.length; j++) {
                card.appendChild(temp[j]);

            }
        }, 1000);
    }

    function endGame() {
        let refreshBtn = document.getElementById("refresh");
        refreshBtn.removeEventListener("click", refreshGame);
        let cards = document.getElementsByClassName("card");
        cards.removeEventListener("click", selected);
    }

    function refreshGame() {

        let gameBoard = document.getElementById("game");
        gameBoard.innerHTML = "";
        resetClock();
        startGame();
    }

    function resetClock(){
        clearTimeout(countdown);
        clearInterval(countUp);

    }



    //  makeCards2(12);

    // timer solution courtesy of stack overflow & github but still broken
    function getOptions(selector) {
        let val = selector.options[selector.selectedIndex].value;

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



    function countdown(min, sec) {

        function incriment() {
            let counter = document.getElementById("time");
            counter.innerText = String(min) + ":" + (sec < 10 ? "0" : "") + String(sec);
            sec--;

            if (sec >= 0) {
                setTimeout(incriment, 1000);
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

        incriment();
    }


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


};
