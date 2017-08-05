var constants = require('./../constants.js');

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
    console.log(msg.text);
}

function PersonalQuestion(msg){
console.log(msg.text);
}

function BackToSubmenu(msg){
console.log(msg.text);
}

module.exports = {handle};