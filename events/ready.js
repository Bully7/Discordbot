const Discord = require("discord.js")

module.exports = (client) => {
    let statuses = [
        `${client.guilds.cache.size} Servers`,
        `stackrc.com/betabot`,
        `doing bot stuff`

    ];
    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {
            type: "WATCHING"
        });
    }, 7000);
    }