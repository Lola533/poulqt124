const Discord = require ('discord.js');
const bot = new Discord.Client();
const YTDL = require("ytdl-core");
var prefix = ("z.")

bot.on('ready', function() {
    bot.user.setGame("aide : z.help");
    console.log("le bot est bien connecter");
});

bot.login(process.env.TOKEN);

function play(connection, message) {
      var server = servers[message.guild.id];

      server.dispatcher = connection.playStream(YTDL(server.queue[0]), {filter: "audioonly"});

      server.queue.shift();

      server.dispatcher.on("end", function() {
          if (server.queue[0])  play(connection, message);
          else connection.disconnect();
     });

}

var servers = {};

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
            .setTitle("Ip")
            .addField("", "Bientot", true)
            .addField("Port", "Bientot", true)
            .addField("Status", "Ouvert, Whitelist", true)
            .setColor("#2EFE2E")
        message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "info"){
         var embed = new Discord.RichEmbed()
             .setTitle("Info")
             .setDescription("Reseaux")
             .addField("Site", "https://zeldoria-network.jimdosite.com/", true)
             .addField("Twitter", "https://mobile.twitter.com/ZeldoriaMCPE", true)
             .addField("Youtube", "https://www.youtube.com/channel/UCwx3328ntu7rCS6N_f5oBFQ", true)
             .setColor("0x0000FF")
        message.channel.sendEmbed(embed);
    }
   
});

switch (args[0].toLowerCase()) {
    case "play":
        if(!args[1]) {
           message.channel.sendMessage("Veuillez  mettre un lien youtube");
           return;
        }

        if (!message.member.voiceChannel) {
            message.channel.sendMessage("Vous devez être dans un channel pour faire cette commande");
            return;



    }

    if(!servers[message.guild.id]) servers[message.guild.id] = {
    queue: []
    };


    var server = servers[message.guild.id];

    server.queue.push([1]);

    if(!message.member.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
    play(connection, message);
    });
    break;
    case "skip":
    var server = servers[message.guild.id];

    if (server.dispatcher) server.dispatcher.end();
    break;
    case "stop":
    var server = servers[message.guild.id];
    
    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    break;
    default:
    message.channel.sendMessage("Erreur de commande, Réesayer")
};
