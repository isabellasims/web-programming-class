// Exercise 4: Reverse a number (5pts)
//
// Write a JavaScript function that reverse a number. E.g: 25368 -> 86352
// Step 1: Create a simple .html file.
//     Step 2: Write a function and save it as ReverseString.js
// Step 3: link the .js into the <head></head> in your .html
// First change the number to string.
//     Then n.split(“”).reverse().join(“”);
// Again, you can create a button to trigger the function or use alter.

num = 25368;
function reverseString(num){
    let string = num.toString();
    string = string.split("").reverse().join("");
    return(string);

}
document.write("the num: ", num.toString());
document.write("<br>");
document.write("the reverse: ");

document.write(reverseString(num));
