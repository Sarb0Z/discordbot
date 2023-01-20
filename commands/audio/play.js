module.exports = {
    name: 'play',
    description: "play command!",
    async execute(message, args){
        const { voice } = message.member
        
        if (!voice.channelID) {
            await message.reply('You must be in a voice channel')
            return
 
        }
        if (fs.existsSync(path.join(__dirname,'playlist', `${args.join(" ")}.m4a` ))) {

            voice.channel.join().then((connection) => 
            {
                const dispatcher=  connection.play(path.join(__dirname,'playlist', `${args.join(" ")}.m4a` ))
                dispatcher.on("finish", finish => {voice.channel.leave()})
               
            })
            await message.reply(`Now playing **${args.join(" ")}**`)
        }
        else{
            message.channel.send(`**${args.join(" ")}** does not exist.`)
        }
    }
}