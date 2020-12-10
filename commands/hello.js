module.exports = {
    name:`hello`,
    description: `The bot says hello.`,
    cooldown: 3,
    
    execute(message,args ,){
            message.channel.send(`**hewwo UwU**`)  
    },
};