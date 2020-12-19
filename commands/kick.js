module.exports = {
    name:'kick',
    description:`Kick a member on the server.`,
    usage:`[member] <reason>`,
    args: true,
    cooldown: 5,

    async execute(message,args,Discord,bot) {

        //Permission checking:
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(`**You do not have permission for this command.**`)
        if (!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('**I do not have permission for this command.**')

        //Veriables
        let reason = args.slice(1).join(" ")
        reason = reason.charAt(0).toUpperCase() + reason.slice(1);
        const mentionedMember = message.mentions.members.first();
        const target = message.mentions.users.first();
        let isFox = false;

        //Input checking:
        if (!reason) reason = 'Reason not specified.';
        if (!args[0]) return message.channel.send('**Please specify someone to kick.**').then(d => d.delete({timeout: 5000})); 
        if (!mentionedMember) return message.channel.send('**No member was mentioned.**').then(d => d.delete({timeout: 5000}));
        if (target === bot.user){
            message.channel.send(`**You can not kick me.**`).then(d => d.delete({timeout: 5000}));
            isFox = true;}
        if(!mentionedMember.kickable && isFox === false) return message.channel.send('**I can not kick this member.**').then(d => d.delete({timeout: 5000}));

        //Executing:
        if (target === message.author){
            message.reply(`**You can not kick yourself.**`).then(d => d.delete({timeout: 5000}));
        }else if(!isFox){
            let Embed = new Discord.MessageEmbed()
            .setTitle(`**You have been kicked from ${message.guild.name}!**`)
            .setDescription(`:exclamation: **Reason for being kicked:** ${reason}`)
            .setFooter('This message is an automatic notification')
            .setTimestamp()
            .setColor(`#80007D`)    //Purple.
            message.channel.send(Embed)

            await mentionedMember.send(Embed).catch(err => console.log(err));
            await mentionedMember.kick({
                reason: reason
            }).catch(err => console.log(err))
            .then(() => message.channel.send(`:white_check_mark: \``+mentionedMember.user.tag+`\` **has been kicked.**`))
          
        
        }
    }
}
