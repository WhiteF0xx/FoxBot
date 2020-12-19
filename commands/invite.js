module.exports= {
    name:'invite',
    description:'Creates a new invite link for your server.',
    aliases: ['inv'],
    args: false,
    cooldown: 10,

    execute(message, args, Discord, bot){
        let channel = message.channel;
        
        let Embed = new Discord.MessageEmbed()
        channel.createInvite({unique:true})
        .then(invite=>{
            Embed
            .setColor('#80007D')
            .setTitle('**Invite me here:**')
            .setAuthor(`${message.guild.name}`, message.guild.iconURL())
            .setDescription('https://discord.com/api/oauth2/authorize?client_id=719258822241419344&permissions=8&scope=bot')
            .setTimestamp()                                                            //Timestamp
            .setFooter('FoxBot', bot.user.displayAvatarURL());

            message.reply(Embed);
        })
    }




}
