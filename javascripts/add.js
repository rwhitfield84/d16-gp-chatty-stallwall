"use strict"
var addMsg = (function add(random){
	var msgArray = [];

	return {
		storeMsg: function(msg){
			var i = Math.floor((Math.random() * 100) + 1);
        	var string = "<p class='msg' " + " 'id=p" + i + "'>" + msg + "<button class='btn'>" + "DELETE" + "</button>"  + "</p>";
			msgArray += string;
			var spot = document.getElementById("output");
			spot.innerHTML += msgArray;
			function getString(spot) {
				touch(spot);
			}
		},

		readMsg: function() {
			return msgArray;
		},

	}
	})();
