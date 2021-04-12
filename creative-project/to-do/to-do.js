(function() {
    "use strict";
    window.onload = function() {

        // let div = document.getElementsByTagName("div");

        // let remove = document.createElement("button");
        // remove.id = "remove";
        // remove.innerHTML = "remove";
        //
        // // add remove button
        // div[0].appendChild(remove);

        document.getElementById("add").onclick = addItem;
        document.getElementById("rewards-add").onclick = addItemGoals;

        // document.getElementsByClassName("add").onclick = addItem;
        document.getElementById("remove").onclick = removeItem;


        let radio_btns = document.querySelectorAll('input[type="radio"]');
        radio_btns[0].onclick = function(){
            document.querySelector("body").setAttribute("style", "background-color: ghostwhite")
        };
        radio_btns[1].onclick = function(){
            document.querySelector("body").setAttribute("style", "background-color: pink")
        };
        radio_btns[2].onclick = function(){
            document.querySelector("body").setAttribute("style", "background-color: #add8e6")
        };

       // if(radio_btns[1].checked === true){
        //     document.querySelector("body").setAttribute("style", "background-color: yellow")
        // }

    };

    function addItem(){

        let item = document.getElementsByTagName("input");
        let ul = document.getElementById("list");

        // create list item and assign text box value to its inner html
        let li = document.createElement("li");
        li.innerHTML = item[3].value;

        // add list item to ul
        ul.appendChild(li);

        // clear text box
        console.log(item);
        item[3].value = "";
        updateColors();
    }

    function addItemGoals(){

        // let item = document.getElementById("goal-item");
        let item = document.getElementsByTagName("input");
        let ul = document.getElementById("goal-list");

        // create list item and assign text box value to its inner html
        let li = document.createElement("li");
        li.innerHTML = item[4].value;

        // add list item to ul
        ul.appendChild(li);

        // clear text box
        console.log(item);
        item[4].value = "";
        updateColors();
    }


    function removeItem(){
        let items = document.getElementsByTagName("li");
        // let items = document.getElementsByTagName("item");

        // the element of the text currently in the input box
        let textElement = document.getElementsByTagName("input");

        // the text to remove
        let text = textElement[3].value;

        for(let i = 0; i < items.length; i++){
            if(items[i].innerHTML.toLowerCase() === text.toLocaleLowerCase()){
                items[i].remove();
                break; // removes only first
            }
        }
        // clear text box input
        textElement[3].value = "";
      //  updateColors();
    }

    function updateColors(){
        // get all li items
        let fields = document.getElementsByTagName("li");


        // first item not colored so c starts at 1
        let c =1;
        for(let i = 0; i < fields.length; i ++){

            fields[i].setAttribute("style", "font-size: 15px");

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
