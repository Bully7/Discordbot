const Discord = require('discord.js');
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
.setColor(0xFFFF00)
.setTimestamp()
.setTitle("How To Setup BetaReactions")
.setDescription("**Setting up BetaReactions!**\n```- This is a really esay bot to setup\n- BetaReactions need to have permissions to the channel where its gonna react\n- Then to get BetaReactions to react to the message you must do !s <Message> then BetaReactions will react with 👍 and 👎.\nExempel: In a channel a person type !s You should add another bot to the server!```\n The emojis BetaReactions react with is 👍 and 👎 to every message that has !s in it.\n\nIf you need any more help check out the website or join the discord and talk to an human.\n\nhttps://stackrc.com/betabot \n[BetaReactions Website](https://stackrc.com/betabot) \n\n\n**!members command**\nThis is a command that shows how many people its in your server!\nJust do ***!members*** Then BetaReactions will awnser with how many people thats in your discord server")
.setFooter("Made By StackRC.com")

message.channel.send(embed);
}

module.exports.config = {
  name: "help",
  description: "Help Command",
  usage: "!help",
  accessableby: "Members",
  aliases: []
}