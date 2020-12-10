module.exports = {
    name:`ping`,
    description: `Pings the server.`,
    cooldown: 5,

    execute(message,args,Discord,bot){
        message.channel.send(`🏓 **Pong!**\n**Latency:** ${Math.floor(message.createdAt - message.createdAt)}ms\n**API Latency:** ${Math.round(bot.ws.ping)}ms`);
    },
};