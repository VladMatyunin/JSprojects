var TelegramBot = require('node-telegram-bot-api');

    // Устанавливаем токен, который выдавал нам бот.
    var token = '';
    // Включить опрос сервера
    var botOptions = {
    polling: true
};
var mainKeyboard = {
      reply_markup: JSON.stringify({
        keyboard: [
          ['About us'],
          ['How to find us'],
          ['Sales'],
          ['Menu']
        ]
      })
  };

  var menuKeyboard = {
      reply_markup: JSON.stringify({
        keyboard: [
          ['my account'],
          ['want delivery'],
          ['questions'],
          ['< back']
        ]
      })
  };

  var accountKeyboard = {
      reply_markup: JSON.stringify({
        keyboard: [
          ['my bonus'],
          ['question'],
          ['< back to menu']
        ]
      })
  };
let currentUser = null;

var bot = new TelegramBot(token, botOptions);
 
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
        bot.sendMessage(messageChatId, 'Hello, '+ currentUser, mainKeyboard);
        console.log("FINISHED");
    }
    if (messageText === '/say') {
        bot.sendMessage(messageChatId, 'Hello World!', mainKeyboard);
    }

    if (messageText === '< back'){
        bot.sendMessage(messageChatId, 'Hello World!', mainKeyboard);
    }

    if(messageText === 'Menu'){
        bot.sendMessage(messageChatId, 'Hello World!', menuKeyboard);
    }
 
    console.log(msg);
});
 
function sendMessageByBot(aChatId, aMessage)
{
    bot.sendMessage(aChatId, aMessage, { caption: 'I\'m a cute bot!' });
}