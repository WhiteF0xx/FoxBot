module.exports = {
    name:'roll',
    description:'Rolls a dnd die.',
    args:true,
    usage:'<times> [die type]',
    cooldown: 3,

    execute(message,args){

        if(isNaN(args[0]) || isNaN(args[1])) return message.channel.send('That is not a number.').then(d => d.delete({timeout: 5000}));

        //Veriables
        let i;
        let dice;
        let sum = 0;
        let arrs = new Array(args[0]);

        //Calculation
        switch (args[1]){
            case `6`:
                for (i=0; i<args[0]; i++){
                    dice = Math.floor(Math.random()*6) + 1;
                    arrs[i] = dice;
                    sum += dice;
                }
                break;
            case '8':
                for (i=0; i<args[0]; i++){
                    dice = Math.floor(Math.random()*8) + 1;
                    arrs[i] = dice;
                    sum += dice;
                }
                    break;
            case '10':
                for (i=0; i<args[0]; i++){
                    dice = Math.floor(Math.random()*10) + 1;
                    arrs[i] = dice;
                    sum += dice;
                }
                    break;
            case '12':
                for (i=0; i<args[0]; i++){
                    dice = Math.floor(Math.random()*12) + 1;
                    arrs[i] = dice;
                    sum += dice;
                }
                    break;
            case '20':
                for (i=0; i<args[0]; i++){
                    dice = Math.floor(Math.random()*20) + 1;
                    arrs[i] = dice;
                    sum += dice;
                }
                    break;
            case '100':
                for (i=0; i<args[0]; i++){
                    dice = Math.floor(Math.random()*100) + 1;
                    arrs[i] = dice;
                    sum += dice;
                }
                    break;
            default:        //d4
                for (i=0; i<args[0]; i++){
                    dice = Math.floor(Math.random()*4) + 1;
                    arrs[i] = dice;
                    sum += dice;
                }
        }

        //Reply
        if (args[0]==1 && sum == 1){
            message.channel.send(`**You rolled: **`+sum+` (`+arrs+`)`)
            message.channel.send(`**Critical Failure**... yikes bro that's kinda cringe.`)
        }else if (args[0]==1 && sum==20){
            message.channel.send(`**You rolled: **`+sum+` (`+arrs+`)`)
            message.channel.send(`**Critical Hit!** ~ Poggers my guy. Holly Molly :exploding_head:`)
        }else{
        message.channel.send(`**You rolled: **`+sum+` (`+arrs+`)`)
        }

    }
}
