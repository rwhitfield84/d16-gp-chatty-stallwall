"use strict" 

//default state
document.getElementById("clear").disabled = true;


document.getElementById('input').addEventListener("keypress", function (e) {
	var userInput = document.getElementById('input').value; 
	
	if (userInput !== "") {
		document.getElementById("clear").disabled = false;
	}

	if (e.keyCode === 13) {
		document.getElementById('output').innerHTML += "<p class='message'>" + userInput +"</p>";
	}

});


document.getElementById("clear").addEventListener("click", function erase() {
		document.getElementById('output').innerHTML = "";
});

document.getElementById('dark').addEventListener('change', function dimLights() {
	document.getElementById("wrapper").classList.toggle("dim"); 
	});

document.getElementById('largify').addEventListener('change', function blastIt() {
		document.getElementById("wrapper").classList.toggle("largify"); 
	});


//document.getElementById('largify').addEventListener('click')