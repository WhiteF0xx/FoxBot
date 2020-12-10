module.exports = {
    name:`beep`,
    description:`Why don't you try it.`,

    execute(message,args){
        message.channel.send(`**Boop.**`)
    },
};