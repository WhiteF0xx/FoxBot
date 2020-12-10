const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const {prefix, token} = require('./config.json');


const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

//Command Handler
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

let memberchannel = 'welcome';
let log_channel = 'member_left';

//When bot is online
bot.on('ready', async () =>{
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity('&help', { type: 'PLAYING' }) //TYPES: PLAYING,STREAMING,LISTENING,WATCHING
  	.then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  	.catch(console.error);

})


bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === memberchannel);
    if (!channel) return;
    channel.send(`Welcome to the server, **${member}**.`);
});

bot.on('guildMemberRemove', member => {
    const left =member.guild.channels.cache.find(ch => ch.name === log_channel);
    if (!left) return;
    left.send(`Welp too bad, ${member}, has left the server...Bye bye.`);
});






bot.on('message', message=>{ 
    // Veriables
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	//aliases: ['name1', 'name_one'],
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	
	//guildOnly command for commandFiles.(guildOnly: true,)
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}
 
	/* this command line is out of use for now. Problem: When using ping this would interfere demanding another arg.
	  Update: nvm fixed it. Note: command below words with=> args:true/flase in any command file.(see args_true_or_false.PNG)*/
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

	 	if (command.usage) {
	 		reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
	 	}
	
	 	return message.channel.send(reply);
	}


	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    
try {
	command.execute(message, args, Discord, bot);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
});

bot.login("NzE5MjU4ODIyMjQxNDE5MzQ0.Xt04hA.f24ggB2K1Whc3LMNxvSNhAcCUSY");
