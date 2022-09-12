var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var leftpath = "/images/dice" + (randomNumber1) + ".png"
var rightpath = "/images/dice" + (randomNumber2) + ".png"
document.querySelector(".dice .img1").setAttribute("src", leftpath);
document.querySelector(".dice .img2").setAttribute("src",rightpath);
if (randomNumber1 > randomNumber2) {
     document.querySelector(".container h2").textContent = "✌Player 1 wins!!✌";
}
else if (randomNumber1 < randomNumber2) {
     document.querySelector(".container h2").textContent = "✌Player 2 wins!!✌";
}
else {
     document.querySelector(".container h2").textContent = "🤜Match Draw!!🤛";
}

