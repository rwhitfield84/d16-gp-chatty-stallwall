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
        var string = "<p class='msg' " + " 'id=p" + i + "'>" + userInput + "<button class='btn'>" + "SCRUB" + "</button>"  + "</p>";
        document.getElementById('output').innerHTML += string;
        var msg = document.getElementById("output").innerHTML;
        var clearOne = document.getElementById("input").value = '';
       	var clearTwo = document.getElementById("clear").disabled = true;
       	return [clearOne, clearTwo]; 
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

var select = document.getElementById('switchStalls');
select.addEventListener('change', function move() {
		document.getElementById("cover").className = '';

		var selectedId = select[select.selectedIndex].id;
		console.log(selectedId);
		if (selectedId == 'ladies') {
		document.getElementById("cover").classList.add('ladies');
		} 
		else if (selectedId == 'wood') {
		document.getElementById("cover").classList.add('wood');

		}
		else if (selectedId == 'dog') {
		document.getElementById("cover").classList.add('dog');

		}
		else if (selectedId == 'default') {
		document.getElementById("cover").classList.add('default');

		}
	});


