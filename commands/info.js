let version = '1.3.1';

module.exports = {
    name:`info`,
    description: `Info about the bot.`,
    cooldown: 5,
    args: true,

    execute(message,args,){
        if(args[0] === 'version' || args[0] === 'ver'){
            message.channel.send('**Version** ' + version);
        }else{
            message.channel.send('**Invalid command.**')}
    },
};