var tgBot = require('./../index.js');
var constants = require('./../constants.js');
var User = require('./../models/User.js');
var UserProvider = require('./../providers/UserProvider.js');
var StaticContentProvider = require('./../providers/StaticContentProvider.js');
var contentProvider = new StaticContentProvider();

function handle(subRoute, msg){
    let envoke = MAPPINGS[subRoute];
    envoke(msg);
}

const MAPPINGS = {
    '/about' : AboutShop,
    '/find' : HowToFindInfo,
    '/sales': ShopSales,
    '/menu' : SubMenu
}

function AboutShop(msg){
    let info = contentProvider.GetAboutInfo();
    tgBot.bot.sendMessage(msg.chat.id, info, constants.MAIN_KEYBOARD);
}

function HowToFindInfo(msg){
    let info = contentProvider.HowToFindUsInfo();
    tgBot.bot.sendMessage(msg.chat.id, info, constants.MAIN_KEYBOARD);
}

function ShopSales(msg){
    console.log(msg.text);
}

function SubMenu(msg){
    tgBot.bot.sendMessage(msg.chat.id,"Our Menu", constants.MENU_KEYBOARD);
}
module.exports = {handle};