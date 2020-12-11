module.exports = {
    name:'avatar',
    description: 'Gets the avatar of a user.',
    aliases: ['profile','pic'],
    args: true,
    usage: '@[user] <size>',
    example: '&avatar @FoxBot small',

    execute(message,args,Discord,bot){

        message.channel.send('hello there!')

        ///Get users profile icon.
        const user = message.mentions.users.first() //|| message.author;

        if (args[1] === 'small') {
            sz = 128
        }else if (args[1] === 'medium') {
            sz = 256
        }else {
            sz = 1024
        }

        let Embed = new Discord.MessageEmbed()
            .setTitle(`**${user.username}**'s avatar`)
            .setColor(0x82eb11)
            .setImage(user.displayAvatarURL({size: +sz}))
        message.channel.send(Embed);
    }
}
