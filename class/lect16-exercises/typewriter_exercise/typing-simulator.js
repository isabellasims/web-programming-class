"use strict";
// Part 1: Implement start feature
// - clear input/output
// - clear timer
// Part 2: Change Start to start/stop
// Part 3: Implement reset feature (try on your own!)

(function() {
  window.addEventListener("load", init);

    let flag = 1;
    let ind = 0;



  function init() {


    id("animate-btn").addEventListener("click",animateText);
    id("reset-btn").addEventListener("click", reset);

  }

  /**
   * Toggles typing animation - if animation is already in progress,
   * pauses it. Otherwise, starts animation.
   */

  function animateText() {
    let output = document.getElementById("output");

      window.setInterval(function () {
        // text has to be here so that every time timer ticks it picks up on new input
        let text = document.querySelector("input").value;

        if (text[ind] && flag %2 === 0) {
            console.log(ind, text.length);
            output.innerHTML += text[ind];
            ind++;
          }
        else{
          // Part 2: Change Start to start/stop - what should happen
          // when we pause animation? Restart at index 0 or keep the current index? ---> kept at current index
          clearInterval();
        }
      }, 1000);

    flag ++;
  }

  // Part 3: Implement reset: Clear the text, output, and timer.
  function reset() {
    id("input-text").value = "";
    id("output").innerHTML = "";
    ind = 0;
    clearInterval();

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
