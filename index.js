require('dotenv').config()

const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client()
client.user.setPresence({ game: { name: 'with depression', type: "streaming", url: "https://www.twitch.tv/fanontv"}});

fs.readdir('./events/', (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split('.')[0]
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })
})

client.login(process.env.BOT_TOKEN) 
