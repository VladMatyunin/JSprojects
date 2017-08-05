var index = require('./../index.js');
var constants = require('./../constants.js');
var User = require('./../models/User.js');
var userProvider = require('./../providers/UserProvider.js');
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
    var bototot = index.bot;
    var user = userProvider.CreateNewUser(new User(msg.from.first_name,msg.from.last_name,msg.from.username,0));
    index.bot.sendMessage(msg.chat.id, 'Hello!!!!!!!', constants.MAIN_KEYBOARD);
    
}

function HowToFindInfo(msg){
console.log(msg.text);
userProvider.GetUserByTelegramName(msg.from.username);
}

function ShopSales(msg){
console.log(msg.text);
}

function SubMenu(msg){
console.log(msg.text);
}
module.exports = {handle};