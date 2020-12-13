 module.exports = {
    name: 'kick',
    description: 'Kicks a member of the server',

    execute(message,args,Discord,bot,client){

      if (message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('KICK_MEMBERS')){
         const target = message.mentions.users.first();

            if (!target) return message.reply(`Please specify someone to kick.`).then(d => d.delete({timeout: 5000}));

            if (target === message.author) {
               message.reply(`You can not kick yourself.`).then(d => d.delete({timeout: 5000}));
            }else if (target.id === '719258822241419344')  {         //bot's id.
               message.channel.send(`*You can not kick me.*`).then(d => d.delete({timeout: 5000}));
            }else {
                  const memberTarget = message.guild.members.cache.get(target.id);
                  console.log(memberTarget);       //memberTarget.kick();
                  message.channel.send(`**User has been kicked.**`);
            }   
      }
      else {
         message.reply(`You do not have permission to use this command.`)
      }
   }
 }