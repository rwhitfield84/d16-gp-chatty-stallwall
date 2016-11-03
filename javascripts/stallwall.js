"use strict" ;

$("#clear").disabled = true;
$('#input').keypress(function (e) {
	let userInput = $('#input').val(); 

if (userInput !== "") {
	$("#clear").disabled = true;
}

if (e.keyCode === 13) {
	Chatty.showMsg(userInput);
	let clearOne =$("#input").val('');
	let clearTwo =$("#clear").disabled = false;
	return [clearOne, clearTwo]; 
}

});

$(document).on('click','.btn',function() {
	$(this).closest(".msg").remove();
});


$("#clear").click (function erase() {
$	('#output').html('');
});

$('#dark').change(function dimLights() {
	$("#wrapper").toggleClass("dim"); 
});

$('#largify').change(function blastIt() {
	$("#output").toggleClass("largify"); 
});

$('#tag').change(function tagIt() {
	$("#output").toggleClass("tag"); 
});

$("#switchStalls").change(function() {
	if($(this).val() == "ladies") {
		$(".cover").toggleClass("ladies");
	}else if($(this).val() == "wood") {
		$(".cover").toggleClass("wood");
	} else if($(this).val() == "dog") {
		$(".cover").toggleClass("dog");
	}else if($(this).val() == 'default') {
		$(".cover").toggleClass("default");
}
});







