// color the rectangle and move them randomlyi
// Today's goal :
//   - rectangles randomly are colored when the color button is clicked
//   - when the select is changed the number of rectangles changes to match it

// in the next class we will make the move function work

// here is a road map of the functions you need to implement.

(function() {
	"use strict";

	window.onload = function() {
		var colorButton = document.getElementById("color");
		colorButton.onclick = colorIt;

		var moveButton = document.getElementById("move");
		moveButton.onclick = moveIt;

		var numSelect = document.getElementById("count");
		numSelect.onchange = createRectangles;

		createRectangles();
		colorIt();
		moveIt();
	};

	// creates the number of rectangles specified in the select.
	function createRectangles() {
		// resets the rectangle space every time drop down is changed
		document.getElementById("rectanglearea").innerHTML = "";
		let ar = document.getElementById("rectanglearea");
		var count = document.getElementById("count").value;


		// finish the functions here
		for(let i = 0; i < count; i++){
			let rect2 = document.createElement("new_rect");
			rect2.classList = "rectangle";
			ar.appendChild(rect2);


		}
		// let rect2 = document.createElement("new_rect");
		// rect2.classList = "rectangle";
		// ar.appendChild(rect2);





	}

   	// Randomly color all of the rectangles
    function colorIt() {

		// let r = Math.floor(Math.random() * 256);
		// get a list of the rect objects
		let rects = document.getElementById("rectanglearea").childNodes;
		let r;
		let g;
		let b;
		// let red = r.toString();
		// let green = r.toString();
		// let blue = r.toString();

		for(let i = 0; i < rects.length; i++){
			r = Math.floor(Math.random() * 256);
			g =  Math.floor(Math.random() * 256);
			b = Math.floor(Math.random() * 256);

			rects[i].style.backgroundColor = "rgb("+ r +","+ g +","+ b +")"

		}


		// rects[1].style.backgroundColor = "rgb("+ red +","+ green +","+ blue +")"

		//rects[1].setAttribute("style", "background-color:"+(r,r,r));


    	// your code goes here
    	//you might find the following code snippts useful
    	//var r = Math.floor(Math.random() * 256);
    }

    // // WARNING: incomplete
	// Randomly position all the rectangles
	function moveIt() {
		var rects = document.querySelectorAll("#rectanglearea .rectangle");
		var area = document.getElementById("rectanglearea");
		for(var i = 0; i < rects.length; i++) {

		}
	}



})();
