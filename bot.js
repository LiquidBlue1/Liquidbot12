const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.user.setStatus('My owner working on me')

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
