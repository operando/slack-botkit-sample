// token=your_api_token node parrot-bot.js
if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('botkit');

var controller = Botkit.slackbot({
    debug: true
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();

controller.hears([''], 'direct_mention', function (bot, message) {
    bot.reply(message, message.text)
});