"use strict" 

//default state
document.getElementById("clear").disabled = true;

document.getElementById('input').addEventListener("keypress", function (e) {
	var userInput = document.getElementById('input').value; 
	
	if (userInput !== "") {
		document.getElementById("clear").disabled = false;
	}

	if (e.keyCode === 13) {
        Chatty.storeMsg(userInput);
        var clearOne = document.getElementById("input").value = '';
       	var clearTwo = document.getElementById("clear").disabled = true;
       	return [clearOne, clearTwo]; 
    }

});

document.getElementById('output').addEventListener('click', function touch(){
	Chatty.deleteMsg(event.target);	
})


document.getElementById("clear").addEventListener("click", function erase() {
		document.getElementById('output').innerHTML = "";
});

document.getElementById('dark').addEventListener('change', function dimLights() {
	document.getElementById("wrapper").classList.toggle("dim"); 
	});

document.getElementById('largify').addEventListener('change', function blastIt() {
		document.getElementById("output").classList.toggle("largify"); 
	});

document.getElementById('tag').addEventListener('change', function tagIt() {
		document.getElementById("output").classList.toggle("tag"); 
	});

document.getElementById('move').addEventListener('change', function move() {
		document.getElementById("body").classList.toggle("move"); 
	});


