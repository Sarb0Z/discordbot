const Commando = require('discord.js-commando');
module.exports = class revealCommand extends Commando.Command{
    constructor(client){
        super(client, {
            name:'here',
            group:'other',
            memberName:'here',
            description: 'checks if bot is online'

        })
    }
async run(message, args){
    message.member.roles.add('776194487889690665')
}

}