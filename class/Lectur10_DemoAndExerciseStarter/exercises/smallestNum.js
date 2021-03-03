/**
Exercise 3:   Smallest Number  (5pts)

Write a function named findMin that accepts an array of numbers as a parameter
 and returns the smallest number in the array. For example,
 if an array variable named nums stored the following values:

    let nums = [-1, 3.2, 12, 15, -4, 1, -12.5, 1, 8];

Then the call of findMin(nums) should return -12.5 since that is the smallest numerical value in the array.
 You may assume that the array passed to your function is non-empty and contains only number types.
 To display results, you can use document.write()
 Or you can create a button to trigger your function

<button onclick=”findmin();">Click me!</button>

 **/
let nums = [-1, 3.2, 12, 15, -4, 1, -12.5, 1, 8];
document.write("The list: ");
document.write(nums);
document.write("<br>");
function findMin(nums){
    let sorted = nums.sort(function(a,b){return b -a});

    console.log(sorted);
    return(sorted[sorted.length-1])
}
document.write("The smallest item: ");
document.write(findMin(nums));
