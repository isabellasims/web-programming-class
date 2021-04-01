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
     //   startGame();
      //  let val = timeSel.options[selector.selectedIndex].value;
    });

    BACK.addEventListener("click", function(){
        MENU_VIEW.setAttribute('style',"display:inherit");
        console.log("back clicked");
    });

    //startGame();




    function getTime() {

        // let selector = document.querySelector("select");
        // min = selectOption(selector);


        // let counter = document.getElementById("time");
        //
        // timeSel = document.querySelector("select");
        // let val = timeSel.options[timeSel.selectedIndex].value;
        // let sec = parseInt(val);
        // sec--;
        let counter = document.getElementById("time");
        timeSel = document.querySelector("select");
        let val = timeSel.options[timeSel.selectedIndex].value;
        let sec = parseInt(val);
        sec = 10;

        let minCount = 0;


        function dec() {



            // timeSel = document.querySelector("select");
            // let val = timeSel.options[timeSel.selectedIndex].value;
            // let sec = parseInt(val);
          //  sec = 60;
            sec--;

            // timeSel = document.querySelector("select");
            // let val = timeSel.options[timeSel.selectedIndex].value;

            if (val === "60") {
                mins = 0;
                // if (sec <= 0){
                //     mins -=1
                // }
                // sec = 0;

                // let counter = document.getElementById("time");




            } else if (val === "180") {
                mins = 2;
                // mins = mins - minCount;
                // if (sec <= 0){
                //     minCount ++;
                //     mins -=minCount;
                //     sec = 10;
                // }
                // else{
                //     mins = mins - minCount;
                // }
                // counter.innerText = String(mins) + ":" + (sec < 10 ? "0" : "") + String(sec);
                // setTimeout(dec, 1000);
            } else if (val === "300") {
                mins = 4;
            } else {
                // 0 means infinite
                mins = 0;
                countUp();

            }
            // mins = mins - minCount;
            if (sec === 0){
                minCount ++;
               // mins -=minCount;
                sec = 10;
            }

            mins = mins - minCount;
            // if(mins === 0 && sec <= 1){
            //     alert("game over")
            // }
            // if (sec <= 0){
            //     mins -=1;
            //     sec = 60;
            // }
            counter.innerText = String(mins) + ":" + (sec < 10 ? "0" : "") + String(sec);
            if(mins === 0 && sec <=1){
                alert("game over")
            }

            setTimeout(dec, 1000);
            console.log(sec);
            console.log(mins);


        }
        dec();
    }

        // return mins;

       // let counter = document.getElementById("time");

        function countUp() {
            var i = 100;
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



        // let sec = 60;
        // function tick() {
        //     let counter = document.getElementById("time");
        //     counter.innerText = String(mins) + ":" + (sec < 10 ? "0" : "") + String(sec);
        //     sec--;
        // }
        //
        // while (sec >= 0) {
        //     setTimeout(tick, 1000);
        //     sec--;
        // }
        // } else {
        //     if (min >= 1) {
        //         setTimeout(function() {
        //             countdown(min - 1, 59);
        //         }, 1000);
        //     }
        // }



    function setTime(){

    }

    // function countdown(min, sec) {
    //     /**
    //      * Formats the timer and counts down every second.
    //      */
    //     function tick() {
    //         let counter = document.getElementById("time");
    //         counter.innerText = String(min) + ":" + (sec < 10 ? "0" : "") + String(sec);
    //         sec--;
    //
    //         if (sec >= 0) {
    //             setTimeout(tick, 1000);
    //         } else {
    //             if (min >= 1) {
    //                 setTimeout(function() {
    //                     countdown(min - 1, 59);
    //                 }, 1000);
    //             }
    //         }
    //
    //         // if (sec === 0 && min === 0) {
    //         //     endGame();
    //         // }
    //     }
    //
    //     tick();
    // }

    // function selectOption(sel) {
    //     let val = sel.options[sel.selectedIndex].value;
    //
    //     if (val === "60") {
    //         min = 1;
    //     } else if (val === "180") {
    //         min = 3;
    //     } else if (val === "300") {
    //         min = 5;
    //     } else {
    //         min = 0;
    //     }
    //
    //     return min;
    // }
    function startGame(){
        // let selector = document.querySelector("select");
        mins = getTime();

        if (min > 0) {
            setTimeout(countdown, 1000, min, sec);
        } else {
            countUp(min, sec);
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


    makeCards2(12);


    // easy = 9
    // standard = 12
    // just gonna go with standard for the first deliverable I guess?
    // creates a random shape once then adds that shape to a card numShapes times
    function makeCards2(numCards) {
        const COLORS = ["purple", "green", "red"];
        const FILLS = ["outline", "solid", "striped"];
        const SHAPES = ["diamond", "squiggle", "oval"];


        let gameBoard = document.getElementById("game");
        for (let i = 0; i < numCards; i++) {

            let card = document.createElement("div");
            let fill = FILLS[Math.floor(Math.random() * FILLS.length)];
            // number of shapes per card
            let numShapes = COUNTS[Math.floor(Math.random() * COUNTS.length)];
            let shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
            let color = COLORS[Math.floor(Math.random() * COLORS.length)];


            // add the CSS to the cards
            card.id = fill + "-" + shape + "-" + color + "-" + numShapes;
            card.classList.add("card");

            // add shadow class and toggle
            card.classList.add("add-shadow");
            card.classList.toggle("add-shadow");
            card.onclick = function(){
                card.classList.toggle("add-shadow");

            };

            for (let j = 0; j < numShapes; j++) {
                let img = document.createElement("img");
                img.src = "img/" + fill + "-" + shape + "-" + color + ".png";
                img.alt = "a " + fill + " " + color + " " + shape;
                card.appendChild(img);
            }

            gameBoard.appendChild(card);
        }

    }
  //  makeCards2(12);


};
