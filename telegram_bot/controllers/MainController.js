
var constants = require('./../constants.js');

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
    console.log(msg.text);
}

function HowToFindInfo(msg){
console.log(msg.text);
}

function ShopSales(msg){
console.log(msg.text);
}

function SubMenu(msg){
console.log(msg.text);
}
module.exports = {handle};