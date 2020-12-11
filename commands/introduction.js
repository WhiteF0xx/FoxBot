module.exports = {
    name:'introduction',
    description:'A small introduction of the bot.',
    aliases: ['intro'],
    cooldown: 5,

    execute(message, args){
     message.channel.send("Hello there! My name is **FoxBot**, but you can call me just Fox :fox:. I'm a small discord" +
                        " robot created by \`WhiteFox#5885`\.I'm still in development so please go easy on me. If you want to ask anything" +
                        " more about me contract my creator. He will be happy to help you :blush:")
    }  
}     
    