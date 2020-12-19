module.exports = {
    name:`hello`,
    description: `The bot says hello.`,
    aliases: ['hi'],
    cooldown: 5,
    
    execute(message,args ,){
            message.channel.send(`**hewwo UwU**`)  
    },
};
