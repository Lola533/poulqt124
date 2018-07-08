const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("z.")

bot.on('ready', function() {
    bot.user.setGame("aide : z.help");
    console.log("le bot est bien connecter");
});

bot.login(process.env.TOKEN)


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
             .addField("Site", "En Dev", true)
             .addField("Twitter", "https://mobile.twitter.com/ZeldoriaMCPE", true)
             .addField("Youtube", "https://www.youtube.com/channel/UCwx3328ntu7rCS6N_f5oBFQ", true)
             .setColor("0x0000FF")
        message.channel.sendEmbed(embed);
    }
    if (message.content.startsWith(prefix + "mute")) {
     if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("Vous n'avez pas les permission")

     if(message.mentions.users.size === 0) {
         return message.channel.send("Vous devez mentionner un Utilisateur")
     }

     var mute = message.guild.member(message.mentions.users.first());
     if(!mute){
         return message.channel.send("Je n'ai pas trouver l'utilisateur ou il n'existe pas")
     }

     if(!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas les permission requise pour mute cette utilisateur");
     message.channel.overwritePermissions(mute, {SEND_MESSAGES: false}).then(member => {
         message.channel.send('Cette personne est mute');
     })
    }

    if (message.content.startsWith(prefix + "demute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("Vous n'avez pas les permission")
   
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un Utilisateur")
        }
   
        var mute = message.guild.member(message.mentions.users.first());
        if(!mute){
            return message.channel.send("Je n'ai pas trouver l'utilisateur ou il n'existe pas")
        }
   
        if(!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas les permission requise pour mute cette utilisateur");
        message.channel.overwritePermissions(mute, {SEND_MESSAGES: true}).then(member => {
            message.channel.send('Cette personne a été unmute');
        })
       }
      
   });
