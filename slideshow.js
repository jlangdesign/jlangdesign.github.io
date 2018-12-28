/**
 * Code from Daniel Guillan on CodePen:
 * https://codepen.io/danielguillan/pen/duiAq
 */

// Get images
var current = 0;
var slides = document.getElementsByClassName("slide-img");

setInterval(function() {
	// Set opacity of all slides to 0
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.opacity = 0;
	}

	// If current slide is last slide, loop back to first slide
	// Else, go to next slide in array
	if (current != slides.length - 1) {
		current++;
	} else {
		current = 0;
	}

	// Set opacity of current slide to 1
	slides[current].style.opacity = 1;
}, 3000); // 3000 ms = 3 s
