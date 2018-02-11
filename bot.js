const Discord = require('discord.js');
const bot = new Discord.Client();
    
bot.on('Game Ready', () => {
  bot.user.setGame('My onwer working on me')
});

bot.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});


// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
