console.log("신느님")
const client = new Discord.Client();
const token = '';

client.on('ready', () => {
    console.log('im ready.');
  });

  if(message.content == '!테스트') {
    return message.reply('테스트 명령어');
  }
