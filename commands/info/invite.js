const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "invite",
  aliases: ["info"],
  description: "Shows all commands of the bot",
  run: async (client, message, args) => {

await message.delete()
    let helpEmbed = new MessageEmbed()
      .setTitle("Thanks For Inviting")
      .setDescription(`Super Store Menyediakan Berbagai Produk Digital, Murah, Terpercaya dan Termurah \n 
      __Link Permanent__
     https://discord.gg/BXt7cuvhMu
              Or
     https://discord.link/superstore`)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("Gunakan Tombol dibawah ini atau Link diatas")
      .setColor("#FFFFF0")


      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Link Discord 1')
      .setEmoji('901815772798660669') 
      .setURL("https://discord.gg/BXt7cuvhMu")

      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel(' Website') 
      .setEmoji(`901816453144141905`)
      .setURL("https://short1.ga")

      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Link Discord 2') 
      .setEmoji(`901815772798660669`)
      .setURL("https://discord.link/superstore")
      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3,],
      });

  },
};
