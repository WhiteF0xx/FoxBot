module.exports = {
    name:`ping`,
    description: `Pings the server.`,
    args: false,
    cooldown: 5,

    execute(message,args,Discord,bot){

        message.channel.send("🏓 **Pong!**").then((resultMessage) => {
        
            message.channel.send(`**Latency:** ${Math.floor(resultMessage.createdTimestamp - message.createdTimestamp)}ms\n**API Latency:** ${Math.round(bot.ws.ping)}ms`);

        })
    },
};