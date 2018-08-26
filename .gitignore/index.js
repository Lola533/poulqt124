const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("z.")

bot.on('ready', function() {
    bot.user.setGame("z.help║ ZeldoriaNetwork║ By !(Emile)#4231";
    console.log("le bot est bien connecter");
});

bot.login(process.env.TOKEN)


bot.on('message', message => {

    if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
                .setTitle("Commandes")
                .addField("z.ip", "z.info", true)
                .addField("z.mute", "z.demute", true)
                .addField("z.ping", "z.num", true)
                .setColor("#2EFE2E")
            message.channel.sendEmbed(embed)
        }

    if (message.content === prefix + "ip"){
        var embed = new Discord.RichEmbed() 
            .addField("Status", "Ouvert, Whitelist", true)
            .addField("Ip", "srv2.secure-heberg.com", true)
            .addField("Port", "10187", true)
            .setColor("#2EFE2E")
        message.channel.sendEmbed(embed)
    }
    
    if (message.content === prefix + "ping"){
       message.channel.sendMessage('Syncronisation avec le serveur: `' + `${message.createdTimestamp - Date.now()}` + ' ms`');
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
    if (message.content === prefix + "kick"){
        let kickMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kickMember) return message.channel.send("Utilisateur introuvable");
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("je ne peut pas le faire");
        if(kUser.hasPermission(MANAGE_MESSAGE)) return message.channel.send("Cette personne ne peut pas etre kick");

        let kickEmbed = new Discord.RichEmbed()
        .setDescription("__Kick__")
        .setColor("0x0000FF")
        .addField("Kick User", `${kickMember}`)
        .addField("Kicked by", `@${message.author.id}`)
        .addField("Reason", kReason);

        let kickChannel = message.guild.channels.find(`name`, "logs");
        if(!kickChannel) return message.channel.send("Ce channel n'existe pas");

        message.guild.member(kickMember).kick(kReason);
        kickChannel.send(kickEmbed);

      return;
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
    
           if (message.content.startsWith(prefix + "num")) {
           return message.channel.send("Mon numéro de téléphone est le: 06597078** A VOUS DE DEVINEZ MDR")
       }
      
   });
