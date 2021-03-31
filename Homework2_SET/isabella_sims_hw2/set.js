window.onload = function() {



    // globals
     const MENU_VIEW = document.getElementById("menu-view");
     // 3 options for everything. same idea as randomly generating num 1-3
     const COUNTS = [1, 2, 3];
     // buttons
     const START = document.getElementById("start");
     const BACK = document.getElementById("main-btn");

    // let refreshBtn = document.getElementById("refresh");

    //
    // refreshBtn.addEventListener("click", refreshGame);
    // backBtn.addEventListener("click", backToMenu);



    START.addEventListener("click", function(){
        const MENU_VIEW = document.getElementById("menu-view");
        MENU_VIEW.setAttribute('style',"display:none");
        console.log("start clicked");
    });

    BACK.addEventListener("click", function(){
        const MENU_VIEW = document.getElementById("menu-view");
        MENU_VIEW.setAttribute('style',"display:inherit");
        console.log("back clicked");
    });







    // easy = 9
    // standard = 12
    // just gonna go with standard for the first deliverable I guess?
    // creates a random shape once then adds that shape to a card numShapes times
    function makeCards2(numCards) {
        const COLORS = ["purple", "green", "red"];
        const FILLS = ["outline", "solid", "striped"];
        const SHAPES = ["diamond", "squiggle", "oval"];



        // let refreshBtn = document.getElementById("refresh");
        // let backBtn = document.getElementById("main-btn");
        // startBtn.addEventListener("click", startGame);
        // refreshBtn.addEventListener("click", refreshGame);
        // backBtn.addEventListener("click", backToMenu);


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
    makeCards2(12);


};
