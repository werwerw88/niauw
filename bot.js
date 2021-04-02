const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Запустился бот ' + bot.user.tag);
})

bot.on('message', message => {
    if(message.content == 'ниа') message.channel.send('ниау');
    if(message.content == 'ву') message.channel.send('эак эак');
    if(message.content == 'аув ниау ау ниа') message.channel.send('угху угху аув ау');
    if(message.content == 'ниу угху ниа') message.channel.send('ниу угху ниау');
    if(message.content == 'ww') message.channel.send('ㅆㅆ');
    if(message.content == 'бэаув') message.channel.send('ниаув');
    if(message.content == 'угху угху') message.channel.send('вэу ву');
})
    
bot.login('nia');
