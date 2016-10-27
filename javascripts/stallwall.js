"use strict" 

document.getElementById('input').addEventListener("keypress", function (e) {

	if (e.keyCode === 13) {
		var userInput = document.getElementById('input').value; 
		document.getElementById('output').innerHTML += "<p class='message'>" + userInput +"</p>";
		console.log(userInput);
		//still needs to run through the IIFE
	}

})

