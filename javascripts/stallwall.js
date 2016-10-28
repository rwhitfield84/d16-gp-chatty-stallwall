"use strict" 

//default state
document.getElementById("clear").disabled = true;

document.getElementById('input').addEventListener("keypress", function (e) {
	var userInput = document.getElementById('input').value; 
	
	if (userInput !== "") {
		document.getElementById("clear").disabled = false;
	}

	if (e.keyCode === 13) {
        var i = Math.floor((Math.random() * 100) + 1);
        var string = "<p class='msg' " + " 'id=p" + i + "'>" + userInput + "<button class='btn'>" + "DELETE" + "</button>"  + "</p>";
        document.getElementById('output').innerHTML += string;
        var msg = document.getElementById("output").innerHTML;
    }

});



document.getElementById('output').addEventListener('click', function touch(){
	if (event.target.className === "btn"){
		var parent = event.target.parentNode;
		console.log(parent);
		parent.remove();
	}
	
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


