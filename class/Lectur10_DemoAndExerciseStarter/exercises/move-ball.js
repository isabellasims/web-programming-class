/**
Exercise 2. JS Event  (10pts)
 2A. Click the button so the red ball move to the right.
 2B.   Click the button the red ball will bounce back and force.
 **/

window.addEventListener("load",init);


function init() {
    let button = document.getElementById("button");
    let button2 = document.getElementById("button2");
    let ball = document.getElementById("ball");
    ball.style.left = "0px";
    let flag;
    ball.style.position = "relative";
    button.addEventListener("click",function(){
        ball.style.left = parseInt(ball.style.left) + 50 + "px";
        flag = 1;
        console.log(flag);
        console.log("button pressed")
    });


    button2.addEventListener("click",function(){
        console.log("b4 2",flag);
        if(flag === 1){
            ball.style.left = "0px";
            flag = 0;
            console.log(flag);
        }

        else{
            ball.style.left = "50px";
            flag = 1;
        }

        console.log("button pressed")
    });

}
