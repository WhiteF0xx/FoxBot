const fs = require('fs')
const {prefix} = require('../config.json')

module.exports = {
    name:'help',
    description:'A list with all the commands.',
    cooldown: 5,

    execute(message,args,Discord,bot) {

		let embed = new Discord.MessageEmbed()
        .setAuthor(`FoxBot's Help Menu`, bot.user.displayAvatarURL())
        .setTitle(`***These are my commands***`)
        .setThumbnail(`https://i.imgur.com/cSRX9zV.gif`)
        .setDescription(`\u200B`)
        .setTimestamp()
        .setFooter(`FoxBot | 7/6/20`, bot.user.displayAvatarURL());
        //Fields
        commandFiles.forEach(file => {
            const command = require(`./${file}`);
            embed.addField(`${command.name}`, `${command.description}`,true)
        })
        //End of fields
        message.channel.send(embed)
	},
};