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

        let div = document.getElementsByTagName("div");

        let remove = document.createElement("button");
        remove.id = "remove";
        remove.innerHTML = "remove";

        // add remove button
        div[0].appendChild(remove);

        document.getElementById("add").onclick = addItem;
        document.getElementById("remove").onclick = removeItem;
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
        console.log(item);
        item[0].value = "";
        updateColors();
    }


    function removeItem(){
        let items = document.getElementsByTagName("li");

        // the element of the text currently in the input box
        let textElement = document.getElementsByTagName("input");

        // the text to remove
        let text = textElement[0].value;

        for(let i = 0; i < items.length; i++){
            if(items[i].innerHTML.toLowerCase() === text.toLocaleLowerCase()){
                items[i].remove();
                break; // removes only first
            }
        }
        // clear text box input
        textElement[0].value = "";
        updateColors();
    }

    function updateColors(){
        // get all li items
        let fields = document.getElementsByTagName("li");

        // first item not colored so c starts at 1
        let c =1;
        for(let i = 0; i < fields.length; i ++){

            if(c%2 === 0) {
                fields[i].setAttribute("style", "background-color: yellow");
            }
            else{
                fields[i].setAttribute("style", "background-color: transparent");
            }
            c++;

        }
    }

})();
