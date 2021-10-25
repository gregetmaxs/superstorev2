const Discord = module.require("discord.js");
const client = new Discord.Client();

module.exports = {
  name: "ping",
  aliases: [],
  run: async(client, message, args, data, db) => {
    await message.delete()
        await message.channel.send({embed: {
            color: 3447003,
            description: "🏓 Pinging..."
        }}).then(msg=>{
        const ping = new Discord.MessageEmbed()
        .setTitle(':ping_pong: Pong!')
		.addField("Bot ping:", + `${Math.floor(msg.createdTimestamp - message.createdTimestamp)}` + "ms")
		.addField("Api ping:", + `${Math.round(client.ws.ping)}` + "ms")
        .setColor('RANDOM')
		.setTimestamp()
        msg.edit(ping);
        msg.delete({timeout:5000});
    })
}
}


module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping",
    type: "General"
}