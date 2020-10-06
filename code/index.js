const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NzU1MzUwMjc1NzUzMTE1Njg5.X2CAww.wByJROBKAr5lgQ2W5AP0-R78Xfc');