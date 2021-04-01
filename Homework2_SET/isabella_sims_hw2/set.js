window.onload = function() {

    // globals
    // menu view HTML
    const MENU_VIEW = document.getElementById("menu-view");

    // time selector HTML
   // let timeSel = document.querySelector("select");
    // 3 options for everything. same idea as randomly generating num 1-3
    const COUNTS = [1, 2, 3];
    // initialize minutes to 0
    let mins = 0;
    let setCount = 0;
    // init time selector
    let timeSel;
    // buttons
    const START = document.getElementById("start");
    const BACK = document.getElementById("main-btn");



    // let refreshBtn = document.getElementById("refresh");

    //
    // refreshBtn.addEventListener("click", refreshGame);
    // backBtn.addEventListener("click", backToMenu);




    START.addEventListener("click", function(){
        MENU_VIEW.setAttribute('style',"display:none");

        console.log("start clicked");

        getTime();
        startGame();
      //  makeCards2(12);
     //   startGame();
      //  let val = timeSel.options[selector.selectedIndex].value;
    });

    BACK.addEventListener("click", function(){
        MENU_VIEW.setAttribute('style',"display:inherit");
        console.log("back clicked");
    });

    //startGame();




    function getTime() {
        let counter = document.getElementById("time");
        timeSel = document.querySelector("select");
        let val = timeSel.options[timeSel.selectedIndex].value;
        let sec = parseInt(val);
        sec = 10;

        let minCount = 0;
        function dec() {

            sec--;
            if (val === "60") {
                mins = 0;
            } else if (val === "180") {
                mins = 2;

            } else if (val === "300") {
                mins = 4;
            } else {

                countUp();

            }

            if (sec === 0){
                minCount ++;

                sec = 10;
            }

            mins = mins - minCount;

            counter.innerText = String(mins) + ":" + (sec < 10 ? "0" : "") + String(sec);
            if(mins === 0 && sec <=1){
                alert("game over");
                endGame();
            }

            setTimeout(dec, 1000);
            console.log(sec);
            console.log(mins);



        }
        // dec();
        if (mins === 0){
            let i = 0;
            // This block will be executed 100 times.
            setInterval(function() {
                counter.innerText = i.toString();
                i++;
                // if (i === 100) clearInterval(this);
                // else counters.innerText = i.toString();
                // i ++;
            }, 1000);
        }
        else{
            dec();
        }
    }

    function refreshGame() {
        let gameBoard = document.getElementById("game");
        gameBoard.innerHTML = "";
        //makeCards2(12);
    }
    function endGame() {
        let refreshBtn = document.getElementById("refresh");
        refreshBtn.removeEventListener("click", refreshGame);
        let cards = document.getElementsByClassName("card");
       // cards.removeEventListener("click", selectCard);
    }



        function countUp() {
            let i = 100;
            // This block will be executed 100 times.
            setInterval(function() {
                counter.innerText = i.toString();
                i++;
               // if (i === 100) clearInterval(this);
               // else counters.innerText = i.toString();
               // i ++;
            }, 1000);
        } // End


        function countDown() {
            let i = 0;
            // This block will be executed 100 times.
            setInterval(function() {
                if (i === 100) clearInterval(this);
                else counters.innerText = i.toString();
                i ++;
            }, 1000);
        } // End





    function startGame(){
        // let selector = document.querySelector("select");

        let difficulty = document.querySelector("input[name='diff']:checked").value;

        if (difficulty === "easy") {
            makeCards2(9, "easy");
        } else {
            makeCards2(12, "standard");
        }





        // let timeSel = document.querySelector("select");
        //
        // let val = timeSel.options[timeSel.selectedIndex].value;
        // let min;
        //
        // if (val === "60") {
        //     min = 1;
        // } else if (val === "180") {
        //     min = 3;
        // } else if (val === "300") {
        //     min = 5;
        // } else {
        //     min = 0;
        // }
        // console.log(time);
    }


 //   makeCards2(12);

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


        // if (difficulty === "easy"){
        //     FILLS = ["solid"]
        // }


        let gameBoard = document.getElementById("game");
        for (let i = 0; i < numCards; i++) {

            let card = document.createElement("div");
            card.addEventListener("click",selected);



            if (difficulty === "easy") {
                FILLS = ["solid"]
            }
            // else{
            let fill = FILLS[Math.floor(Math.random() * FILLS.length)];
            // number of shapes per card
            let numShapes = COUNTS[Math.floor(Math.random() * COUNTS.length)];
            let shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
            let color = COLORS[Math.floor(Math.random() * COLORS.length)];


            // if (difficulty === "easy") {
            //     fill = FILLS[1];
            // } else {
            //     fill = FILLS[Math.floor(Math.random() * FILLS.length)];
            // }
            // add the CSS to the cards
            card.id = fill + "-" + shape + "-" + color + "-" + numShapes;
            card.classList.add("card");

            // // add shadow class and toggle
            // card.classList.add("add-shadow");
            // card.classList.toggle("add-shadow");
            // card.onclick = function () {
            //     card.classList.toggle("add-shadow");
            //
            // };



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

        // let selectedCard = document.getElementsByClassName("add-shadow");
        //
        // selectedCard.addEventListener("click",function(){
        //     if (checkCorrect(selectedCard)) {
        //         let count = document.getElementById("set-count");
        //         setCount++;
        //         count.innerText = "" + setCount;
        //
        //         for (let i = 0; i < selectedCard.length; i++) {
        //             showCorrect(selectedCard[i]);
        //         }
        //     }
        // });



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
                    notPartOfSet(selectedCard[i]);
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

    function notPartOfSet(card) {
        let tempContainer = [];
        let i = 0;

        while (card.hasChildNodes()) {
            tempContainer[i] = card.removeChild(card.lastChild);
            i++;
        }

        card.innerText = "Not a Set :(";

        setTimeout(function() {
            card.innerText = "";
            card.classList.toggle("add-shadow");

            for (let j = 0; j < tempContainer.length; j++) {
                card.appendChild(tempContainer[i]);
            }
        }, 1000);
    }


  //  makeCards2(12);


}
