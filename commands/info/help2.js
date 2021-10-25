const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");

module.exports = {
  name: "help2",
   aliases: ["hlp2", "hel2", "help2","next"],
  run: async (client, message, args ) => {
      //--------------------S T A R T---------------------------------------
      await message.delete()

    //--------------------EMBEDS------------------------
    

    const embed = new Discord.MessageEmbed()
    .setTitle("**__Help Menu__**")
   .setDescription(` Gunakan .back untuk melihat menu sebelumnya Bot\n
    Bantu kami dengan memberikan\n
    > ☆ Lapor
    > ☆ Saran
    Note :
    Gunakan fitur diatas disini :point_right: ${client.channels.cache.get("901804156287852585")}`);

    const embed1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle('**__FUN__**')
    .setDescription(`
  > ☆ advice 
  > ☆ fact
  > ☆ flipcoin
  > ☆ hack
  > ☆ iq
  > ☆ joke 
  > ☆ meme 
  > ☆ pokemon
  > ☆ topic 
  > ☆ why
  `)
  .setFooter(`Gunakan .back untuk kehalaman awal dan .next untuk halaman berikutnya`, client.user.displayAvatarURL());

    const embed2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle('**__Utility__**')
    .setDescription(`
    > ☆ alarm
    > ☆ anime
    > ☆ ascii
    > ☆ calculator
    > ☆ covid
    > ☆ csgo
    > ☆ fliptext
    > ☆ github
    > ☆ reddit
    > ☆ roleid
    > ☆ shorturl
    > ☆ sourcebin
    > ☆ status
    > ☆ time
    > ☆ weather
    > ☆ wiki
    > ☆ youtube together | yty 
    Note : 
  **You must be in a voice channel to use the youtube together feature**
    `)
    .setFooter(`Gunakan .back untuk kehalaman awal dan .next untuk halaman berikutnya`, client.user.displayAvatarURL());

    const embed3 = new Discord.MessageEmbed()
    .setTitle('**__Moderation__**')
    .setColor("RANDOM")
    .setDescription(`
    > ☆ afk
    > ☆ ban
    > ☆ clear
    > ☆ hide
    > ☆ kick
    > ☆ lockdown
    > ☆ modlog
    > ☆ moveall
    > ☆ poll
    > ☆ say
    > ☆ send
    > ☆ setnick
    > ☆ snipe
    > ☆ steal-emoji | se
    > ☆ unbanall
    > ☆ unhide
    > ☆ unlock
    > ☆ voicedeafen
    > ☆ voicekick
    > ☆ warn
    > ☆ warnings`)
    .setFooter(`Gunakan .back untuk kehalaman awal dan .next untuk halaman berikutnya`, client.user.displayAvatarURL());

    const embed4 = new Discord.MessageEmbed()
    .setTitle('**__Games__**')
    .setColor("RANDOM")
    .setDescription(`
  > ☆ chess
  > ☆ fishing
  > ☆ poker
  > ☆ slots
  > ☆ tictactoe
  Note : 
  **You must be in a voice channel to play the games!**`)
  .setFooter(`Gunakan .back untuk kehalaman awal dan .next untuk halaman berikutnya`, client.user.displayAvatarURL());

    const embed5 = new Discord.MessageEmbed()
    .setTitle('**__INFO COMMANDS__**')
    .setColor("RANDOM")
    .setDescription(`
    > ☆ avatar 
    > ☆ badge
    > ☆ botinfo
    > ☆ help
    > ☆ invite
    > ☆ leaderboard 
    > ☆ ping
    > ☆ rank 
    > ☆ serveravatar
    > ☆ serverinfo
    > ☆ whois
    `)
    .setFooter(`Gunakan .back untuk kehalaman awal dan .next untuk halaman berikutnya`, client.user.displayAvatarURL());
    
    //--------------------EMBEDS------------------------

    //--------------------Buttons------------------------

   let button1 = new MessageButton()
    .setLabel(`FUN`)
    .setID(`fun`)
    .setEmoji(`889832675932782602`)
    .setStyle("gray");
    

     let button2 = new MessageButton()
    .setLabel(`Utility`)
    .setID(`utility`)
    .setEmoji(`901840990694932511`)
    .setStyle("gray");

     let button3 = new MessageButton()
    .setLabel(`Moderation`)
    .setID(`mod`)
    .setEmoji(`889828550864158720`)
    .setStyle("red");
    if(!message.member.roles.cache.has("ADMINISTRATOR")) button3.setDisabled(false);


     let button4 = new MessageButton()
    .setLabel(`Games`)
    .setID(`games`)
    .setEmoji(`901982065019482133`)
    .setStyle("gray");

     let button5 = new MessageButton()
    .setLabel(`INFO`)
    .setID(`info`)
    .setEmoji(`890150643870883840`)
    .setStyle("gray");

    

    let row = new MessageActionRow()
    .addComponents(button1, button2, button3, button4, button5,);

    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

       if(b.id == "fun") {

            MESSAGE.edit(embed1, row);
            await b.reply.defer()

        }

        if(b.id == "utility") {
            
            MESSAGE.edit(embed2, row);
            await b.reply.defer()

        }

        if(b.id == "mod") {
            
            MESSAGE.edit(embed3, row);
            await b.reply.defer()

        }

        if(b.id == "games") {
         
            MESSAGE.edit(embed4, row);
            await b.reply.defer()
        }

        if(b.id == "info") {
         
            MESSAGE.edit(embed5, row);
            await b.reply.defer()
        }
  
  
    })

    collector.on('end', (b) => {
        MESSAGE.edit(`This help menu is expired! Type the command again to view.`)
        .then(msg => msg.delete({timeout:2000}));
    })

       //---------------------------------------E N D----------------------------------------
       

    }
  };