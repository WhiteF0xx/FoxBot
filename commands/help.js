const fs = require('fs')

module.exports = {
    name: "help",
    description: "Show a command list.",
    aliases: ['commands'],
    cooldown: 5, 
    args: false,
    usage: '[command name]',
    example: 'help prune',

    
	execute(message, args) {
		let str = '';
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./${file}`);
			str += `__**Name:**__ ${command.name}, __**Description:**__ *${command.description}* \n`;
		}

		message.channel.send(str);
	},
};