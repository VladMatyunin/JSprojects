var TelegramBot = require('node-telegram-bot-api');
var db = require('./dbtest');
var constants  = require('./constants.js');
var core = require('./routeConverter.js');
// db.start();
    // Устанавливаем токен, который выдавал нам бот.
    var token = '352679118:AAEJcKDaw7Kr1mzxslO0d-geUgSQhRaoG3o';
    // Включить опрос сервера
    var botOptions = {
    polling: true
};

let currentUser = null;

let bot = new TelegramBot(token, botOptions);

bot.getMe().then(function(me)
{
    console.log('Hello! My name is %s!', me.first_name);
    console.log('My id is %s.', me.id);
    console.log('And my username is @%s.', me.username);
});
bot.on('text', function(msg)
{
    var messageChatId = msg.chat.id;
    var messageText = msg.text;
    var messageDate = msg.date;
    var messageUsr = msg.from.username;
    if (currentUser===null){
        console.log("I am here");
        currentUser=msg.from.first_name;
        bot.sendMessage(messageChatId, 'Hello, '+ currentUser, constants.MAIN_KEYBOARD);
        console.log("FINISHED");
    }
    core.convert(msg.text,msg);
    // if (messageText === '/say') {
    //     bot.sendMessage(messageChatId, 'Hello World!', mainKeyboard);
    // }

    // if (messageText === '< back'){
    //     bot.sendMessage(messageChatId, 'Hello World!', mainKeyboard);
    // }

    // if(messageText === 'Menu'){
    //     bot.sendMessage(messageChatId, 'Hello World!', menuKeyboard);
    // }
 
    console.log(msg);
});
 
function sendMessageByBot(aChatId, aMessage)
{
    bot.sendMessage(aChatId, aMessage, { caption: 'I\'m a cute bot!' });
}



module.exports.bot = bot;