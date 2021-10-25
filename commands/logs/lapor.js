const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "lapor",
  aliases: ["lap", "lapo", "lapor", "lapora", "laporan", "report","reports"],
  run: async(client, message, args) => {
if(!args[0])
{
  message.channel.send("Please Give me Something to report!!")
  return;
}
let args1 = args.join(' ');
await message.delete()
const channel = client.channels.cache.get("901746652782673930")
const embed = new MessageEmbed()
.setColor("RANDOM")
.setTitle("**__Laporan Masuk__**")
.setDescription(`Pengirim : <@!${message.member.id}>\nServer Name : ${message.guild.name}\n Channel : ${message.channel.name}\n Keterangan : ${args1}`)
channel.send(embed)
message.channel.send(`Pesan anda telah terkirim ke ${client.channels.cache.get("901746652782673930")} ,Terima Kasih sudah support kami dengan memberikan laporan :kissing_heart:`)
      
      then(msg => msg.delete({timeout:4000}));

  }
}
module.exports.help = {
    name: "report",
    description: "To report ",
    usage: "report",
    type: "reports"  
}