const TOKEN = process.env.TELEGRAM_TOKEN || '1013712671:AAF0AzZ0zGawEY6X11SkGfXU5C_S70ld6lI';
const TelegramBot = require('node-telegram-bot-api');
const options = {
  webHook: {
    port: process.env.PORT
  }
};

const url = process.env.APP_URL || 'https://li1n-bot.herokuapp.com:443';
const bot = new TelegramBot(TOKEN, options);
bot.setWebHook(`${url}/bot${TOKEN}`);

var token = '1013712671:AAF0AzZ0zGawEY6X11SkGfXU5C_S70ld6lI';

var bot = new TelegramBot(token, { polling: true });

var counter = [];
// Написать мне ... (/echo Hello World! - пришлет сообщение с этим приветствием, то есть "Hello World!")
bot.onText(/(^[0-9]+)/, function (msg, match) {
    var fromId = msg.from.id; // Получаем ID отправителя
    var resp = match[1];
    let pars = parseInt(resp);
    counter.push(pars);
    bot.deleteMessage(fromId, msg.message_id);
});

bot.onText(/res/, function (msg) {
    var fromId = msg.from.id; // Получаем ID отправителя
        var result = counter.reduce(function(sum, current) {
            return sum + current
         });
    let mustdo = 9000 - result;
    bot.sendMessage(fromId, 'Всього віджався: ' + result + '\n' + 'Залишилося: ' + mustdo);
});

