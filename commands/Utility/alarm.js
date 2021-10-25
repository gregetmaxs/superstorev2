const { Client, Message, MessageEmbed } = require('discord.js');
require('discord-reply')
const ms = require("ms")
module.exports = {
    name: 'alarm',
  aliases: ["ala", "alar","Alarm"],
    run: async(client, message, args) => {
        let time = args[0]
        if(!time) {
          var embed = new MessageEmbed()
   
        .setDescription(":negative_squared_cross_mark: **Wrong Usage** :negative_squared_cross_mark: \n What is the time when the alarm should be off? ")
        .setColor("RANDOM")
        return message.channel.send(embed);
        }
        if(ms(time) > ms("1w")){

         var embed = new MessageEmbed()
           
         .setDescription(`:negative_squared_cross_mark: **Wrong Usage** :negative_squared_cross_mark: \n ${message.author.tag} You cannot set your alarm for more than 1w`)
          .setColor("RANDOM")
         return message.channel.send(embed);
        }
        let alert = args.slice(1).join(" ")
        if(!alert) {
          var embed = new MessageEmbed()
            
         .setDescription(`:negative_squared_cross_mark: **Wrong Usage** :negative_squared_cross_mark:\n What is alarm for?`)
          .setColor("RANDOM")
         return message.channel.send(embed);
          
        }
       var embed = new MessageEmbed()
         .setDescription(`:white_check_mark: **Successfull** :white_check_mark: `)   
        .setColor("RANDOM")
        .addField(`Time:`, `\`${time}\``, true)
        .addField(`For:`, `\`${alert}\``, true)
        message.lineReply(embed)
        setTimeout(() => {
            let DP = new MessageEmbed()
            .setAuthor(`Your Alarm is Done`)
            .setColor("RANDOM")
            .addField("Duration", `\`${time}\``, true)
            .addField(`Reason:`, `\`${alert}\``, true)
            message.author.send(DP)
        }, ms(time))
    }
}