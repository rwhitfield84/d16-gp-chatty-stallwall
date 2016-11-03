"use strict";

let Chatty = (function(oldChatty) {
	oldChatty.removeMsg = function(dM, dMiD) {
		let msgArray = Chatty.returnAllMsg();
		let itemSpliced = msgArray.splice(dMiD, 1);
	dM.remove();
};
return oldChatty;
})(Chatty || {});
