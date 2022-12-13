let interaction = document.querySelector("a:nth-of-type(12)");

interaction.addEventListener("click", jumpHandler);
interaction.addEventListener("animationend", jumpHandler);

function jumpHandler() {
	interaction.classList.toggle("jump");
}

let BFrontend = document.querySelector("a:first-child");
let body = document.querySelector("body");
let link = document.querySelectorAll("a");
let BDesign = document.querySelector("a:nth-of-type(2)");
let BEnTeken = document.querySelector("a:nth-of-type(3)");
let BDevelepment = document.querySelector("a:nth-of-type(4)");
let BSprint = document.querySelector("a:nth-of-type(5)");
let section = document.querySelector("section");

BFrontend.addEventListener("click", gradient);
BDesign.addEventListener("click", revers);
BEnTeken.addEventListener("click", gravity);
BEnTeken.addEventListener("animationend", gravity);
BDevelepment.addEventListener("click", imbignow);
BDevelepment.addEventListener("animationend", imbignow);
BSprint.addEventListener("mouseout", left);

function gradient() {
	body.classList.toggle("kleurtje");
}

function revers() {
	section.classList.toggle("omdraaien");
}

function gravity() {
	BEnTeken.classList.toggle("down");
}

function imbignow() {
	BDevelepment.classList.toggle("grow");
}

function left() {
	BSprint.classList.toggle("left");
	setTimeout(() => {
		BSprint.classList.toggle("left");
	}, 1000);
}
