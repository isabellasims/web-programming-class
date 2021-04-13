"use strict";
// Part 1: Implement start feature
// - clear input/output
// - clear timer
// Part 2: Change Start to start/stop
// Part 3: Implement reset feature (try on your own!)

(function() {
  window.addEventListener("load", init);

   // let text;
   // let output;


  function init() {
    // text = document.querySelector("input").value;
    // output = document.getElementById("output");

    // id("animate-btn").addEventListener("click", animateText);
    id("animate-btn").addEventListener("click", function(){
      // let text = document.querySelector("input").value;
      let output = document.getElementById("output");
      let ind = 0;
   //   if(ind < text.length){
        window.setInterval(function () {
          let text = document.querySelector("input").value;


            if(text[ind]) {
              console.log(ind, text.length);
              output.innerHTML += text[ind];
              ind++;
            }


        }, 1000);

   //   }

    });
    id("reset-btn").addEventListener("click", reset);
  }

  /**
   * Toggles typing animation - if animation is already in progress,
   * pauses it. Otherwise, starts animation.
   */
  function animateText() {
    // Part 1: Implement start feature: Add the character at index 0 to output,
    // and at each tick update index and keep adding the next character

    // text = document.querySelector("input").value;
    // Will execute myCallback every 0.5 seconds

    console.log("started");
    let text = document.querySelector("input").value;
    let output = document.getElementById("output");

    let ind = 0;
    // if(ind < text.length) {
      window.setInterval(function () {
        console.log(ind, text.length);
        while(ind < text.length) {
          output.innerHTML += text[ind];
          ind++;
        }

      }, 1000);

  //  }


    // ind ++;



    // Part 2: Change Start to start/stop - what should happen
    // when we pause animation? Restart at index 0 or keep the current index?
  }

  // Part 3: Implement reset: Clear the text, output, and timer.
  function reset() {

  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

})();
