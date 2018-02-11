/*
  A bot to clear/delete messages of a channel

  Usage: !clearMessages  ==> clears all messages of
  that channel on which the command was run

*/

const CLEAR_MESSAGES = '!c';

const Discord = require('discord.js');
const bot = new Discord.Client();

// Token of my bot
const token = 'NDEyMDE0OTQwNDcyMjEzNTA1.DWHA7Q.d-doYSAPbJYyT6K1PGwe5VPvd10';

bot.on('ready', () => {
  console.log('ClearMessagesBot is Ready!');
  bot.on('message', message => {
    if (message.content == CLEAR_MESSAGES) {

      // Check the following permissions before deleting messages:
      //    1. Check if the user has enough permissions
      //    2. Check if I have the permission to execute the command

      if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        return;
      } else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        return;
      }

      // Only delete messages if the channel type is TextChannel
      // DO NOT delete messages in DM Channel or Group DM Channel
      if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length; // number of messages deleted

            // Logging the number of messages deleted on both the channel and console.
            message.channel.sendMessage("Deletion of messages successful. Total messages deleted: "+messagesDeleted);
            console.log('Deletion of messages successful. Total messages deleted: '+messagesDeleted)
          })
          .catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
          });
      }
    }
  });
});

const ms = require('ms')
left member - msg.mention.members.first();
if(!member) return msg.reply("you didnt mentioned a member!");
let muteRole - msg.guild.roles.find("name","muted");
if(!muteRole) return msg.reply("you didnt got a role by name of Muted!");
let parms - msg.content.split.(" ").silice(1);
let time - parans[1];
if(!time) return msg.reply("please specify an amount of time for mute for!");

member.addRole(muteRole.id);
msg.channel.send('you have been muted for $(ms(ms(time), {long: true})} ${member.user.tag}');
                 
setTimeout(function() {
    member.removeRole(mute.id);
    msg.channel.send('${member.user.tag} youve been unmuted! The mute lasted: ${ms(ms(time), {long: true})}');
}, ms(time));
                     
});

bot.login(process.env.BOT_TOKEN);
