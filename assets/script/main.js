let interaction = document.querySelector("a:nth-of-type(12)");
const rainbow = [
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"purple",
	"#050840",
];
let count = 0;

interaction.addEventListener("click", jumpHandler);
interaction.addEventListener("animationend", jumpHandler);

function jumpHandler() {
	interaction.classList.toggle("jump");
}

let body = document.querySelector("body");
let link = document.querySelectorAll("a");
let section = document.querySelector("section");
let BFrontend = document.querySelector("a:first-child");
let BDesign = document.querySelector("a:nth-of-type(2)");
let BEnTeken = document.querySelector("a:nth-of-type(3)");
let BDevelepment = document.querySelector("a:nth-of-type(4)");
let BSprint = document.querySelector("a:nth-of-type(5)");
let BCode = document.querySelector("a:nth-of-type(20)");
let BFix = document.querySelector("a:nth-of-type(6)");

BFrontend.addEventListener("click", gradient);
BDesign.addEventListener("click", revers);
BEnTeken.addEventListener("click", gravity);
BEnTeken.addEventListener("animationend", gravity);
BDevelepment.addEventListener("click", imbignow);
BDevelepment.addEventListener("animationend", imbignow);
BSprint.addEventListener("mouseout", left);
BCode.addEventListener("dblclick", dbjump);
BCode.addEventListener("animationend", dbjump);
BFix.addEventListener("touchmove", wiggle);
BFix.addEventListener("animationend", wiggle);
// window.addEventListener("load", vallen);
// window.addEventListener("animationend", vallen);
window.addEventListener("resize", shake);
window.addEventListener("animationend", shake);
window.addEventListener("keydown", rain);

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

function dbjump() {
	BCode.classList.toggle("dbjump");
}

function wiggle() {
	BFix.classList.toggle("wiggle");
}

function vallen() {
	section.classList.toggle("vallen");
}

function shake() {
	section.classList.toggle("shake");
}

function rain() {
	body.style.backgroundColor = rainbow[count];
	count = count + 1;
	if (count == rainbow.length) {
		count = 0;
	}

	// Rainbow is de array waarin de kleuren staan
	// count is de variable die optelt om naar de volgende kleur te gaan
	// if stament is zodat count niet boven de kleuren heen komt
}
