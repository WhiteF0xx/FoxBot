module.exports = {
    name:`server`,
    description: `Information about the server.`,
    cooldown: 5,
    
    execute(message ,args ,Discord,bot){
            const text = bot.channels.cache.filter(r => r.type === `text`).size;
            const vc = bot.channels.cache.filter(r => r.type === `voice`).size;
            const category = bot.channels.cache.filter(r => r.type === `category`).size;

            const embed = new Discord.MessageEmbed()
            .setColor(0x82eb11)
            .setTitle(`ID: ${message.guild.id}`)
            .setThumbnail(message.guild.iconURL())
            .setAuthor(`${message.guild.name}`, message.guild.iconURL())
            .addField(`**Region:**`, `${message.guild.region}`, true)
            .addField(`**Shard:**`, `${message.guild.shardID}`, true)
            .addField(`**Members:**`, `${message.guild.memberCount}`, true)
            .addField(`Channels: [${message.guild.channels.cache.size}]`,`**Category:** ${category} | :hash: **Text:** ${text} | :sound: **Voice:** ${vc}`)
            .addField("Server Owner", `:crown: ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}| ${message.guild.owner}` , true)
            .setTimestamp()
            .setFooter(`FoxBot | 7/6/20`, bot.user.displayAvatarURL());
            message.channel.send(embed);
        },
    };