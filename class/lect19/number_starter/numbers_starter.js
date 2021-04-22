/**
 * Fetches trivia about a number a user inputs (or random if they click the "Fetch Random
 * Number Fact!" button) and displays the trivia on the page.
 */
"use strict";
(function() {
  const URL = "http://numbersapi.com/";

  window.addEventListener("load", init);
  let fact;


  /**
   * Sets up event listeners for fetching number trivia.
   * first get the number from user input
   */
  function init() {
   id("fetch-num").addEventListener("click", function(){
        // your code here
     let numberValue = id("num-box").value;
     fetchNum(numberValue);
     // console.log(fetchNum(numberValue));
     // console.log(fact);

     // let val =  fetchNum(numberValue);
     // console.log("val",val);
     // console.log(fact);
     //document.write(userInput);


    });
    id("fetch-random-num").addEventListener("click", function(){
      fetchNum("random");
    });
  }


  /**
   * Fetches trivia data about the given numberValue and displays it on the page if
   * successful, logging an error to the console if an error occurred during the request.
   * @param {string} numberValue - value of number to request trivia for.
   */
  // ,{credentials: 'include'}

  function fetchNum(numberValue) {
    // URL with the specified number
    let url = URL + numberValue;
    fetch(url)
        .then(response => response.text())
        .then(data => fact = data)
        .then(function(){
          console.log(fact);
          showTriviaResult(fact);

        });


  }

  /**
   * Displays the trivia result response to the #output paragraph.
   * @param {string} response - response string from Numbers API request
   */
  function showTriviaResult(response) {
    id('output').innerHTML = response;

  }

  /* ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} response - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  function checkStatus(response) {
    if (!response.ok) {
      throw Error("Error in request: " + response.statusText);
    }
    return response; // a Response object
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

})();
