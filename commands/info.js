module.exports = {
    name:`info`,
    description: `Info about the bot.`,
    usage:['<verison>' , '<servers>'],
    cooldown: 5,
    args: true,

    execute(message,args,Discord,bot){

        let version = '1.4';

        if (args[0] === 'version' || args[0] === 'ver'){
            message.channel.send('**Version** ' + version);
        }else if(args[0] === 'servers'){
            bot.guilds.cache.forEach((guild) => 
            message.channel.send(`**${guild.name}** has a total of **${guild.memberCount}** members.`))
        }
        else {
            message.channel.send('**Invalid command.**')
        }

    },
};
