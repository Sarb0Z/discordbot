const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'
const path=require('path')
const fs = require ('fs');
/*client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}*/


client.once('ready', async() =>{
    console.log('SarbzBot is ready');
    client.user.setActivity('with the bruhs');
    

});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'play') {
        const { voice } = message.member
        
        if (!voice.channelID) {
             message.reply('You must be in a voice channel')
            return
 
        }
        if (fs.existsSync(path.join(__dirname,'playlist', `${args.join(" ")}.m4a` ))) {

            voice.channel.join().then((connection) => 
            {
                const dispatcher=  connection.play(path.join(__dirname,'playlist', `${args.join(" ")}.m4a` ))
                dispatcher.on("finish", finish => {voice.channel.leave()})
               
            })
             message.reply(`Now playing **${args.join(" ")}**`)
        }
        else{
            message.channel.send(`**${args.join(" ")}** does not exist.`)
        }
    
    }
    else if (command==='leave'){        
        const { voice } = message.member
        if (!voice.channelID) {
            message.reply('You must be in a voice channel')
            return
 
        }
        voice.channel.leave()
        message.channel.reply("Leaving channel")

        
        


}
})



client.login('Nzc2MTc5MjgzNzQ3NTM2OTI3.X6xHSQ.cHhnV45GrtQIXA0vwNFW7TbxzYs')
