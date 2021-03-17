/**
Starter code for Groupizer page to demonstrate different types of events,
 * the module pattern, and DOM manipulation.
 */
(function() {
  "use strict";

  window.addEventListener("load", init);

  // Note: This function is called as soon as the window is loaded (and the browser
  // has created the HTML DOM for the page)
  function init() {
    // 1. Add event listener for clicking the #add-btn
    const SUBMIT = document.getElementById("add-btn");


    SUBMIT.addEventListener("click", function(){
      //alert("sub clicked")
      showGroup();
    });


    // 2. Add event listener for changing the #member-size dropdown

  }

  /** Writes group member names to the DOM */
  function showGroup(){
    let names = document.getElementsByTagName("input");
    let p = document.createElement("p");
    p.innerHTML = "Now the group is formed";
    document.body.appendChild(p);
    for(let i = 1; i < names.length; i++){ // exclude group name from loop
      let p = document.createElement("p");
      p.innerHTML = names[i].value;
      document.body.appendChild(p);
    }
  }

  function addColor(){
    let groupForm = document.getElementById("group-name");
    groupForm.setAttribute("style")
        style = {backgroundColor: yellow};
  }



})();
