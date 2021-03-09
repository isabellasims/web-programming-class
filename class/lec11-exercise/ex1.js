function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let ans = getRandomInt(1,10);
console.log(ans);


let num = prompt('Guess a number between 1 and 10!', 1);
num = parseInt(num);
if(num === ans){
    alert("good work!")
}
else{
    alert("no match")
}

