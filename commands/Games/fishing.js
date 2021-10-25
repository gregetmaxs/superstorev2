const { Client, Message, MessageEmbed, Invite } = require('discord.js');
const fetch = require('node-fetch')

module.exports = {
    name: 'fishing',
    aliases: ['fishing.io' ,'fishington'],
    categories : 'games',
    description: 'Play Fishing Game in Discord Voice Channel',
    usage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        const channel = message.member.voice.channel

        if (!channel) return message.channel.send(
            new MessageEmbed()
                .setDescription("❌ | **You must be in a voice channel to play something!**")
                .setColor("#ff0000")
        )

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "814288819477020702",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code) return message.channel.send(
                new MessageEmbed()
                    .setDescription("❌ | You must be in a voice channel to use this command.")
                    .setColor("#ff0000")
            )
            message.channel.send(
          new MessageEmbed()
            .setAuthor("Fishing Game", "https://cdn.discordapp.com/emojis/886868181321388042.png?v=1")
            .setColor("#FF0000")
            .setDescription(`
Using **Fishing Game** you can play chess with your friends in a Voice Channel. Click __**Join Fishing Game**__ to join in!

__**[Join Fishing Game](https://discord.com/invite/${invite.code})**__

⚠ **Note:** This only works in Desktop`))
        })
    }
}