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

	}

   	// Randomly color all of the rectangles
    function colorIt() {
		let rects = document.getElementById("rectanglearea").childNodes;
		let r;
		let g;
		let b;

		for(let i = 0; i < rects.length; i++){
			r = Math.floor(Math.random() * 256);
			g =  Math.floor(Math.random() * 256);
			b = Math.floor(Math.random() * 256);

			rects[i].style.backgroundColor = "rgb("+ r +","+ g +","+ b +")"

		}


    }

    // // WARNING: incomplete
	// Randomly position all the rectangles
	function moveIt() {


		let rects = document.getElementById("rectanglearea").childNodes;
		let area = document.getElementById("rectanglearea");

		for(let i = 0; i < rects.length; i++) {
			// allow rects to move
			rects[i].classList.add("movable");

			// ty stack overflow
			let maxH = parseInt(window.getComputedStyle(area).height) - parseInt(window.getComputedStyle(rects[i]).height);
			let maxW = parseInt(window.getComputedStyle(area).width) - parseInt(window.getComputedStyle(rects[i]).width);
			// move y location
			rects[i].style.top = Math.floor(Math.random() * maxH) + "px";
			// move x location
			rects[i].style.right = Math.floor(Math.random() * maxW) + "px";
		}




	}



})();
