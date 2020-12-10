 module.exports = {
    name: 'kick',
    description: 'Kicks a member of the server',

    execute(message,args,Discord,bot){
         const member = message.mentions.users.first();
         if (member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send(`**User has been kicked.**`);
         }
         else {
            message.channel.send(`You can't kick that member.`);
         }
    }
 }