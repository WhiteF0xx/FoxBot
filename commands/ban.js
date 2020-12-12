module.exports = {
    name: 'ban',
    description: 'Bans a member of the server',

    execute(message,args,Discord,bot){
         const member = message.mentions.users.first();
         if (member && member != message.author) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send(`**User has been banned.**`);
         }
         else {
            message.channel.send(`You can't ban that member.`).then(d => d.delete({timeout: 5000}));
         }
    }
 }
