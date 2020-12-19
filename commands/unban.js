module.exports = {
    name:'unban',
    description:`Unbans a user by his ID.`,
    usage:`[ID] <reason>`,
    args: true,
    cooldown: 5,

    async execute(message,args,Discord,bot) {

        //Permission checking:
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`**You do not have permission for this command.**`)
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('**I do not have permission for this command.**')

        //Veriables
        let reason = args.slice(1).join(" ")
        reason = reason.charAt(0).toUpperCase() + reason.slice(1);
        let userID = args[0]

        //Input checking:
        if (!reason) reason = 'Reason not specified.';
        if (!args[0]) return message.channel.send('**Please specify someone to unban.**').then(d => d.delete({timeout: 5000})); 
        if (isNaN(args[0])) return message.channel.send(`**The ID must be only numbers.**`).then(d => d.delete({timeout: 5000})); 

        //Executing:
        message.guild.fetchBans().then(async bans => {
            if (bans.size == 0) return message.channel.send(`**This server has not any banned members.**`).then(d => d.delete({timeout: 5000})); 
            let bUser = bans.find(b => b.user.id == userID)
            if (!bUser) return message.channel.send(`**The user ID stated is not banned.**`).then(d => d.delete({timeout: 5000})); 
            await message.guild.members.unban(bUser.user, reason).catch(err => {
                console.log(err);
                return message.channel.send(`**Something went wrong unbanning the ID.**`).then(d => d.delete({timeout: 5000})); 
            }).then(() => {
                message.channel.send(`:white_check_mark: \``+args[0]+`\` **has been unbanned.**`)
            })
        })
        
    }
}