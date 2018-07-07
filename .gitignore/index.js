const Discord = require ('discord.js');
const bot = new Discord.Client();
var prefix = ("z.")

bot.on('ready', function() {
    bot.user.setGame("aide : z.help");
    console.log("le bot est bien connecter");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
 
    if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
                .setTitle("Commandes")
                .addField("z.ip", "z.info", true)
                .setColor("#2EFE2E")
            message.channel.sendEmbed(embed)
        }

    if (message.content === prefix + "ip"){
        var embed = new Discord.RichEmbed()
            .addField("Ip", "Bientot", true)
            .addField("Port", "Bientot", true)
            .addField("Status", "Ouvert, Whitelist", true)
            .setColor("#2EFE2E")
        message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "info"){
         var embed = new Discord.RichEmbed()
             .setTitle("Info")
             .setDescription("Reseaux")
             .addField("Site", "Bientot..", true)
             .addField("Twitter", "https://mobile.twitter.com/ZeldoriaMCPE", true)
             .addField("Youtube", "https://www.youtube.com/channel/UCwx3328ntu7rCS6N_f5oBFQ", true)
             .setColor("0x0000FF")
        message.channel.sendEmbed(embed);
    }
   
});
