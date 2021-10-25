const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "saran",
  aliases: ["saran","Sar", "sug", "sugg", "sugge", "sugges", "suggest"],
  run: async(client, message, args) => {
if(!args[0])
{
  message.channel.send("PLease Give me Something to report!!")
  return;
}
let args1 = args.join(' ');
await message.delete()
const channel = client.channels.cache.get("901746670428110908")
const embed = new MessageEmbed()
.setColor("RANDOM")
.setTitle("**__Saran Masuk__**")
.setDescription(`Pengirim : <@!${message.member.id}>\nServer Name : ${message.guild.name}\n Channel : ${message.channel.name}\n Keterangan : ${args1}`)
channel.send(embed)
message.channel.send(`Pesan anda telah terkirim ke ${client.channels.cache.get("901746670428110908")} ,Terima Kasih sudah support kami dengan memberikan saran :kissing_heart: `)

then(msg => msg.delete({timeout:4000}));

  }
}
module.exports.help = {
    name: "saran",
    description: "To suggest any feature",
    usage: "saran",
    type: "reports"  
}