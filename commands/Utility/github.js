const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    
        name: 'github',
        cooldown: 5000,
        description: 'Shows information about github user',
        aliases: ["github", "git", "gith"],
  
    run: async (client, message, args) => {
    
        const name = args.join(' ');
		if (!name) {
			return message.channel.send(
			`${client.emotes.error}  Please provide a valid user`,
			);
		}

		const url = `https://api.github.com/users/${name}`;

		let response;
		try {
			response = await fetch(url).then(res => res.json());
		}
		catch (e) {
			return message.channel.send(
				`${client.emotes.error} An error occured, please try again!`,
			);
		}

		try{
			const embed = new MessageEmbed()
				.setColor("RANDOM")
				.setTitle(`${response.login} (${response.id})`)
				.setDescription(response.bio ? response.bio : 'None')
				.addFields(
					{ name: '》 Followers', value: `\`\`\`${response.followers.toLocaleString()}\`\`\``, inline: true },
					{ name: '》 Following', value: `\`\`\`${response.following.toLocaleString()}\`\`\``, inline: true },
					{ name: '》 Repositories', value: `\`\`\`${response.public_repos.toLocaleString()}\`\`\``, inline: true },
					{ name: '》 Email', value: `\`\`\`${response.email ? response.email : 'None'}\`\`\`` },
					{ name: '》 Company', value: `\`\`\`${response.company ? response.company : 'None'}\`\`\`` },
					{ name: '》 Location', value: `\`\`\`${response.location ? response.location : 'None'}\`\`\`` },
				)
				.setURL(response.html_url)
				.setThumbnail(response.avatar_url)
				.setFooter(`Super Store`, client.user.displayAvatarURL())
        .setTimestamp();

			message.channel.send(embed);
		}
		catch (err) {
			return message.channel.send(
				` Please provide a valid user`,
			);
		}
    }
}