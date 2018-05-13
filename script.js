var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

(function onStart() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}());

function setGradient() {
	// ne radi sa + ");" tacka zarez, iako tako ide, shvatiti zasto!
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

// RGB ne radi, prima samo heksadecimalne, otkriti zasto!
function randomGradient() {
	color1.value = "rgb(" + 
			Math.floor((Math.random() * 255) + 1) + ","
			+ Math.floor((Math.random() * 255) + 1) + ","
			+ Math.floor((Math.random() * 255) + 1) + ")";
	color2.value = "rgb(" + 
			Math.floor((Math.random() * 255) + 1) + ","
			+ Math.floor((Math.random() * 255) + 1) + ","
			+ Math.floor((Math.random() * 255) + 1) + ")";

	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomGradient);