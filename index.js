const Discord = require('discord.js');	// discord.js 라이브러리 호출
const client = new Discord.Client();	// Client 객체 생성

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message.content);
});

client.login('./config.json');