const Discord = require('discord.js');
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
message.channel.send("Damn");
}

module.exports.config = {
  name: "help",
  description: "Help Command",
  usage: "!help",
  accessableby: "Members",
  aliases: []
}