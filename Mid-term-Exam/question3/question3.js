// Write JavaScript code to add behavior to the following page for keeping track of a to-do-list.
// The page UI allows the user to type an item into a text box.
// The user can click the "add" button to add the item to the bottom of the list.
// Each word in the phrase should be inserted as a li, inside a ul with the id of list.

// If the user wishes to remove an item he or she can type the text of the item he or
// she wishes to remove in the text box and click the "remove" button.
//
// This should be case insensitive. For example, if the list only contains "foo"
// and the user tries to remove "FoO", it should be removed. If the user tries to remove an
// item that is in the list multiple times only the first occurrence should be removed.

// The items should have background colors that alternate between white and yellow
// (first white, then yellow, then white, yellow, etc.).
// This should still be the case no matter how many items are removed or added
// and no matter what order these operations are done in.
//
// You may not use the CSS3 nth-child pseudo selector to do this.
// The code should work for multiple clicks of the buttons.
// On each click it should clear any previous information you typed in the input boxes.
// Do not use any JavaScript libraries such as jQuery or Prototype.

(function() {
    "use strict";
    window.onload = function() {

        // let add = document.getElementById('add');
        // add.addEventListener("click", function () {
        //     addItem();
        // });
        document.getElementById("add").onclick = addItem;
    };

    function addItem(){

        let item = document.getElementsByTagName("input");
        let ul = document.getElementById("list");

        // create list item and assign text box value to its inner html
        let li = document.createElement("li");
        li.innerHTML = item[0].value;

        // add list item to ul
        ul.appendChild(li);

        // clear text box
        item[0].value = "";
        updateColors();



// your code goes here
    }
    function updateColors(){
        // get all li items
        let fields = document.getElementsByTagName("li");

        // first item not colored


        let c =1;
        for(let i = 0; i < fields.length; i ++){

            if(c%2 === 0) {
                fields[i].setAttribute("style", "background-color: yellow");
            }
            c++;

        }
    }

})();



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
