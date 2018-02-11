const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('I am ready!');
    
bot.on('Game Ready', () => {
  clientt.user.setGame('My onwer working on me')
})

bot.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});


// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
