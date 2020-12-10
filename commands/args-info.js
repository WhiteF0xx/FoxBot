module.exports = {
	name: 'args-info',
    description: 'Information about the arguments provided.',
    cooldown: 5,
    args: true,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('**bar**');
		}
		
		message.channel.send(`**Arguments:** ${args}\n**Arguments length:** ${args.length}`);
	},
};