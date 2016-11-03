"use strict";

let Chatty = (function(oldChatty) {
    let newMessage = [];
    let counter = -1;

oldChatty.returnMsg = function(messages) {
    $.each(messages.graffiti,function(index,item) {
    Chatty.showMsg(item);
    });
},

oldChatty.showMsg = function(newMsg) {
    counter++; 
    newMessage.push(newMsg);
    $("#output").append(`<li class='msg'>${newMsg}<button class='btn' id='${counter}'>Scrub</button></li>`);
},

oldChatty.returnAllMsg = function() {
    return newMessage;
};

    return oldChatty;
})(Chatty || {});

Chatty.loadMessages(Chatty.returnMsg);


