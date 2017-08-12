var constants = require('./../constants.js');
var tgBot = require('./../index.js');

function handle(subRoute, msg){
    let envoke = MAPPINGS[subRoute];
    envoke(msg);
}
const MAPPINGS = {
    '/bonus' : ShowMyBonus,
    '/question' : PersonalQuestion,
    '/back': BackToSubmenu,
}

function ShowMyBonus(msg){

}

function PersonalQuestion(msg){

}

function BackToSubmenu(msg){
    tgBot.bot.sendMessage(msg.chat.id, "back to sub menu", constants.MENU_KEYBOARD);
}

module.exports = {handle};