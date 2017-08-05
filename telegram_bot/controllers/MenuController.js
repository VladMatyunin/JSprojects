var constants = require('./../constants.js');
var userProvider = require('./../providers/UserProvider.js');
function handle(subRoute, msg){
    let envoke = MAPPINGS[subRoute];
    envoke(msg);
}

const MAPPINGS = {
    '/account' : ShowAccount,
    '/delivery' : AskForDelivery,
    '/questions': FAQ,
    '/back' : BackToMainMenu
}

function ShowAccount(msg){
console.log(msg.text);

}

function AskForDelivery(msg){
console.log(msg.text);
}

function FAQ(msg){
console.log(msg.text);
}

function BackToMainMenu(msg){
console.log(msg.text);
}
module.exports = {handle};