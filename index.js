const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;'';
const welcomeChannelName = "wolcome";
const byeChannelName = "wolcome";
const welcomeChannelComment = "안녕하세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "멤버"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '테스트') {
    message.channel.send('카아아앜퉤');
  }  if(message.content == '!구걸') {
    return message.reply('구걸완료.성공됌✅');
  }  if(message.content == '!테스트') {
    return message.reply('테스트 명령어 작동 됌');
  }  if(message.content == '!봇') {
    return message.reply('디스코드 도우미 역할');
  }    if(message.content == '!도움') {
    return message.reply('!명령어를 춰주세요 공식사이트:https://discord.gg/SmFJSbc');
  }    if(message.content == '!유튜브') {
    return message.reply('신느님에 유튜브:https://www.youtube.com/channel/UCkR6L-Ld1rBgAKraC4hpMHQ?view_as=subscriber');
  }    if(message.content == '!넌 뒤졌어') {
    return message.reply('끄악.......아직한발 남지못했다....');
  }    if(message.content == '!도배 타이툴') {
    return message.reply('제영상은 아니지만:https://youtu.be/PSN7yQx-FTY');
  }    if(message.content == '!명령어') {
    return message.reply('명령어:(!구걸,!테스트,!봇,!도움,!유튜브,!넌뒤졌어,!도배 타이툴,봇 제작,신느,!힘들다,!니얼굴,!디스코드,!구박,!코딩,!제접,!복붙,!게임,!참고자료,신느디스코드,!상점,!만원,!코드,)');
  }    if(message.content == '!봇 제작') {
    return message.reply('사이트 1.node.js:https://nodejs.org/ko/ 2.vs code:https://code.visualstudio.com/');
  }    if(message.content == '신느') {
    return message.reply('최근영상:https://youtu.be/45n0a5hN2cc');
  }    if(message.content == '!힘들다....') {
    return message.reply('저도 힘들어요...');
  }   if(message.content == '!쌉가능') {
    return message.reply('뭐가 쌉가능이야?');
  }    if(message.content == '!니얼굴') {
    return message.reply('내얼굴이 뭐');
  }    if(message.content == '옙') {
    return message.reply('싸가지 없음 정지 ㄱㄱ');
  }    if(message.content == '!디스코드') {
    return message.reply('디스코드:https://discord.gg/c2C2JP');
  }     if(message.content == '!구박') {
    return message.reply('넌 돈도없어 ㅋㅋ');
  }     if(message.content == '!코딩') {
    return message.reply('코딩에 필료한제품 파이썬 파이참,노드 vs코드');
  }     if(message.content == '!제접') {
    return message.reply('제접중입니다 완료됐었습니다');
  }     if(message.content == '!복붙') {
    return message.reply('복사 붙여 넣으는중 !북붙 완료');
  }     if(message.content == '!게임') {
    return message.reply('(보스,대미지,궁,힐,캐릭터');
  }     if(message.content == '!보스') {
    return message.reply('보스를 해치우지못하셨습니다ㅠㅠ');
  }     if(message.content == '!대미지') {
    return message.reply('당신의 넣은 대미지 3021입니다');
  }     if(message.content == '!궁') {
    return message.reply('아이템 재료 못생긴건업나 확인중');
  }     if(message.content == '!힐') {
    return message.reply('영웅은죽지않아요');
  }     if(message.content == '!캐릭터') {
    return message.reply('일반🔓,고수🔒,보통🔒');
  }     if(message.content == '!참고 자료') {
    return message.reply('신느가 쓰는 편집기 뱁믹스,곰믹스');
  }     if(message.content == '!신느디스코드') {
    return message.reply('자료실 서버:https://discord.gg/c2C2JP');
  }     if(message.content == '!코드') {
    return message.reply('몰름');
  }     if(message.content == '!만원') {
    return message.reply('.............');
  }     if(message.content == '!상점') {
    return message.reply('신느봇사이트로 전해주세요 사이트:https://discord.gg/c2C2JP');
  }  

  if(message.content == 'embed') {
    let img = 'https://cdn.discordapp.com/icons/419671192857739264/6dccc22df4cb0051b50548627f36c09b.webp?size=256';
    let embed = new Discord.RichEmbed()
      .setTitle('타이틀')
      .setURL('http://www.naver.com')
      .setAuthor('나긋해', img, 'http://www.naver.com')
      .setThumbnail(img)
      .addBlankField()
      .addField('Inline field title', 'Some value here')
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here1\nSome value here2\nSome value here3\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('나긋해가 만듬', img)

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content.startsWith('!전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}


client.login(token);