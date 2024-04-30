var randomnumber1=Math.ceil(Math.random()*6);

document.querySelector("img.img1").setAttribute("src", "images/dice"+randomnumber1+".png");

var randomnumber2=Math.ceil(Math.random()*6);

document.querySelector("img.img2").setAttribute("src", "images/dice"+randomnumber2+".png");

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins"
} else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins"
} else{
    document.querySelector("h1").innerHTML="Its a Tie"
}
