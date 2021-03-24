// 4. (20Pts ) Grade calculator
//
// Write an unobtrusive JavaScript code to add behavior to the page that has a user interface for
// entering grades on homework assignments. You can download the HTML and CSS code in the folder Question 1.
//
// You will compute the percentage of points earned, with an optional curve.
// When "Compute!" is clicked, your JS code should use the values in the text boxes to
// compute the percentage (rounded to the nearest percent).
// If the "Curve +5" checkbox is checked, add +5 percent up to a maximum of 100% total.
//
// You should insert the percentage into the page as a new div added to the end (bottom)
// of the existing page section with the id of resultsarea.
// If the overall percentage is 60% or more, give your newly created div a CSS class of pass;
// otherwise give it a class of fail. Each time the user clicks "Compute!",
// you will insert such a new div; this means that several divs would be there after several clicks of "Compute!".
//
// In the code shown there are 3 assignments, but your code should work for any number of assignments ≥ 1.
// When "Clear" is clicked, all text in all of the input text boxes should be erased.
// Assume valid input; that is, assume that when "Compute!" is clicked,
// the user will have already typed valid text into every box that can be interpreted as an integer.
// You may assume that Prototype is also included in the page.
//
// The current screen shots show the initial state after scores have been entered and
// Compute has been clicked as well as when the Curve+5 is checked.

//An example of unobtrusive JS.

// link I used for math: https://sciencing.com/calculate-class-grade-7379797.html
(function() {
    "use strict";
    window.onload = function() {


        let computeButton = document.getElementById("compute");
        let resultsDiv = document.getElementById('resultsarea');

        //event handlder, another anonymous function
        computeButton.addEventListener("click",function(){
            //let resultsArea = document.getElementById("resultsarea");

            // add new div & p for each score
            let newResult = document.createElement("div");
            let p = document.createElement("p");
            // p.innerHTML = 'Pass!';
            //
            // newResult.appendChild(p);
            // resultsDiv.append(newResult);

            // get list of score elements
            let earned = document.getElementsByClassName("earned");
            // get text value of each score element
            let earned1 = earned[0].value;
            let earned2 = earned[1].value;
            let earned3 = earned[2].value;

            // get list of max elements
            let max = document.getElementsByClassName("max");
            // get text value of each max element
            let max1 = max[0].value;
            let max2 = max[1].value;
            let max3 = max[2].value;

            // calc all 3 weighted scores
            let score1 = earned1/max1;
            let score2 = earned2/max2;
            let score3 = earned3/max3;

            let final = ((earned1 + earned2 + earned3)/(max1 + max2 + max3))*100;

            p.innerHTML = final;

            newResult.appendChild(p);
            resultsDiv.append(newResult);

            console.log(earned1/max1);











        })



    };
})();
