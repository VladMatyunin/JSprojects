var constants = require('./constants.js');
var router = require('./router');
let MAPS = new Map([
    [constants.ABOUT_KEY ,                      constants.ABOUT_ROUTE],
    [constants.HOW_TO_FIND_KEY ,                constants.HOW_TO_FIND_ROUTE],
    [constants.SALES_KEY,                       constants.SALES_ROUTE],
    [constants.SUB_MENU_KEY,                    constants.SUB_MENU_ROUTE],
    [constants.MY_ACCOUNT_KEY,                  constants.MY_ACCOUNT_ROUTE],
    [constants.WANT_DELIVERY_KEY,               constants.WANT_DELIVERY_ROUTE],
    [constants.QUESTIONS_KEY,                   constants.WANT_DELIVERY_ROUTE],
    [constants.BACK_TO_MAIN_MENU_KEY,           constants.BACK_TO_MAIN_MENU_ROUTE],
    [constants.ACCOUNT_MY_BONUS_KEY,            constants.ACCOUNT_MY_BONUS_ROUTE],
    [constants.ACCOUNT_QUESTION_KEY,            constants.ACCOUNT_QUESTION_ROUTE],
    [constants.ACCOUNT_BACK_TO_SUBMENU_KEY,     constants.ACCOUNT_BACK_TO_SUBMENU_ROUTE]
]);

function convert(key, msg){
    if(MAPS.has(key)){
        let route = MAPS.get(key);
        router.handle(route, msg);
    }
    else throw "Command not found";
}