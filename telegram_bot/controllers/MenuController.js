var constants = require('./../constants.js');
var userProvider = require('./../providers/UserProvider.js');
var stProvClass = require('./../providers/StaticContentProvider.js');
var contentProvider = new stProvClass();
var tgBot = require('./../index.js');

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
    tgBot.bot.sendMessage(msg.chat.id,"Your Account Menu", constants.ACCOUNT_KEYBOARD);
}

function AskForDelivery(msg){
    console.log(msg.text);
}

function FAQ(msg){
    var info = contentProvider.MostAskedQuestions();
    tgBot.bot.sendMessage(msg.chat.id, info, constants.ACCOUNT_KEYBOARD);
}

function BackToMainMenu(msg){
    tgBot.bot.sendMessage(msg.chat.id, "back to menu", constants.MAIN_KEYBOARD);
}
module.exports = {handle};