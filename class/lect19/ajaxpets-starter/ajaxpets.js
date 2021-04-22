/**
 *
 * A webpage for fetching cute pet photos. Puppies (the best) or
 * kitties will be populated on the page after the user selects their desired
 * pet type.
 */
(function() {
  "use strict";
  const URL = "https://courses.cs.washington.edu/courses/cse154/webservices/pets/ajaxpets.php?animal=";
  let resp;
  let inputs;
  let kittyBox;
  let puppyBox

  window.addEventListener("load", initialize);


  /*
   * TODO: What do we need to initialize?
   */
  function initialize() {
    inputs  = document.querySelectorAll("input");
    kittyBox = inputs[0];
    puppyBox = inputs[1];


    // if(kittyBox.checked === true){
    //   console.log("true");
    // }
    // if (puppyBox.checked === true){
    //   console.log("puppy");
    // }

    kittyBox.onclick = function(){
      console.log("kitty selected");
      makeRequest();

    };
    puppyBox.onclick = function(){
      console.log("puppy selected");
      makeRequest();

    };

  }

  /*
   * TODO: Fetch data from the CSE 154 ajax pets api!
   */
  function makeRequest() {
    id("pictures").innerHTML = "";
    let animal;
    if(kittyBox.checked === true){
      animal = "kitty";
      console.log(animal);
    }
    else if (puppyBox.checked === true){
      animal = "puppy";
      console.log(animal);
    }

    let url = URL + animal;
    fetch(url)
        .then(response => response.text())
        .then(data => resp = data)
        .then(function(){
          console.log(resp.split(/\n/));
          let url_array = resp.split(/\n/);
          for(let i = 0; i < url_array.length; i++){
            let img = document.createElement("IMG");
            img.src = url_array[i];
            id("pictures").appendChild(img);

          }
          // let img = document.createElement("IMG");
          // img.src = resp;
          // console.log(resp);
          // fetch(resp)
          //     .then(function(){
          //       let img = document.createElement("IMG");
          //       img.src = imageSource;
          //       img.setAttribute('id', imageId);
          //       document.getElementById(containerId).appendChild(img);
          //       return imageId;
          //
          //     })

      //    showTriviaResult(fact);

        });


  }

  /**
   * TODO: Implement any other functions you need
   */

  /* ------------------------------ Helper Functions  ------------------------------ */

  /*
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} response - response to check for success/error
   * @return {object} - valid result text if response was successful, otherwise rejected
   *                    Promise result
   */
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300 || response.status == 0) {
      return response.text();
    } else {
      return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
