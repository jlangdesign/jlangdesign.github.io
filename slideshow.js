var myIndex = 0;
carousel();

//JS etiquette - use 4 spaces instead of one tab indent

function carousel() {
	var x = document.getElementsByClassName("fadeSlides");
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none";
		}
	myIndex++;
	
	if (myIndex > x.length) {
	    myIndex = 1
    }
    
	x[myIndex-1].style.display = "block";
	setTimeout(carousel, 5000); //5 sec
}	
		