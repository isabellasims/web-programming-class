(function() {
    "use strict";
    let total = 0;
    let totalText;
    window.onload = function() {
        totalText = document.getElementById("total");
        totalText.innerHTML = "total";
        document.getElementById("five").onclick = updateFive;
        document.getElementById("one").onclick = updateOne;
        document.getElementById("two").onclick = updateTwo;
        document.getElementById("ten").onclick = updateTen;
    };

    function updateOne(){
        console.log(total);
        total +=1;
        totalText.innerHTML = "total " + total ;
        return total;

// your code goes here
    }
    function updateTwo(){
        total +=2;
        totalText.innerHTML = "total " + total ;
        return total;
// your code goes here
    }
    function updateTen(){
        total +=10;
        totalText.innerHTML = "total " + total ;
        return total;
// your code goes here
    }

    function updateFive(){
        total +=5;
        totalText.innerHTML = "total " + total ;
        return total;
// your code goes here
    }

})();
