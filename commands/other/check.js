const Commando = require('discord.js-commando');
module.exports = class CheckCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name:'check',
            group:'other',
            memberName:'check',
            description: 'checks if bot is online'

        })
    }
async run(message, args){
    message.reply('yeah')
}

}