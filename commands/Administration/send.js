  const Discord = require("discord.js");
const db = require("quick.db")
module.exports = {
  name: "send",
  aliases: ["send", "sen"],
  run: async(client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
    {
      return;
    }
    
    if (args[1] <= 0)
        return message.reply(`${emoji.Error} Oh come on man say something so I can I provide it in embed format !!`)
        .then(message => {
            message.delete({ timeout: 10000 })
        });
        message.delete();
         const taggedChannel = await message.mentions.channels.first();
         var prefix2 = db.fetch(`guildprefix_${message.guild.id}`);
         if(!prefix2)
         {
           var prefix2 = ".";
         }
let colour1 = db.fetch(`embed_${message.guild.id}`);
        if(taggedChannel) {
           const embed1 = new Discord.MessageEmbed()
           .setDescription(args.join(" ").replace(taggedChannel, ""))
            .setColor("RANDOM")
            await taggedChannel.send(embed1);
            message.delete({ timeout: 10000 })

        }
        if(!taggedChannel)
        {
        var prefix1 = db.fetch(`guildprefix_${message.guild.id}`);
      let colour = db.fetch(`embed_${message.guild.id}`);
        const embed = new Discord.MessageEmbed()
        .setDescription(args.join(" "))
        .setColor(`${colour}`)
        message.channel.send(embed)
       
 
        }
    }
}
    module.exports.help = {
    name: "announcement",
    description: "It sends embed to the channel you typed command and the embed text will be whatever you want!",
    usage: "announcement <text>",
    type: "Moderation"
}