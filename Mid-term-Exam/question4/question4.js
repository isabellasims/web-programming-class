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
