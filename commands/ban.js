module.exports = {
    name: 'ban',
    description: 'Bans a member on the server',

    execute(message,args,Discord,bot,client){

      if (message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('BAN_MEMBERS')){
         const target = message.mentions.users.first();

            if (!target) return message.reply(`Please specify someone to ban.`).then(d => d.delete({timeout: 5000}));

            if (target === message.author) {
               message.reply(`You can not ban yourself.`).then(d => d.delete({timeout: 5000}));
            }else if (target.id === '719258822241419344')  {         //bot's id.
               message.channel.send(`*You can not ban me.*`).then(d => d.delete({timeout: 5000}));
            }else {
                  const memberTarget = message.guild.members.cache.get(target.id);
                  console.log(memberTarget);       //memberTarget.ban();
                  message.channel.send(`**User has been banned.**`);
            }   
      }
      else {
         message.reply(`You do not have permission to use this command.`)
      }
   }
 }