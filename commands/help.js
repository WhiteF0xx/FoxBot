const fs = require('fs')
const {prefix} = require('../config.json')

module.exports = {
    name: "help",
    description:'A list with all the commands.',
    aliases: ['commands','cmds'],
    cooldown: 5, 
    args: false,
    usage: '[command name]',
    example: 'help prune',

    
	execute(message, args) {
		let str = '';
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
			str += `**${prefix}${command.name}** - ${command.description} \n`;
		}
		
		message.channel.send(`**These are my commands:** \n\n${str}`);
	},
};