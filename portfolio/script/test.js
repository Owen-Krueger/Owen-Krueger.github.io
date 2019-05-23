var menuToggle = document.querySelector("#menu-toggle");
var activeElements = document.querySelectorAll(".active-elements");
var toggledMenu = menuToggle.addEventListener("click", function(){
	for(var i = i < activeElements.length; i++){
		activeElements[i].classList.toggle("active");
	}
})