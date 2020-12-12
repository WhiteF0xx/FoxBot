//const { prefix } = require('../config.json')
//const { command } = require('../commands')

module.exports = {
    name:`info`,
    description: `Info about the bot.`,
    usage:'verison',
    cooldown: 5,
    args: true,

    execute(message,args,){

        let version = '1.4';

        if (args[0] === 'version' || 'ver'){
            message.channel.send('**Version** ' + version);
        }
        else {
            //  message.channel.send(`Argument "${args[0]}" is wrong.
            //  Try \`${prefix}${this.name} ${this.usage}\``)
            message.channel.send('**Invalid command.**')
        }

    },
};
