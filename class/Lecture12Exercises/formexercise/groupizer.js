(function() {
  "use strict";

  window.addEventListener("load", init);

  // initial number of names to display
  let namesToDisplay = 3;

  function init() {
    // 1. Add event listener for clicking the #add-btn
    const SUBMIT = document.getElementById("add-btn");

    let s;
    SUBMIT.addEventListener("click", function () {
      submitActions();

    });

    let size = document.getElementById("group-size");

    // set initial view
    let f = document.getElementsByTagName("li");
    f[3].setAttribute("style","display: none");

    size.addEventListener("change", function () {
      updateSize(size);

    });
  }

  /** Updates fields from size selection*/
  function updateSize(size){

    let fields = document.getElementsByTagName("li");

    if(size.value === "2" ){
      fields[1].setAttribute("style","display: inherit");
      fields[2].setAttribute("style","display: none");
      fields[3].setAttribute("style","display: none");
      namesToDisplay = 2;
    }
    else if (size.value === "3" ) {
      fields[0].setAttribute("style","display: inherit");
      fields[1].setAttribute("style","display: inherit");
      fields[2].setAttribute("style","display: inherit");
      fields[3].setAttribute("style","display: none");
      namesToDisplay = 3;

    }
    else{
      fields[0].setAttribute("style","display: inherit");
      fields[1].setAttribute("style","display: inherit");
      fields[2].setAttribute("style","display: inherit");
      fields[3].setAttribute("style","display: inherit");
      namesToDisplay = 4;
    }
    return namesToDisplay;
  }

  /** Writes group member names to the DOM and updates colors*/
  function submitActions(){
    let names = document.getElementsByTagName("input");
    let p = document.createElement("p");
    p.innerHTML = "Now the group is formed";
    document.body.appendChild(p);

    for(let i = 1; i <= namesToDisplay; i++){ // exclude group name from loop
      // add pink
      names[i].setAttribute("style","background-color: pink" );
      // add text
      let p = document.createElement("p");
      p.innerHTML = names[i].value;
      document.body.appendChild(p);
    }
    // add yellow
    let groupForm = document.getElementById("group-name");
    groupForm.setAttribute("style","background-color: yellow" );
  }




})();
