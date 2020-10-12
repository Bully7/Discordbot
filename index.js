const Discord = require('discord.js');
const botsettings = require('./botsettings.json');

const bot = new Discord.Client({disableEveryone: true});

bot.on("guildMemberAdd", async member => {
    const embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle("New Member!")
    .setDescription(`${member} Just joined the server!`)
    .setFooter("Welcome To BetaReactions")
    .setTimestamp()

    const channel = member.guild.channels.cache.find(chan => chan.id === "765234408520941579")
    channel.send(embed)
})

bot.on("guildMemberAdd", async member => {
    const memberrole = member.guild.roles.cache.find(r => r.id === "765238783611895819")
    member.roles.add(memberrole)
})

require("./util/eventHandler")(bot)

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)


    if (cmd === `${prefix}announcement`){
        let annuncementChannel = message.mentions.channels.first();
        let announceDescription = args.slice(22);
    
        let embedannouement = new Discord.MessageEmbed()
        .setTitle('Announcement!')
        .setDescription(announceDescription)
        .setColor('RED')
        let msgEmbed = await annuncementChannel.send(embedannouement);
        await msgEmbed.react('✅')
        await msgEmbed.react('🤯')
    }
    



    if(cmd === `${prefix}say`){
        let saydescription = args.slice(0)
        message.channel.send(saydescription)
    }

    if(cmd === `${prefix}membercount`){
        message.channel.send(`${message.guild.memberCount} Members is in your server`)
    }



    if(cmd === `${prefix}senddm`){
        let user = message.mentions.members.first();
        let dmdec = args.slice(23)
        message.reply("The message have been sent.")
        user.send(dmdec)
    }



    if(cmd === `${prefix}edit`){
        message.channel.send("this message is not edited").then (m => m.edit("This message is edited"))
    }




    if(cmd === `${prefix}react`){
        let msg = await message.channel.send("Hello there i am going to react to this message")
        await msg.react ("😘")
        await msg.react ("764622345314369577")
    }


    if(cmd === `${prefix}embed`){
        const embed = new Discord.MessageEmbed()
        .setTitle("Reactions")
        .setDescription("I Reacted to this message embed")
        .setColor("GREEN")
        .setFooter("Stack")

        let msgEmbed = await message.channel.send(embed)
        await msgEmbed.react ("😘")
        await msgEmbed.react ("764622345314369577")
    }



})
bot.login(botsettings.token);