const {prefix} = require('../config.json')

module.exports = {
    name:'8ball',
    description:`Ask the might 8ball a qestion and it shall awnser.`,
    aliases:['eightball','ball'],
    usage:`<qestion>`,
    example:`8ball will i ever be happy?`,
    cooldown:5,

    execute(message,args) {

        let awnser ='';
        let qestion = args.join(" ");

        const number = Math.round(Math.random()*21)
        switch (number) {
            case 1:
                awnser = `It is certain.`
                break;
            case 2:
                awnser = `It is decidedly so.`
                break;
            case 3:
                awnser = `Without a doubt.`
            case 4:
                awnser = `Yes – definitely.`
                break;
            case 5:
                awnser = `You may rely on it.`
                break;  
            case 6:
                awnser = `As I see it, yes.`
                break;
            case 7:
                awnser =`Most likely.`
                break;
            case 8:
                awnser = `Outlook good.`
                break;
            case 9:
                awnser = `Yes.`
                break;
            case 10:
                awnser = `Signs point to yes.`
                break;
            case 11:
                awnser = `Reply hazy, try again.`
                break;
            case 12:
                awnser = `Ask again later.`
                break;
            case 13:
                awnser = `Better not tell you now.`
                break;
            case 14:
                awnser = `Cannot predict now.`
                break;
            case 15:
                awnser = `Concentrate and ask again.`
                break;
            case 16:
                awnser = `Don't count on it.`
                break;
            case 17:
                awnser = `My reply is no.`
                break;
            case 18:
                awnser = `My sources say no.`
                break;
            case 19:
                awnser = `Outlook not so good.`
                break;
            case 20:
                awnser = `Very doubtful.`
                break;
            default:
                awnser = 'Bruh.'
                break;
        }

        message.channel.send(`:crystal_ball: *${qestion}*\n:8ball:** ${awnser}**`)
    }
}