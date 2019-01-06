//see w3schools.com - manual slideshow with indicators (css)

//declaring variable
var menuIndex = 1; //1 = first picture
showDivs(menuIndex); //display first image

//declaring function for left and right buttons - add/subtract 1
function plusDivs(n) { //subtracts/adds 1 to menuIndex
	showDivs(menuIndex += n);
	}

//declaring function for section tabs - each tab only corresponds with one section
function currentDiv(n) {
	showDivs(menuIndex = n);
}

//declaring function for buttons and tabs - tells which section to show
function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("gallery-container");
	var dots = document.getElementsByClassName("section-tab");
	if (n > x.length) {menuIndex = 1}
	if (n < 1) {menuIndex = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none"; //hides all elements with class name
		}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" current-tab", "");
	}
	x[menuIndex-1].style.display = "block"; //displays element with given menuIndex
	dots[menuIndex-1].className += " current-tab";
} //don't forget your curly braces y'all, or you'll be struggling for hours like me

//curly brackets form code blocks to be executed at same time

//Syntax
/*
function name(parameter1, parameter2, parameter3) {
    code to be executed
	}

Objects are variables containing named values (properties) or methods:
	var car = {type:"Fiat", model:"500", color:"white"}
Accessed via:
	objectName.propertyName or objectName["propertyName"]

Methods are actions that can be performed on objects and are stored in properties as function definitions:
	var person = {firstName:"John", lastName:"Doe"}
	property value of "fullName" = function() {return this.firstName + " " + this.lastName}

Accessed via:
	objectName.methodName ()
*/
