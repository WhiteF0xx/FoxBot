

module.exports = {
    name:`prune`,
    description: `Deletes messages.`,
    alliases:['delete','del'},
    cooldown: 5,
    //usage: `${prefix}prune [number]`,
    //example: `${prefix}prune 10`,
    
    execute(message,args){

        if (!args[0]) return message.reply('Please define how many messages you want to clear.').then(d => d.delete({timeout: 5000}));       // If notthing is typed after '&prune'

        if (isNaN(args[0])) return message.channel.send("Please input a valid number.").then(d => d.delete({timeout: 5000}));                // isNaN = is Not a Number. If the user doesnt input a number
        if (args[0] >100) return message.channel.send("I can't prune more than 100 messages.").then(d => d.delete({timeout: 5000}));         // If requested to delete more than 100 messages.
        if (args[0] < 1) return message.channel.send("Prune at least one message.").then(d => d.delete({timeout: 5000}));                    // If the user inputs 0 or lower. (The bot must delete more than one msg.)
            message.delete();
            message.channel.bulkDelete(args[0]);
            message.channel.send(`Deleted **${args[0]}** messages!`).then(d => d.delete({timeout: 5000}))                                    // How long this message will be deleted in ms. 
            .then(messages => message.channel.send)
            .catch(() =>message.channel.send(`Something went wrong, while deleting messages.`))                                              // This error will displayd when the bot doesn't have an accsess to do it.                                       
    },
};
