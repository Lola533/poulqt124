var Discord = require("discord.js");
bot = new Discord.Client();
client = new Discord.Client();
const Google = require('./google')
const Blague = require('./blague')
const Youtube = require('./youtube')
const Whatis = require('./whatis')
const Wiki = require('./wiki')
const Docs = require('./docs')
const config = require("./config.json");
var prefix = ("_");
bot.on('ready', function()  {
    console.log("Connecte en tant que " + bot.user.username + " | Prefix : " + prefix + " | Nombre de Serveurs "+ bot.guilds.size +" | Nombres de channels "+ bot.channels.size +" | Utilisateur totaux "+ bot.users.size +" | Nombre d'emojis totaux "+ bot.emojis.size +'');
    avatar = "https://cdn.discordapp.com/attachments/479379001702612993/483003684687446046/KannaArmy_1.png"
    bot.user.setAvatar(avatar);
    bot.user.setUsername("Kanna-Army")
    bot.user.setGame("_help | Nombre de Serveurs "+ bot.guilds.size +'');
});

bot.on('ready',() => {
 
  //invit link
  bot.guilds.forEach(guild => {
    var invite = bot.guilds.find("id", guild.id)
    console.log(`Connecte sur : ${guild.name}`);
  })
});

 
bot.on('message', msg => {
 
if (msg.content === '_blague'){
  msg.delete()
}
if (msg.content === ':round_pushpin: `Un message contenant les commandes du bot vous a ete envoye !`'){
  msg.delete()
}
if (msg.content === '_help'){
  msg.delete()
  msg.channel.send(":round_pushpin: `Un message contenant les commandes du bot vous a ete envoye !`")
}

   
  if (msg.content === ":black_nib: Un message contenant l'invitation du bot vient d'etre envoye dans votre message prive !"){
        msg.delete()
      }
if (msg.content === "Hacking DEAD"){
  msg.delete();
msg.channel.sendMessage("**Tentative de Hack Evite !**");
}
  if (msg.content === '_help'){
 
        let sicon = bot.user.displayAvatarURL;
          var help_embed = new Discord.RichEmbed()
         
 
          .setThumbnail(sicon)
          .addField(":flag_cp: Un bot Discord 2500% kanna :flag_cp:","**INFORMATION **", true)
          .addField(":gear: _mod","```Moderation```", false)
          .addField(":fleur_de_lis: _div","```Divertisement```", true)
          .addField(":video_game: _game","```Amusement```", false)
          .addField("Recevoir le panel d'aide directement :",":point_right: _hhelp", true)
              .setColor("#320242")
              .setFooter("Developper par Kanna Kamui & Emile || CORPORATION 2018")
              msg.author.sendEmbed(help_embed).catch(console.error);
 
 
      }

       if (msg.content === '_mod'){
 
        msg.delete();
                let sicon = bot.user.displayAvatarURL;
                  var help_embed = new Discord.RichEmbed()
                 
                 
                  .setTitle("Kanna army - Moderation")
                  .setThumbnail(sicon)
                      .addField(":page_facing_up: Info ","**Certaines commandes dependra des permissions Administrateur ou Moderateur.**", true)
                      .addField(":black_small_square: _ban + @user","```Bannir l'utilisateur.```", true)
                      .addField(":black_small_square: _kick + @user","```Kick l'utilisateur.```", false)
                      .addField(":black_small_square: _advert + annonce", "```Transforme votre annonce en embed.```", true)
                      .addField(":black_small_square: _purge + Nbre","```Efface les derniers messages entre 2 a 99 messages.```", true)
                      .addField(":black_small_square: _whois + @user","```Affiche les informations d'un membre.```", false)
                      .addField(":black_small_square: _udapte","```Montre les dernieres mise a jour du bot.```", false)
                      .addField(":black_small_square: _anti-spam","```Configurer l'anti-spam.```",false)
              .addField(":black_small_square: _vcs + phrase","```Permet d'envoyer un message dans l'inter-serveur du bot, la seule condition est de cree un salon (#vcs). ```",true)
                      .addField(":black_small_square: _rainbow","```Change la couleur du role rainbow a chaque secondes : \n[Cree le role (rainbow) et placer le au dessus de tout les roles et faites la meme chose pour le role du bot mais il devra etre au dessus du role *rainbow*].```", false)
                      .addField(":black_small_square: _createinvite","```Cree une invitation du serveur directement.```",true)
                      .addField(":black_small_square: _stats","```Voir les statistiques du bot totaux.```", true)
                      .addField(":black_small_square: _roleadd/remove + nom du role","```Attribue/Retire le role a tout les utilisateurs du serveur.```", true)
                      .addField(":black_small_square: _serverinfo","```Affiche les information du serveur.```", false)
                      .addField(":black_small_square: _sondage + phrase","```Permet de faire un sondage rapide.```", true)
                      .addField(":black_small_square: _ping","```Calcule le ping entre l'envoi d'un message et sa provenance.```", true)
                      .addField(":black_small_square: _quit","```Kanna army quitte le serveur avec un message d'adieu.```", false)
                      .addField(":black_small_square: _report","```Envoi d'un report qui sera d'abord traiter par le concepteur du bot,\net transmis vers un moderateur discord de facon construite et convaincant.\n(usage : _report [@user/ID] ou [@serveur/ID] motif/preuves + ID/screens).```", true)
                      .setColor("#320242")
                      .setFooter("Developper par Kanna Kamui & Emile || CORPORATION 2018")
                      msg.channel.sendEmbed(help_embed).catch(console.error);
       
}
              if (msg.content === '_div'){
 
                msg.delete();
                        let sicon = bot.user.displayAvatarURL;
                          var help_embed = new Discord.RichEmbed()
   
                         
                          .setTitle("Kanna army - Divertisement")
                          .setThumbnail(sicon)
                              .addField(":page_facing_up: Info ","**De nouvelles commandes fun arrivent !**", true)
                              .addField(":black_small_square: _bvn","```Souhaiter la bienvenue !```", false)
                              .addField(":black_small_square: _blague","```Propose une blague aleatoires.```",false)
                              .addField(":black_small_square: _pp + @user","```Affiche la photo de profil du membre.```", false)
               .addField(":black_small_square: _pub","```Envoi une pub copiable sur Kanna army en message prive ^^```",false)
                              .addField(":black_small_square: _wiki + recherche","```Fait une recherche sur wikipedia.```", false)
                              .addField(":black_small_square: _invite","```Envoi un lien d'invitation du bot via un message prive.```", true)
                              .addField(":black_small_square: _ping","```Calcule le ping entre l'envoi d'un message et sa provenance.```", true)
                              .addField(":black_small_square: _whatis front-end/back-end/full-stack","```Savoir les definitions du codage.```", true)
                              .addField(":black_small_square: _doc","```Une documentation qui permet d'obtenir des info dans les languages de programmation.```", true)
                              .setColor("#320242")
                              .setFooter("Developper par Kanna Kamui & Emile || CORPORATION 2018")
                              msg.channel.sendEmbed(help_embed).catch(console.error);
 
               
                      }

 
        if (msg.content === '_game'){
msg.delete();
let sicon = bot.user.displayAvatarURL;
          var help_embed = new Discord.RichEmbed()
                                   
          .setTitle("Kanna army - Amusement")
          .setThumbnail(sicon)
              .addField(":page_facing_up: Info ","**Prochainement**\n:crossed_swords: 2V2", true)
              .setTitle("Voici la liste des jeux disponibles :")
              .addField(":black_small_square: _pierre/feuille/ciseaux ","```Jouer a pierre feuille ciseaux avec Kanna army !```", false)
              .addField(":black_small_square: _vrai/faux + phrase","```Kanna army vous repondra par vrai ou faux.```", true)
              .addField(":black_small_square: _flip ","```Jouer a Pile ou Face !```", false)
        .addField(":black_small_square: _say + pharse","```Kanna army prononce vos phrases.```", true)
        .addField(":black_small_square: _8ball + question","```Repond a toutes vos question.```", false)
                .setColor("#320242")
                .setFooter("Developper par Kanna Kamui & Emile || CORPORATION 2018")
              msg.channel.sendEmbed(help_embed).catch(console.error);
 
      }
 
});          
bot.on('message', msg => {

     
  if (msg.content.startsWith('_vcs')) {
      let msgArray = msg.content.split(" ");
   let args = msgArray.slice(1);
   
 const Discord = require('discord.js')
 var xo02 = msg.guild.channels.find('name','vcs');
 if(msg.channel.name !== 'vcs') {
 return msg.author.send("Cette commande ne peut-etre executer que dans le salon #vcs !").catch(console.error)
 }

if(msg.author.id === "287704598980984832" && "389409933440974858") {
   let xoargs = msg.content.split(" ");
 xoargs.splice(0, 1);
 xoargs = xoargs.join(' ')
   const modo_vcs = new Discord.RichEmbed()
   .setColor("#320242")
   .setTitle("Moderateur VCS")
   .setAuthor("VCS-Kanna army", msg.guild.iconURL)
   .addField("Message ", xoargs)
   .addField("L'auteur du message ",msg.author.tag)  
.addField("Serveur du message ", msg.guild.name, true)
    .setThumbnail(msg.author.avatarURL)
   .setTimestamp()
   msg.delete()
   return bot.channels.findAll('name', 'vcs').map(channel => channel.send(modo_vcs));
 }
if(msg.author.id === "238677711193636866") {
   let xoargs = msg.content.split(" ");
 xoargs.splice(0, 1);
 xoargs = xoargs.join(' ')
   const dev_vcs = new Discord.RichEmbed()
   .setColor("#320242")
   .setTitle("Friend VCS")
   .setAuthor("VCS-Kanna army", msg.guild.iconURL)
   .addField("Message ", xoargs)
   .addField("L'auteur du message ",msg.author.tag)  
.addField("Serveur du message ", msg.guild.name, true)
    .setThumbnail(msg.author.avatarURL)
   .setTimestamp()
   msg.delete()
   return bot.channels.findAll('name', 'vcs').map(channel => channel.send(dev_vcs));
 }

 
 if(msg.author.id === "279697055507546113") {
   let xoargs = msg.content.split(" ");
 xoargs.splice(0, 1);
 xoargs = xoargs.join(' ')
   const dev_vcs = new Discord.RichEmbed()
   .setColor("#320242")
   .setTitle("Developpeur VCS")
   .setAuthor("VCS-Kanna army", msg.guild.iconURL)
   .addField("Message ", xoargs)
   .addField("L'auteur du message ",msg.author.tag)  
.addField("Serveur du message ", msg.guild.name, true)
    .setThumbnail(msg.author.avatarURL)
   .setTimestamp()
   msg.delete()
   return bot.channels.findAll('name', 'vcs').map(channel => channel.send(dev_vcs));
 }
 if(msg.author.id === "478640425976987650") {
   let xoargs = msg.content.split(" ");
 xoargs.splice(0, 1);
 xoargs = xoargs.join(' ')
   const chefsupport = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setTitle("Responsable des Support VCS")
   .setAuthor("VCS-Kanna army", msg.guild.iconURL)
 .addField(` Envoyer depuis : `, msg.guild.name )
   .addField("Message ", xoargs)
    .setFooter(msg.author.tag + " | sur le serveur : " + msg.guild.name + " id du serveur : (" + msg.guild.id + ").")
   .setThumbnail(msg.author.avatarURL)
   .setTimestamp()
   msg.delete()
   return bot.channels.findAll('name', 'vcs').map(channel => channel.send(chefsupport));
 }
  if(msg.author.id === "483668412698984448" && "") {
 var vcsbanned_embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setTitle("Tu a ete banni du VCS !")
   .addField("*BANNI !!*", " :x: Vous avez ete banni du VCS ! \nVeuillez contacter un administrateur ou un membre du support.")
   .setFooter(msg.author.username)
 return msg.author.send(vcsbanned_embed).catch(console.error)  
 }
 
 var https = msg.content.split("www.","http").slice(1)[0];
   msg.delete();
 if(https) return msg.channel.send(` ** Les liens sont interdits !\nVeuillez ne pas recommencer sous peine de bannisement du vcs.** `)
 console.log("Publication d'un lien dans le VCS !!")
 let xoargs = msg.content.split(" ");
 xoargs.splice(0, 1);
 xoargs = xoargs.join(' ')
 const vcs_embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setAuthor("VCS-Kanna army", msg.guild.iconURL)
   .addField("Message ", xoargs)
   .addField("L'auteur du message ",msg.author.tag)  
.addField("Serveur du message ", msg.guild.name, true)
    .setThumbnail(msg.author.avatarURL)
   .setTimestamp()
 msg.delete()
 bot.channels.findAll('name', 'vcs').map(channel => channel.send(vcs_embed));
 console.log("VCS : msg de " + msg.author.tag + " (" + msg.author.id + ") depuis le serveur " + msg.guild.name + " (" + msg.guild.id + ") : " + xoargs)
 }
 
 
 
 
});
 
bot.on('message', function(message) {

 
    Blague.parse(message)
 
  Wiki.parse(message)
 
  Whatis.parse(message)
 
  Youtube.parse(message)
 
  Google.parse(message)
 
    Docs.parse(message)
 
  if(message.content.startsWith('_vrai')) {
 
        let randnum_game = Math.floor(Math.random() * 2)
 
        if (randnum_game == 0) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("**Vrai** :wink:")
            .setFooter('Jeu du vrai ou faux')
            message.channel.send(embed).catch(console.error)
 
        } else if(randnum_game == 1) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("**Faux** :wink:")
            .setFooter('Jeu du vrai ou faux')
            message.channel.send(embed).catch(console.error)
    }
   
    }
 
  if(message.content.startsWith('_faux')) {
 
        let randnum_game = Math.floor(Math.random() * 2)
 
        if (randnum_game == 0) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("**Vrai** :wink:")
            .setFooter('Jeu du vrai ou faux')
            message.channel.send(embed).catch(console.error)
 
        } else if(randnum_game == 1) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("**Faux** :wink:")
            .setFooter('Jeu du vrai ou faux')
            message.channel.send(embed).catch(console.error)
    }
   
    }
    if(message.content.startsWith('_8ball')) {
      let randnum_game = Math.floor(Math.random() * 6)
 
      if (randnum_game == 0) {
 
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Totalement d'accord.")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
 
      } else if(randnum_game == 1) {
 
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Je pense que non.")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }else if(randnum_game == 2) {
 
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Je pense que oui.")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }else if(randnum_game == 3) {
 
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Je suis en desaccord avec toi...")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }else if(randnum_game == 4) {
 
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("A toi d'en decider..")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }else if(randnum_game == 5) {
 
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Je ne trouve pas une reponse a ta question...")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }
     
      }
  if(message.content.startsWith('_pierre')) {
 
        let randnum_game = Math.floor(Math.random() * 3)
 
        if (randnum_game == 0) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":dagger: | Resultat: ciseaux")
            .setFooter('Victoire de '+message.author.username+'')
            message.channel.send(embed).catch(console.error)
 
        } else if(randnum_game == 1) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":crossed_swords: | Resultat: pierre")
            .setFooter('Egalite !')
            message.channel.send(embed).catch(console.error)
 
    }    else if(randnum_game == 2) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":skull_crossbones: | Resultat: feuille")
            .setFooter("Victoire du bot !  ")
            message.channel.send(embed).catch(console.error)
    }
   
    }
  if(message.content.startsWith('_feuille')) {
 
        let randnum_game = Math.floor(Math.random() * 3)
 
        if (randnum_game == 0) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":dagger: | Resultat: pierre")
            .setFooter('Victoire de '+message.author.username+' ')
            message.channel.send(embed).catch(console.error)
 
        } else if(randnum_game == 1) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":crossed_swords: | Resultat: feuille")
            .setFooter('Egalite !')
            message.channel.send(embed).catch(console.error)
 
    }    else if(randnum_game == 2) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":skull_crossbones: | Resultat: ciseaux")
            .setFooter("Victoire du bot ! ")
            message.channel.send(embed).catch(console.error)
    }
   
    }
      if(message.content.startsWith('_ciseaux')) {
 
        let randnum_game = Math.floor(Math.random() * 3)
 
        if (randnum_game == 0) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":dagger: | Resultat: feuille")
            .setFooter('Victoire de '+message.author.username+'!')
            message.channel.send(embed).catch(console.error)
 
        } else if(randnum_game == 1) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":crossed_swords: | Resultat: ciseaux")
            .setFooter('Egalite !')
            message.channel.send(embed).catch(console.error)
 
    }    else if(randnum_game == 2) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":skull_crossbones: | Resultat: pierre")
            .setFooter("Victoire du bot !  ")
            message.channel.send(embed).catch(console.error)
    }
   
    }
      if(message.content.startsWith('_flip')) {
 
        let randnum_game = Math.floor(Math.random() * 2)
 
        if (randnum_game == 0) {
 
message.channel.send(":triangular_flag_on_post: | C'est pile !")
 
        } else if(randnum_game == 1) {
 
message.channel.send(":triangular_flag_on_post: | C'est face !")
   
    }
      }

      if(message.content.startsWith('_gif')) {
        var kanna = [
          "https://media.giphy.com/media/vwFJbT5uIBNja/giphy.gif",
          "https://media.giphy.com/media/Q2DabV4eRh160/giphy.gif",
          "https://media.giphy.com/media/SFMEPM1LHxdYY/giphy.gif",
          "https://media.giphy.com/media/cgEP4Iee5gvks/giphy.gif",
          "https://media.giphy.com/media/WcEvIajIk332g/giphy.gif",
          "https://media.giphy.com/media/yi8q3R3Nuuif6/giphy.gif",
          "https://media.giphy.com/media/xgTs8CcCMbqb6/giphy.gif",
          "https://cdn.discordapp.com/attachments/476875514351452193/477410404004397067/2b75ec010390c2b7452fe2ff686d542265e81bd1_hq.gif"
        ];

        var gif = kanna[Math.floor(Math.random() * kanna.length)];
        

        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Kanna GIF')
        .setImage(gif)
        .setFooter("Kanna is cute <3")
        message.channel.send(embed);
      }
      
      

});
 
 
bot.on("guildCreate", guild => {
  var invite = guild.channels.find("id", guild.channels.random().id);
  invite.createInvite().then(invite => {
      let sicon = guild.iconURL;
      var date = guild.createdAt;
      let serverembed = new Discord.RichEmbed()
        .setTitle("Un nouveau serveur vient d'ajoute Kanna army !")
      .setColor("#320242")
      .setThumbnail(sicon)
      .addField("`Nom du serveur `", guild.name, false)
      .addField("`ID du Serveur `", guild.id, false)
      .addField("`Createur du Serveur `", guild.owner, false)
      .addField("`Serveur cre le `", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" a "+date.getHours()+":"+date.getMinutes(), true)
      .addField("`Utilisateurs `", guild.memberCount, false)
      .addField("`Region `", guild.region, false)
      .setFooter(`https://discord.gg/${invite.code}`)
.setColor('#320242');
 
bot.channels.find('id',"499540397375225867").send(serverembed);
 
 
})
});

bot.on("guildMemberAdd", member => {
var join = member.guild.channels.find("name", "bienvenue");
var embed = new Discord.RichEmbed()
.setTitle("Nouvel Utilisateur!")
.setColor("#320242")
.addField(`Bienvenue a ${member.user.username}`)
  join.send(embed);


});


  bot.on('message', message => {

 
   
    if (message.content.startsWith(prefix)) {
        if(message.author.bot) return;
        try {
            var splited_message = message.content.slice(prefix.length).split(" ");
            var command = splited_message[0];
            var parameters = splited_message.slice(1)
        } catch (error) {
            return
        };
       
       
        try {
           

            if (["advert"].includes(command)) {
    if(!message.member.hasPermission("MANAGE_MESSAGES") )
      return message.reply("Desole mais vous n'avez pas les droits necessaires pour utiliser cette commande.");
      const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
      const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{});
  var toRepeat = parameters.join(" ");
  var advert_embed = new Discord.RichEmbed()
            .setColor('#320242')
         .setAuthor(message.author.username, message.author.avatarURL)
            .setDescription(`@everyone\n\n___***${toRepeat}***___`)
            .setThumbnail("https://cdn.discordapp.com/attachments/427148659675758601/442669553735041024/Blason_frp_original.png")
            .setTimestamp()
            message.channel.sendEmbed(advert_embed);
 
  }
           
  
            else if (["say"].includes(command)) {
        message.delete();
                var toRepeat = parameters.join(" ");
                if (toRepeat === "") {
                    return message.channel.send("? **Utilisation:** "+prefix+"say <message>")
                };
                toRepeat = toRepeat .replace("@everyone", "@??everyone")
                  .replace("@here", "@??here");
 
                  var embed = new Discord.RichEmbed()
 
                  .setAuthor(bot.user.username, bot.user.avatarURL)    
                  .setDescription(toRepeat)
                  .setColor("#320242");
     
              message.channel.send(embed).catch(console.error);
            }           else if (["report"].includes(command)) {
message.delete();
               if (!guild.name === "NoFalls_") 
                   return message.channel.sendMessage("EZ")
              var toRepeat = parameters.join(" ");
              if (toRepeat === "") {
                return message.channel.send("Veuillez completer votre report...")
              };
              toRepeat = toRepeat   .replace("@everyone", "@??everyone")
                        .replace("@here", "@??here");
                        let sicon = message.author.displayAvatarURL;                      
                        var embed = new Discord.RichEmbed()
     
                        .setTitle("Un report vient d'etre envoye  !")
                        .addField("L'auteur du message ",message.author.tag)  
                        .setThumbnail(sicon)
                        .addField("Serveur du message ", message.guild.name, true)
                        .setDescription(toRepeat)
                        .setTimestamp()    
                        .setColor("#320242")                              
                        .setFooter("Developper par Kanna Kamui & Emile || CORPORATION 2018");
   
 
                         
                        bot.channels.find('id',"498419215980822538").send({embed});                    
                    message.author.send("`Votre report a bien ete envoye est sera traite dans les plus bref delais.`").catch(console.error);
 
                  }
 
                else if (["pp"].includes(command)) {
            message.delete();
                        var member = message.author;
                if (parameters.length > 0) {
                    let member_got = message.guild.member(message.mentions.users.first() || message.guild.members.get(parameters[0]));
                    if (member_got != undefined) {
                        var member = member_got.user
                    }
                };
    message.channel.send({
      embed: {
        color: 2550255,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: "**Photo de profil**",
        url: member.avatarURL,
        image: {
          url: member.avatarURL
        },
 
        footer: {
          icon_url: message.author.avatarURL,
          text: "demande par "+message.author.username+""
        }
      }
    });
  }
           
            else if (["whois"].includes(command)) {
                message.delete();
                var member = message.author;
                if (parameters.length > 0) {
                    let member_got = message.guild.member(message.mentions.users.first() || message.guild.members.get(parameters[0]));
                    if (member_got != undefined) {
                        var member = member_got.user
                    }
                };
                var champ_additions = [];
                var champ_permissions = [];
        var date = member.createdAt;
        if(member.presence.status === "online"){
          var statut = "Connecte"
        }
         if(member.presence.status === "dnd"){
          var statut = "Ne pas deranger"
        }
        if(member.presence.status === "offline"){
          var statut = "Deconnecte"
        }
        else if(member.presence.status === "idle"){
          var statut = "Inactif"
    }
                var embed = new Discord.RichEmbed()
 
                    .setColor("#320242")
                    .setFooter("Demande par "+ message.author.username, message.author.avatarURL)
                    .setThumbnail(member.displayAvatarURL)
                    .setAuthor(member.username, member.avatarURL)              
          .addField("Pseudo ", member.username, true)
                    .addField("Creation du compte ", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" a "+date.getHours()+":"+date.getMinutes(), true)
          .addField("Identification ", member.id,true)
          .addField("Discriminateur ", member.discriminator,true)
          .addField("Statut ", statut, true);
 
       
                if (member.bot) {
                    champ_additions[champ_additions.length] = "Robot"
                } else if (member.id === "478640425976987650" || member.id === "478640425976987650") {
                    champ_additions[champ_additions.length] = " Chef du bot\n Permissions : Administrateur"
                };
               
                if (member.bot) {
                    champ_additions[champ_additions.length] = "439758410561486848"               } else if (member.id === "329321891707748355" || member.id === "279697055507546113") {
                    champ_additions[champ_additions.length] = ":bank: Role Developpeur  Createur\n  Permissions: Administrateur"
                };
               
                if (champ_additions.length > 0) {
                    embed.addField("Suplementaire :", champ_additions.join("\n"))
                };
                message.channel.send("", {embed}).catch(console.error);
            }
    else if (["hhelp"].includes(command)) {
message.delete();
        let sicon = bot.user.displayAvatarURL;
          var help_embed = new Discord.RichEmbed()
         
         
 
          .setThumbnail(sicon)
          .addField(":flag_cp: Un bot Discord de moderation 2500% francais :flag_cp:","**INFORMATION **", true)
          .addField(":gear: _mod","```Moderation```", false)
          .addField(":fleur_de_lis: _div","```Divertisement```", true)
          .addField(":video_game: _game","```Amusement```", false)
          .setColor("#320242")
          .setFooter("Developper par Kanna Kamui & Emile || CORPORATION 2018")
         message.channel.sendEmbed(help_embed).catch(console.error);
      }
        else if (["roleremove"].includes(command)) {
        message.delete();
        var roledebut = message.content.split(" ").slice(1).join(" ")
        let role_succes = new Discord.RichEmbed()
        .setColor('#FFCC99')
        .setAuthor(bot.user.username, bot.user.avatarURL)  
        .setDescription("Le role suivant : "+"`"+roledebut+"`"+" vient d'etre retire a tout les membres du serveur.")
        .setFooter("Demande par "+ message.author.username, message.author.avatarURL);
        let role = message.guild.roles.find("name", roledebut)
        let role_erreur = new Discord.RichEmbed()
        .setTitle("ERREUR 306")
        .setColor("#FFCC99")               
        .addField(":x:", "**Vous devez avoir des droits administrateurs pour effectuer cette commande.**")
        .setFooter("Demande par "+ message.author.username, message.author.avatarURL)
        .setThumbnail(bot.user.avatarURL)
        .setFooter("Demande par "+ message.author.username, message.author.avatarURL);
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(role_erreur).catch(e => {});
      if(message.guild.roles.exists("name", roledebut)) {
          message.channel.send(role_succes)
          message.guild.members.forEach(member => {
            member.removeRole(role);
 
          })
        } 
      }
        else if (["roleadd"].includes(command)) {
        var roledebut = message.content.split(" ").slice(1).join(" ")
        let role_succes = new Discord.RichEmbed()
        .setColor('#FFCC99')
        .setAuthor(bot.user.username, bot.user.avatarURL)  
        .addField(":white_check_mark:", "Le role suivant : "+"`"+roledebut+"`"+" vient d'etre ajoute a tout les membres du serveur.")
        .setFooter("Demande par "+ message.author.username, message.author.avatarURL);
        let role = message.guild.roles.find("name", roledebut)
        let role_erreur = new Discord.RichEmbed()
        .setTitle("ERREUR 306")
        .setAuthor(bot.user.username, bot.user.avatarURL)  
        .setColor("#FFCC99")
        .addField(":x:", "**:x: Vous devez avoir des droits administrateurs pour effectuer cette commande.**")
        .setThumbnail(bot.user.avatarURL)
        .setFooter("Demande par "+ message.author.username, message.author.avatarURL);
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(role_erreur).catch(e => {});
      if(message.guild.roles.exists("name", roledebut)) {
          message.channel.send(role_succes)
          message.guild.members.forEach(member => {
            member.addRoles(role);
 
          })
        }
      }
     
   
 
 
        else if (["ping"].includes(command)) {
        message.delete();
 
 
          var help_embed = new Discord.RichEmbed()
       
 
              .setAuthor(bot.user.username, bot.user.avatarURL)
              .addField("Pong !",`:stopwatch: ${Math.round(bot.ping)} ms`, true)
              .setColor("#320242")
                    .setFooter("Demande par "+ message.author.username, message.author.avatarURL)
             message.channel.sendEmbed(help_embed).catch(console.error);
      }
 
 
    else if (["bvn"].includes(command)) {
        message.delete();
        message.channel.send({
          embed: {
            color: 595959,
            author: {
              name: (message.author.username + ' vous souhaite la bienvenue ! '),
              icon_url: message.author.avatarURL,
             
            },
           
   
            footer: {
 
              text: "Astuce : Vous aussi souhaitez la bienvenue avec _bvn"
             
            }
              }
        });
       
    }
 
    else if (["invite"].includes(command)) {
 
    const sicon = bot.user.displayAvatarURL
          var help_embed = new Discord.RichEmbed()
 
    .setTitle(">>> Ajouter Kanna army <<<")
    .addField("Bot Invitation","[CLIQUER ICI](https://discordapp.com/oauth2/authorize?client_id=482996893543301141&scope=bot&permissions=8)")
    .setColor("#320242")
    .setImage('https://images-ext-2.discordapp.net/external/NYKapoNyFuvHyEN9pfZ_RpQc3o_sIHPwdbEa8bALjGE/https/media.giphy.com/media/vwFJbT5uIBNja/giphy.gif?width=400&height=225')
    .setThumbnail(sicon)
    .setURL('https://discordapp.com/oauth2/authorize?client_id=482996893543301141&scope=bot&permissions=8')
    .setFooter("Developper par Kanna Kamui & Emile || CORPORATION 2018");
 
  message.author.sendEmbed(help_embed).catch(console.error)
  message.channel.send(":black_nib: Un message contenant l'invitation du bot vient d'etre envoye dans votre message prive !")
  message.delete(":black_nib: Un message contenant l'invitation du bot vient d'etre envoye dans votre message prive !")
 
}
            else if (["anti-spam"].includes(command)) {
        message.delete();
 
 
          var help_embed = new Discord.RichEmbed()
          .setTitle("????????-????????")
          .setAuthor(bot.user.username, bot.user.avatarURL)    
          .setColor("#320242")
          .setImage('https://i.gyazo.com/7a8926b4453d0125d1207aa117b59722.png')
                    .setFooter("Demande par "+ message.author.username, message.author.avatarURL)
          message.channel.send(help_embed)
           
          }  
          else if (["update"].includes(command)) {    
          let sicon = bot.user.displayAvatarURL;
            var help_embed = new Discord.RichEmbed()
            .setTitle("Voici les derniere mise a jour du bot :")
          .setThumbnail(sicon)
              .addField("Mise a jour - Jeux","```Nouveau jeux en developpement```", true)
              .addField("Mise a jour - GIF","```Profitez desormais des kanna gif en tapant la command _gif```", true)
              .addField("Mise a jour - Host","```Le bot est desormais sur un hebergeur !```", false)
          .setColor("#320242")
                    .setFooter("Demande par "+ message.author.username, message.author.avatarURL)
             message.channel.sendEmbed(help_embed).catch(console.error);
      }
      if (message.content.startsWith(prefix + "sondage")){
        if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
      return message.channel.send("?  Vous n'avez pas la permission d'utiliser cette commande.")
        let args = message.content.split(" ").splice(1);
        let thingToEcho = args.join(" ")
        var embed = new Discord.RichEmbed()
        .setDescription(thingToEcho)
        .setTitle("__**Sondage**__")
        .setColor("#320242")
        .setTimestamp()
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.sendEmbed(embed)
        .then(function (message) {
            message.react("?")
            message.react("?")
        }).catch(e => {});
     
    }
 
 
      else if (["serverinfo"].includes(command)) {
        message.delete();  
 
        let sicon = message.guild.iconURL;
        var date = message.guild.createdAt;
        let serverembed = new Discord.RichEmbed()
                   
        .setTitle("?????????????????????? ???? ??????????????")
        .setColor("#320242")
        .setThumbnail(sicon)
        .addField("`Nom du serveur `", message.guild.name, true)
        .addField("`ID du Serveur `", message.guild.id, true)
        .addField("`Createur du Serveur `", message.guild.owner, true)
        .addField("`Serveur creer le `", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" a "+date.getHours()+":"+date.getMinutes(), true)
        .addField("`Utilisateurs `", message.guild.memberCount, true)
        .addField("`Region `", "Europe de l'ouest", true)
        .addField("`Nombre de channel `", message.guild.channels.size, true)
        .addField("`Nombre d'emoji `", message.guild.emojis.size, true)
        .addField("`Liste des emojis `", message.guild.emojis.map(e=>e.toString()).join(" "), true)
        .addField("`Level de verification `", message.guild.verificationLevel, true)
                    .setFooter("Demande par "+ message.author.username, message.author.avatarURL)
       
        message.channel.send(serverembed).catch(e => {});
      }
                else if (["reload"].includes(command)) {
              message.delete();
                 if (!message.author.id === "478640425976987650" && "279697055507546113")
      return message.channel.sendMessage(" Vous n'avez pas la permission d'utiliser cette commande.")
        message.channel.sendMessage(":arrows_counterclockwise:  Redemarrage en cours...");
        loadCmds()
      }
      else if (["createinvite"].includes(command)) {
        message.delete();
        message.channel.createInvite().then(invite => {
        let serverembed = new Discord.RichEmbed()
 
        .setAuthor(bot.user.username, bot.user.avatarURL)  
        .setDescription(`** Voici ton invite : https://discord.gg/${invite.code} **`, true)
        .setColor("#320242")
    .setFooter("Demande par "+ message.author.username, message.author.avatarURL)
    message.channel.sendEmbed(serverembed).catch(console.error);
        })
      }

 
 
 
        else if (["quit"].includes(command)) {
              message.delete();
        if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
      return message.channel.send("?  Vous n'avez pas la permission d'utiliser cette commande.")
   
      message.channel.send("`Cetait un plaisir de rester dans votre serveur `")
       
      message.guild.leave().catch(console.error);
   
    }
                 
   else if (["rainbow"].includes(command)) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("❌ ** Tu n'as pas la permission `ADMINISTRATEUR` ** ❌");
     
if (!message.guild.roles.find("name", "rainbow")) return message.reply("❌ **  Le role `rainbow` n'existe pas ** ❌")
message.reply('🌈 La commande est maintenant activé, il te reste juste à attribué le role ! 🌈')
let args = message.content.split(' ')
args.shift()
message.delete()

var myRainbow = message.guild.roles.find("name", "rainbow")
let i = 0;
let interval = setInterval(function () {
myRainbow.setColor("RANDOM").catch(e => {});

}, 4500)
}

    else {
            console.log("[LOG] ["+message.author.tag+" = "+message.author.id+"] ["+message.guild.name+"] La commande "+command+" a ete executee.")
   
      }
 
        }  
 
        catch (error) {
          console.log("[ERREUR] ["+message.author.tag+" = "+message.author.id+"] "+message.content)
 
          console.log(error)
        }
      }
   
   
});

bot.login(process.env.TOKEN)
var Discord = require("discord.js");
bot = new Discord.Client();
client = new Discord.Client();
const Google = require('./google')
const Blague = require('./blague')
const Youtube = require('./youtube')
const Whatis = require('./whatis')
const Wiki = require('./wiki')
const Docs = require('./docs')
const config = require("./config.json");
var prefix = ("_");
bot.on('ready', function()  {
    console.log("Connecte en tant que " + bot.user.username + " | Prefix : " + prefix + " | Nombre de Serveurs "+ bot.guilds.size +" | Nombres de channels "+ bot.channels.size +" | Utilisateur totaux "+ bot.users.size +" | Nombre d'emojis totaux "+ bot.emojis.size +'');
    avatar = "https://cdn.discordapp.com/attachments/479379001702612993/483003684687446046/KannaArmy_1.png"
    bot.user.setAvatar(avatar);
    bot.user.setUsername("Kanna-Army")
    bot.user.setGame("_help | Nombre de Serveurs "+ bot.guilds.size +'');
});

bot.on('ready',() => {
 
  //invit link
  bot.guilds.forEach(guild => {
    var invite = bot.guilds.find("id", guild.id)
    console.log(`Connecte sur : ${guild.name}`);
  })
});

 
bot.on('message', msg => {
 
if (msg.content === '_blague'){
  msg.delete()
}
if (msg.content === ':round_pushpin: `Un message contenant les commandes du bot vous a ete envoye !`'){
  msg.delete()
}
if (msg.content === '_help'){
  msg.delete()
  msg.channel.send(":round_pushpin: `Un message contenant les commandes du bot vous a ete envoye !`")
}

   
  if (msg.content === ":black_nib: Un message contenant l'invitation du bot vient d'etre envoye dans votre message prive !"){
        msg.delete()
      }
if (msg.content === "Hacking DEAD"){
  msg.delete();
msg.channel.sendMessage("**Tentative de Hack Evite !**");
}
  if (msg.content === '_help'){
 
        let sicon = bot.user.displayAvatarURL;
          var help_embed = new Discord.RichEmbed()
         
 
          .setThumbnail(sicon)
          .addField(":flag_cp: Un bot Discord 2500% kanna :flag_cp:","**INFORMATION **", true)
          .addField(":gear: _mod","```Moderation```", false)
          .addField(":fleur_de_lis: _div","```Divertisement```", true)
          .addField(":video_game: _game","```Amusement```", false)
          .addField("Recevoir le panel d'aide directement :",":point_right: _hhelp", true)
              .setColor("#320242")
              .setFooter("Developper par Kanna Kamui & Emile || CORPORATION 2018")
              msg.author.sendEmbed(help_embed).catch(console.error);
 
 
      }

       if (msg.content === '_mod'){
 
        msg.delete();
                let sicon = bot.user.displayAvatarURL;
                  var help_embed = new Discord.RichEmbed()
                 
                 
                  .setTitle("Kanna army - Moderation")
                  .setThumbnail(sicon)
                      .addField(":page_facing_up: Info ","**Certaines commandes dependra des permissions Administrateur ou Moderateur.**", true)
                      .addField(":black_small_square: _ban + @user","```Bannir l'utilisateur.```", true)
                      .addField(":black_small_square: _kick + @user","```Kick l'utilisateur.```", false)
                      .addField(":black_small_square: _advert + annonce", "```Transforme votre annonce en embed.```", true)
                      .addField(":black_small_square: _purge + Nbre","```Efface les derniers messages entre 2 a 99 messages.```", true)
                      .addField(":black_small_square: _whois + @user","```Affiche les informations d'un membre.```", false)
                      .addField(":black_small_square: _udapte","```Montre les dernieres mise a jour du bot.```", false)
                      .addField(":black_small_square: _anti-spam","```Configurer l'anti-spam.```",false)
              .addField(":black_small_square: _vcs + phrase","```Permet d'envoyer un message dans l'inter-serveur du bot, la seule condition est de cree un salon (#vcs). ```",true)
                      .addField(":black_small_square: _rainbow","```Change la couleur du role rainbow a chaque secondes : \n[Cree le role (rainbow) et placer le au dessus de tout les roles et faites la meme chose pour le role du bot mais il devra etre au dessus du role *rainbow*].```", false)
                      .addField(":black_small_square: _createinvite","```Cree une invitation du serveur directement.```",true)
                      .addField(":black_small_square: _stats","```Voir les statistiques du bot totaux.```", true)
                      .addField(":black_small_square: _roleadd/remove + nom du role","```Attribue/Retire le role a tout les utilisateurs du serveur.```", true)
                      .addField(":black_small_square: _serverinfo","```Affiche les information du serveur.```", false)
                      .addField(":black_small_square: _sondage + phrase","```Permet de faire un sondage rapide.```", true)
                      .addField(":black_small_square: _ping","```Calcule le ping entre l'envoi d'un message et sa provenance.```", true)
                      .addField(":black_small_square: _quit","```Kanna army quitte le serveur avec un message d'adieu.```", false)
                      .addField(":black_small_square: _report","```Envoi d'un report qui sera d'abord traiter par le concepteur du bot,\net transmis vers un moderateur discord de facon construite et convaincant.\n(usage : _report [@user/ID] ou [@serveur/ID] motif/preuves + ID/screens).```", true)
                      .setColor("#320242")
                      .setFooter("Developper par Kanna Kamui & Emile || CORPORATION 2018")
                      msg.channel.sendEmbed(help_embed).catch(console.error);
       
}
              if (msg.content === '_div'){
 
                msg.delete();
                        let sicon = bot.user.displayAvatarURL;
                          var help_embed = new Discord.RichEmbed()
   
                         
                          .setTitle("Kanna army - Divertisement")
                          .setThumbnail(sicon)
                              .addField(":page_facing_up: Info ","**De nouvelles commandes fun arrivent !**", true)
                              .addField(":black_small_square: _bvn","```Souhaiter la bienvenue !```", false)
                              .addField(":black_small_square: _blague","```Propose une blague aleatoires.```",false)
                              .addField(":black_small_square: _pp + @user","```Affiche la photo de profil du membre.```", false)
               .addField(":black_small_square: _pub","```Envoi une pub copiable sur Kanna army en message prive ^^```",false)
                              .addField(":black_small_square: _wiki + recherche","```Fait une recherche sur wikipedia.```", false)
                              .addField(":black_small_square: _invite","```Envoi un lien d'invitation du bot via un message prive.```", true)
                              .addField(":black_small_square: _ping","```Calcule le ping entre l'envoi d'un message et sa provenance.```", true)
                              .addField(":black_small_square: _whatis front-end/back-end/full-stack","```Savoir les definitions du codage.```", true)
                              .addField(":black_small_square: _doc","```Une documentation qui permet d'obtenir des info dans les languages de programmation.```", true)
                              .setColor("#320242")
                              .setFooter("Developper par Kanna Kamui & Emile || CORPORATION 2018")
                              msg.channel.sendEmbed(help_embed).catch(console.error);
 
               
                      }

 
        if (msg.content === '_game'){
msg.delete();
let sicon = bot.user.displayAvatarURL;
          var help_embed = new Discord.RichEmbed()
                                   
          .setTitle("Kanna army - Amusement")
          .setThumbnail(sicon)
              .addField(":page_facing_up: Info ","**Prochainement**\n:crossed_swords: 2V2", true)
              .setTitle("Voici la liste des jeux disponibles :")
              .addField(":black_small_square: _pierre/feuille/ciseaux ","```Jouer a pierre feuille ciseaux avec Kanna army !```", false)
              .addField(":black_small_square: _vrai/faux + phrase","```Kanna army vous repondra par vrai ou faux.```", true)
              .addField(":black_small_square: _flip ","```Jouer a Pile ou Face !```", false)
        .addField(":black_small_square: _say + pharse","```Kanna army prononce vos phrases.```", true)
        .addField(":black_small_square: _8ball + question","```Repond a toutes vos question.```", false)
                .setColor("#320242")
                .setFooter("Developper par Kanna Kamui & Emile || CORPORATION 2018")
              msg.channel.sendEmbed(help_embed).catch(console.error);
 
      }
 
});          
bot.on('message', msg => {

     
  if (msg.content.startsWith('_vcs')) {
      let msgArray = msg.content.split(" ");
   let args = msgArray.slice(1);
   
 const Discord = require('discord.js')
 var xo02 = msg.guild.channels.find('name','vcs');
 if(msg.channel.name !== 'vcs') {
 return msg.author.send("Cette commande ne peut-etre executer que dans le salon #vcs !").catch(console.error)
 }

if(msg.author.id === "287704598980984832" && "389409933440974858") {
   let xoargs = msg.content.split(" ");
 xoargs.splice(0, 1);
 xoargs = xoargs.join(' ')
   const modo_vcs = new Discord.RichEmbed()
   .setColor("#320242")
   .setTitle("Moderateur VCS")
   .setAuthor("VCS-Kanna army", msg.guild.iconURL)
   .addField("Message ", xoargs)
   .addField("L'auteur du message ",msg.author.tag)  
.addField("Serveur du message ", msg.guild.name, true)
    .setThumbnail(msg.author.avatarURL)
   .setTimestamp()
   msg.delete()
   return bot.channels.findAll('name', 'vcs').map(channel => channel.send(modo_vcs));
 }
if(msg.author.id === "238677711193636866") {
   let xoargs = msg.content.split(" ");
 xoargs.splice(0, 1);
 xoargs = xoargs.join(' ')
   const dev_vcs = new Discord.RichEmbed()
   .setColor("#320242")
   .setTitle("Friend VCS")
   .setAuthor("VCS-Kanna army", msg.guild.iconURL)
   .addField("Message ", xoargs)
   .addField("L'auteur du message ",msg.author.tag)  
.addField("Serveur du message ", msg.guild.name, true)
    .setThumbnail(msg.author.avatarURL)
   .setTimestamp()
   msg.delete()
   return bot.channels.findAll('name', 'vcs').map(channel => channel.send(dev_vcs));
 }

 
 if(msg.author.id === "279697055507546113") {
   let xoargs = msg.content.split(" ");
 xoargs.splice(0, 1);
 xoargs = xoargs.join(' ')
   const dev_vcs = new Discord.RichEmbed()
   .setColor("#320242")
   .setTitle("Developpeur VCS")
   .setAuthor("VCS-Kanna army", msg.guild.iconURL)
   .addField("Message ", xoargs)
   .addField("L'auteur du message ",msg.author.tag)  
.addField("Serveur du message ", msg.guild.name, true)
    .setThumbnail(msg.author.avatarURL)
   .setTimestamp()
   msg.delete()
   return bot.channels.findAll('name', 'vcs').map(channel => channel.send(dev_vcs));
 }
 if(msg.author.id === "478640425976987650") {
   let xoargs = msg.content.split(" ");
 xoargs.splice(0, 1);
 xoargs = xoargs.join(' ')
   const chefsupport = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setTitle("Responsable des Support VCS")
   .setAuthor("VCS-Kanna army", msg.guild.iconURL)
 .addField(` Envoyer depuis : `, msg.guild.name )
   .addField("Message ", xoargs)
    .setFooter(msg.author.tag + " | sur le serveur : " + msg.guild.name + " id du serveur : (" + msg.guild.id + ").")
   .setThumbnail(msg.author.avatarURL)
   .setTimestamp()
   msg.delete()
   return bot.channels.findAll('name', 'vcs').map(channel => channel.send(chefsupport));
 }
  if(msg.author.id === "483668412698984448" && "") {
 var vcsbanned_embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setTitle("Tu a ete banni du VCS !")
   .addField("*BANNI !!*", " :x: Vous avez ete banni du VCS ! \nVeuillez contacter un administrateur ou un membre du support.")
   .setFooter(msg.author.username)
 return msg.author.send(vcsbanned_embed).catch(console.error)  
 }
 
 var https = msg.content.split("www.","http").slice(1)[0];
   msg.delete();
 if(https) return msg.channel.send(` ** Les liens sont interdits !\nVeuillez ne pas recommencer sous peine de bannisement du vcs.** `)
 console.log("Publication d'un lien dans le VCS !!")
 let xoargs = msg.content.split(" ");
 xoargs.splice(0, 1);
 xoargs = xoargs.join(' ')
 const vcs_embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setAuthor("VCS-Kanna army", msg.guild.iconURL)
   .addField("Message ", xoargs)
   .addField("L'auteur du message ",msg.author.tag)  
.addField("Serveur du message ", msg.guild.name, true)
    .setThumbnail(msg.author.avatarURL)
   .setTimestamp()
 msg.delete()
 bot.channels.findAll('name', 'vcs').map(channel => channel.send(vcs_embed));
 console.log("VCS : msg de " + msg.author.tag + " (" + msg.author.id + ") depuis le serveur " + msg.guild.name + " (" + msg.guild.id + ") : " + xoargs)
 }
 
 
 
 
});
 
bot.on('message', function(message) {

 
    Blague.parse(message)
 
  Wiki.parse(message)
 
  Whatis.parse(message)
 
  Youtube.parse(message)
 
  Google.parse(message)
 
    Docs.parse(message)
 
  if(message.content.startsWith('_vrai')) {
 
        let randnum_game = Math.floor(Math.random() * 2)
 
        if (randnum_game == 0) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("**Vrai** :wink:")
            .setFooter('Jeu du vrai ou faux')
            message.channel.send(embed).catch(console.error)
 
        } else if(randnum_game == 1) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("**Faux** :wink:")
            .setFooter('Jeu du vrai ou faux')
            message.channel.send(embed).catch(console.error)
    }
   
    }
 
  if(message.content.startsWith('_faux')) {
 
        let randnum_game = Math.floor(Math.random() * 2)
 
        if (randnum_game == 0) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("**Vrai** :wink:")
            .setFooter('Jeu du vrai ou faux')
            message.channel.send(embed).catch(console.error)
 
        } else if(randnum_game == 1) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription("**Faux** :wink:")
            .setFooter('Jeu du vrai ou faux')
            message.channel.send(embed).catch(console.error)
    }
   
    }
    if(message.content.startsWith('_8ball')) {
      let randnum_game = Math.floor(Math.random() * 6)
 
      if (randnum_game == 0) {
 
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Totalement d'accord.")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
 
      } else if(randnum_game == 1) {
 
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Je pense que non.")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }else if(randnum_game == 2) {
 
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Je pense que oui.")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }else if(randnum_game == 3) {
 
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Je suis en desaccord avec toi...")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }else if(randnum_game == 4) {
 
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("A toi d'en decider..")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }else if(randnum_game == 5) {
 
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Je ne trouve pas une reponse a ta question...")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }
     
      }
  if(message.content.startsWith('_pierre')) {
 
        let randnum_game = Math.floor(Math.random() * 3)
 
        if (randnum_game == 0) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":dagger: | Resultat: ciseaux")
            .setFooter('Victoire de '+message.author.username+'')
            message.channel.send(embed).catch(console.error)
 
        } else if(randnum_game == 1) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":crossed_swords: | Resultat: pierre")
            .setFooter('Egalite !')
            message.channel.send(embed).catch(console.error)
 
    }    else if(randnum_game == 2) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":skull_crossbones: | Resultat: feuille")
            .setFooter("Victoire du bot !  ")
            message.channel.send(embed).catch(console.error)
    }
   
    }
  if(message.content.startsWith('_feuille')) {
 
        let randnum_game = Math.floor(Math.random() * 3)
 
        if (randnum_game == 0) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":dagger: | Resultat: pierre")
            .setFooter('Victoire de '+message.author.username+' ')
            message.channel.send(embed).catch(console.error)
 
        } else if(randnum_game == 1) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":crossed_swords: | Resultat: feuille")
            .setFooter('Egalite !')
            message.channel.send(embed).catch(console.error)
 
    }    else if(randnum_game == 2) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":skull_crossbones: | Resultat: ciseaux")
            .setFooter("Victoire du bot ! ")
            message.channel.send(embed).catch(console.error)
    }
   
    }
      if(message.content.startsWith('_ciseaux')) {
 
        let randnum_game = Math.floor(Math.random() * 3)
 
        if (randnum_game == 0) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":dagger: | Resultat: feuille")
            .setFooter('Victoire de '+message.author.username+'!')
            message.channel.send(embed).catch(console.error)
 
        } else if(randnum_game == 1) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":crossed_swords: | Resultat: ciseaux")
            .setFooter('Egalite !')
            message.channel.send(embed).catch(console.error)
 
    }    else if(randnum_game == 2) {
 
            var embed = new Discord.RichEmbed()
            .setColor("#320242")
            .setDescription(":skull_crossbones: | Resultat: pierre")
            .setFooter("Victoire du bot !  ")
            message.channel.send(embed).catch(console.error)
    }
   
    }
      if(message.content.startsWith('_flip')) {
 
        let randnum_game = Math.floor(Math.random() * 2)
 
        if (randnum_game == 0) {
 
message.channel.send(":triangular_flag_on_post: | C'est pile !")
 
        } else if(randnum_game == 1) {
 
message.channel.send(":triangular_flag_on_post: | C'est face !")
   
    }
      }

      if(message.content.startsWith('_gif')) {
        var kanna = [
          "https://media.giphy.com/media/vwFJbT5uIBNja/giphy.gif",
          "https://media.giphy.com/media/Q2DabV4eRh160/giphy.gif",
          "https://media.giphy.com/media/SFMEPM1LHxdYY/giphy.gif",
          "https://media.giphy.com/media/cgEP4Iee5gvks/giphy.gif",
          "https://media.giphy.com/media/WcEvIajIk332g/giphy.gif",
          "https://media.giphy.com/media/yi8q3R3Nuuif6/giphy.gif",
          "https://media.giphy.com/media/xgTs8CcCMbqb6/giphy.gif",
          "https://cdn.discordapp.com/attachments/476875514351452193/477410404004397067/2b75ec010390c2b7452fe2ff686d542265e81bd1_hq.gif"
        ];

        var gif = kanna[Math.floor(Math.random() * kanna.length)];
        

        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Kanna GIF')
        .setImage(gif)
        .setFooter("Kanna is cute <3")
        message.channel.send(embed);
      }
      
      

});
 
 
bot.on("guildCreate", guild => {
  var invite = guild.channels.find("id", guild.channels.random().id);
  invite.createInvite().then(invite => {
      let sicon = guild.iconURL;
      var date = guild.createdAt;
      let serverembed = new Discord.RichEmbed()
        .setTitle("Un nouveau serveur vient d'ajoute Kanna army !")
      .setColor("#320242")
      .setThumbnail(sicon)
      .addField("`Nom du serveur `", guild.name, false)
      .addField("`ID du Serveur `", guild.id, false)
      .addField("`Createur du Serveur `", guild.owner, false)
      .addField("`Serveur cre le `", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" a "+date.getHours()+":"+date.getMinutes(), true)
      .addField("`Utilisateurs `", guild.memberCount, false)
      .addField("`Region `", guild.region, false)
      .setFooter(`https://discord.gg/${invite.code}`)
.setColor('#320242');
 
bot.channels.find('id',"499540397375225867").send(serverembed);
 
 
})
});

bot.on("guildMemberAdd", member => {
var join = member.guild.channels.find("name", "bienvenue");
var embed = new Discord.RichEmbed()
.setTitle("Nouvel Utilisateur!")
.setColor("#320242")
.addField(`Bienvenue a ${member.user.username}`)
  join.send(embed);


});


  bot.on('message', message => {

 
   
    if (message.content.startsWith(prefix)) {
        if(message.author.bot) return;
        try {
            var splited_message = message.content.slice(prefix.length).split(" ");
            var command = splited_message[0];
            var parameters = splited_message.slice(1)
        } catch (error) {
            return
        };
       
       
        try {
           

            if (["advert"].includes(command)) {
    if(!message.member.hasPermission("MANAGE_MESSAGES") )
      return message.reply("Desole mais vous n'avez pas les droits necessaires pour utiliser cette commande.");
      const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
      const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{});
  var toRepeat = parameters.join(" ");
  var advert_embed = new Discord.RichEmbed()
            .setColor('#320242')
         .setAuthor(message.author.username, message.author.avatarURL)
            .setDescription(`@everyone\n\n___***${toRepeat}***___`)
            .setThumbnail("https://cdn.discordapp.com/attachments/427148659675758601/442669553735041024/Blason_frp_original.png")
            .setTimestamp()
            message.channel.sendEmbed(advert_embed);
 
  }
           
  
            else if (["say"].includes(command)) {
        message.delete();
                var toRepeat = parameters.join(" ");
                if (toRepeat === "") {
                    return message.channel.send("? **Utilisation:** "+prefix+"say <message>")
                };
                toRepeat = toRepeat .replace("@everyone", "@??everyone")
                  .replace("@here", "@??here");
 
                  var embed = new Discord.RichEmbed()
 
                  .setAuthor(bot.user.username, bot.user.avatarURL)    
                  .setDescription(toRepeat)
                  .setColor("#320242");
     
              message.channel.send(embed).catch(console.error);
            }           else if (["report"].includes(command)) {
message.delete();
               if (!guild.name === "NoFalls_") 
                   return message.channel.sendMessage("EZ")
              var toRepeat = parameters.join(" ");
              if (toRepeat === "") {
                return message.channel.send("Veuillez completer votre report...")
              };
              toRepeat = toRepeat   .replace("@everyone", "@??everyone")
                        .replace("@here", "@??here");
                        let sicon = message.author.displayAvatarURL;                      
                        var embed = new Discord.RichEmbed()
     
                        .setTitle("Un report vient d'etre envoye  !")
                        .addField("L'auteur du message ",message.author.tag)  
                        .setThumbnail(sicon)
                        .addField("Serveur du message ", message.guild.name, true)
                        .setDescription(toRepeat)
                        .setTimestamp()    
                        .setColor("#320242")                              
                        .setFooter("Developper par Kanna Kamui & Emile || CORPORATION 2018");
   
 
                         
                        bot.channels.find('id',"498419215980822538").send({embed});                    
                    message.author.send("`Votre report a bien ete envoye est sera traite dans les plus bref delais.`").catch(console.error);
 
                  }
 
                else if (["pp"].includes(command)) {
            message.delete();
                        var member = message.author;
                if (parameters.length > 0) {
                    let member_got = message.guild.member(message.mentions.users.first() || message.guild.members.get(parameters[0]));
                    if (member_got != undefined) {
                        var member = member_got.user
                    }
                };
    message.channel.send({
      embed: {
        color: 2550255,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: "**Photo de profil**",
        url: member.avatarURL,
        image: {
          url: member.avatarURL
        },
 
        footer: {
          icon_url: message.author.avatarURL,
          text: "demande par "+message.author.username+""
        }
      }
    });
  }
           
            else if (["whois"].includes(command)) {
                message.delete();
                var member = message.author;
                if (parameters.length > 0) {
                    let member_got = message.guild.member(message.mentions.users.first() || message.guild.members.get(parameters[0]));
                    if (member_got != undefined) {
                        var member = member_got.user
                    }
                };
                var champ_additions = [];
                var champ_permissions = [];
        var date = member.createdAt;
        if(member.presence.status === "online"){
          var statut = "Connecte"
        }
         if(member.presence.status === "dnd"){
          var statut = "Ne pas deranger"
        }
        if(member.presence.status === "offline"){
          var statut = "Deconnecte"
        }
        else if(member.presence.status === "idle"){
          var statut = "Inactif"
    }
                var embed = new Discord.RichEmbed()
 
                    .setColor("#320242")
                    .setFooter("Demande par "+ message.author.username, message.author.avatarURL)
                    .setThumbnail(member.displayAvatarURL)
                    .setAuthor(member.username, member.avatarURL)              
          .addField("Pseudo ", member.username, true)
                    .addField("Creation du compte ", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" a "+date.getHours()+":"+date.getMinutes(), true)
          .addField("Identification ", member.id,true)
          .addField("Discriminateur ", member.discriminator,true)
          .addField("Statut ", statut, true);
 
       
                if (member.bot) {
                    champ_additions[champ_additions.length] = "Robot"
                } else if (member.id === "478640425976987650" || member.id === "478640425976987650") {
                    champ_additions[champ_additions.length] = " Chef du bot\n Permissions : Administrateur"
                };
               
                if (member.bot) {
                    champ_additions[champ_additions.length] = "439758410561486848"               } else if (member.id === "329321891707748355" || member.id === "279697055507546113") {
                    champ_additions[champ_additions.length] = ":bank: Role Developpeur  Createur\n  Permissions: Administrateur"
                };
               
                if (champ_additions.length > 0) {
                    embed.addField("Suplementaire :", champ_additions.join("\n"))
                };
                message.channel.send("", {embed}).catch(console.error);
            }
    else if (["hhelp"].includes(command)) {
message.delete();
        let sicon = bot.user.displayAvatarURL;
          var help_embed = new Discord.RichEmbed()
         
         
 
          .setThumbnail(sicon)
          .addField(":flag_cp: Un bot Discord de moderation 2500% francais :flag_cp:","**INFORMATION **", true)
          .addField(":gear: _mod","```Moderation```", false)
          .addField(":fleur_de_lis: _div","```Divertisement```", true)
          .addField(":video_game: _game","```Amusement```", false)
          .setColor("#320242")
          .setFooter("Developper par Kanna Kamui & Emile || CORPORATION 2018")
         message.channel.sendEmbed(help_embed).catch(console.error);
      }
        else if (["roleremove"].includes(command)) {
        message.delete();
        var roledebut = message.content.split(" ").slice(1).join(" ")
        let role_succes = new Discord.RichEmbed()
        .setColor('#FFCC99')
        .setAuthor(bot.user.username, bot.user.avatarURL)  
        .setDescription("Le role suivant : "+"`"+roledebut+"`"+" vient d'etre retire a tout les membres du serveur.")
        .setFooter("Demande par "+ message.author.username, message.author.avatarURL);
        let role = message.guild.roles.find("name", roledebut)
        let role_erreur = new Discord.RichEmbed()
        .setTitle("ERREUR 306")
        .setColor("#FFCC99")               
        .addField(":x:", "**Vous devez avoir des droits administrateurs pour effectuer cette commande.**")
        .setFooter("Demande par "+ message.author.username, message.author.avatarURL)
        .setThumbnail(bot.user.avatarURL)
        .setFooter("Demande par "+ message.author.username, message.author.avatarURL);
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(role_erreur).catch(e => {});
      if(message.guild.roles.exists("name", roledebut)) {
          message.channel.send(role_succes)
          message.guild.members.forEach(member => {
            member.removeRole(role);
 
          })
        } 
      }
        else if (["roleadd"].includes(command)) {
        var roledebut = message.content.split(" ").slice(1).join(" ")
        let role_succes = new Discord.RichEmbed()
        .setColor('#FFCC99')
        .setAuthor(bot.user.username, bot.user.avatarURL)  
        .addField(":white_check_mark:", "Le role suivant : "+"`"+roledebut+"`"+" vient d'etre ajoute a tout les membres du serveur.")
        .setFooter("Demande par "+ message.author.username, message.author.avatarURL);
        let role = message.guild.roles.find("name", roledebut)
        let role_erreur = new Discord.RichEmbed()
        .setTitle("ERREUR 306")
        .setAuthor(bot.user.username, bot.user.avatarURL)  
        .setColor("#FFCC99")
        .addField(":x:", "**:x: Vous devez avoir des droits administrateurs pour effectuer cette commande.**")
        .setThumbnail(bot.user.avatarURL)
        .setFooter("Demande par "+ message.author.username, message.author.avatarURL);
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(role_erreur).catch(e => {});
      if(message.guild.roles.exists("name", roledebut)) {
          message.channel.send(role_succes)
          message.guild.members.forEach(member => {
            member.addRoles(role);
 
          })
        }
      }
     
   
 
 
        else if (["ping"].includes(command)) {
        message.delete();
 
 
          var help_embed = new Discord.RichEmbed()
       
 
              .setAuthor(bot.user.username, bot.user.avatarURL)
              .addField("Pong !",`:stopwatch: ${Math.round(bot.ping)} ms`, true)
              .setColor("#320242")
                    .setFooter("Demande par "+ message.author.username, message.author.avatarURL)
             message.channel.sendEmbed(help_embed).catch(console.error);
      }
 
 
    else if (["bvn"].includes(command)) {
        message.delete();
        message.channel.send({
          embed: {
            color: 595959,
            author: {
              name: (message.author.username + ' vous souhaite la bienvenue ! '),
              icon_url: message.author.avatarURL,
             
            },
           
   
            footer: {
 
              text: "Astuce : Vous aussi souhaitez la bienvenue avec _bvn"
             
            }
              }
        });
       
    }
 
    else if (["invite"].includes(command)) {
 
    const sicon = bot.user.displayAvatarURL
          var help_embed = new Discord.RichEmbed()
 
    .setTitle(">>> Ajouter Kanna army <<<")
    .addField("Bot Invitation","[CLIQUER ICI](https://discordapp.com/oauth2/authorize?client_id=482996893543301141&scope=bot&permissions=8)")
    .setColor("#320242")
    .setImage('https://images-ext-2.discordapp.net/external/NYKapoNyFuvHyEN9pfZ_RpQc3o_sIHPwdbEa8bALjGE/https/media.giphy.com/media/vwFJbT5uIBNja/giphy.gif?width=400&height=225')
    .setThumbnail(sicon)
    .setURL('https://discordapp.com/oauth2/authorize?client_id=482996893543301141&scope=bot&permissions=8')
    .setFooter("Developper par Kanna Kamui & Emile || CORPORATION 2018");
 
  message.author.sendEmbed(help_embed).catch(console.error)
  message.channel.send(":black_nib: Un message contenant l'invitation du bot vient d'etre envoye dans votre message prive !")
  message.delete(":black_nib: Un message contenant l'invitation du bot vient d'etre envoye dans votre message prive !")
 
}
            else if (["anti-spam"].includes(command)) {
        message.delete();
 
 
          var help_embed = new Discord.RichEmbed()
          .setTitle("????????-????????")
          .setAuthor(bot.user.username, bot.user.avatarURL)    
          .setColor("#320242")
          .setImage('https://i.gyazo.com/7a8926b4453d0125d1207aa117b59722.png')
                    .setFooter("Demande par "+ message.author.username, message.author.avatarURL)
          message.channel.send(help_embed)
           
          }  
          else if (["update"].includes(command)) {    
          let sicon = bot.user.displayAvatarURL;
            var help_embed = new Discord.RichEmbed()
            .setTitle("Voici les derniere mise a jour du bot :")
          .setThumbnail(sicon)
              .addField("Mise a jour - Jeux","```Nouveau jeux en developpement```", true)
              .addField("Mise a jour - GIF","```Profitez desormais des kanna gif en tapant la command _gif```", true)
              .addField("Mise a jour - Host","```Le bot est desormais sur un hebergeur !```", false)
          .setColor("#320242")
                    .setFooter("Demande par "+ message.author.username, message.author.avatarURL)
             message.channel.sendEmbed(help_embed).catch(console.error);
      }
      if (message.content.startsWith(prefix + "sondage")){
        if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
      return message.channel.send("?  Vous n'avez pas la permission d'utiliser cette commande.")
        let args = message.content.split(" ").splice(1);
        let thingToEcho = args.join(" ")
        var embed = new Discord.RichEmbed()
        .setDescription(thingToEcho)
        .setTitle("__**Sondage**__")
        .setColor("#320242")
        .setTimestamp()
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.sendEmbed(embed)
        .then(function (message) {
            message.react("?")
            message.react("?")
        }).catch(e => {});
     
    }
 
 
      else if (["serverinfo"].includes(command)) {
        message.delete();  
 
        let sicon = message.guild.iconURL;
        var date = message.guild.createdAt;
        let serverembed = new Discord.RichEmbed()
                   
        .setTitle("?????????????????????? ???? ??????????????")
        .setColor("#320242")
        .setThumbnail(sicon)
        .addField("`Nom du serveur `", message.guild.name, true)
        .addField("`ID du Serveur `", message.guild.id, true)
        .addField("`Createur du Serveur `", message.guild.owner, true)
        .addField("`Serveur creer le `", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" a "+date.getHours()+":"+date.getMinutes(), true)
        .addField("`Utilisateurs `", message.guild.memberCount, true)
        .addField("`Region `", "Europe de l'ouest", true)
        .addField("`Nombre de channel `", message.guild.channels.size, true)
        .addField("`Nombre d'emoji `", message.guild.emojis.size, true)
        .addField("`Liste des emojis `", message.guild.emojis.map(e=>e.toString()).join(" "), true)
        .addField("`Level de verification `", message.guild.verificationLevel, true)
                    .setFooter("Demande par "+ message.author.username, message.author.avatarURL)
       
        message.channel.send(serverembed).catch(e => {});
      }
                else if (["reload"].includes(command)) {
              message.delete();
                 if (!message.author.id === "478640425976987650" && "279697055507546113")
      return message.channel.sendMessage(" Vous n'avez pas la permission d'utiliser cette commande.")
        message.channel.sendMessage(":arrows_counterclockwise:  Redemarrage en cours...");
        loadCmds()
      }
      else if (["createinvite"].includes(command)) {
        message.delete();
        message.channel.createInvite().then(invite => {
        let serverembed = new Discord.RichEmbed()
 
        .setAuthor(bot.user.username, bot.user.avatarURL)  
        .setDescription(`** Voici ton invite : https://discord.gg/${invite.code} **`, true)
        .setColor("#320242")
    .setFooter("Demande par "+ message.author.username, message.author.avatarURL)
    message.channel.sendEmbed(serverembed).catch(console.error);
        })
      }

 
 
 
        else if (["quit"].includes(command)) {
              message.delete();
        if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
      return message.channel.send("?  Vous n'avez pas la permission d'utiliser cette commande.")
   
      message.channel.send("`Cetait un plaisir de rester dans votre serveur `")
       
      message.guild.leave().catch(console.error);
   
    }
                 
   else if (["rainbow"].includes(command)) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("❌ ** Tu n'as pas la permission `ADMINISTRATEUR` ** ❌");
     
if (!message.guild.roles.find("name", "rainbow")) return message.reply("❌ **  Le role `rainbow` n'existe pas ** ❌")
message.reply('🌈 La commande est maintenant activé, il te reste juste à attribué le role ! 🌈')
let args = message.content.split(' ')
args.shift()
message.delete()

var myRainbow = message.guild.roles.find("name", "rainbow")
let i = 0;
let interval = setInterval(function () {
myRainbow.setColor("RANDOM").catch(e => {});

}, 4500)
}

    else {
            console.log("[LOG] ["+message.author.tag+" = "+message.author.id+"] ["+message.guild.name+"] La commande "+command+" a ete executee.")
   
      }
 
        }  
 
        catch (error) {
          console.log("[ERREUR] ["+message.author.tag+" = "+message.author.id+"] "+message.content)
 
          console.log(error)
        }
      }
   
   
});

bot.login(process.env.TOKEN)
