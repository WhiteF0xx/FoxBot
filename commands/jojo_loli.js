module.exports = {
    name:'loli',
    description:`it gives a nice jojo gif.`,
    cooldown: 5,

    execute(message,args,Discord,bot) {

        const embed = new Discord.MessageEmbed()
        .setColor(`#80007D`)
        .setImage(`https://i.imgur.com/73AQWna.gif`)

        message.channel.send(embed);

    }
}
