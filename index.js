const Discord = require('discord.js')
const {parsed: env} = require('dotenv').load()
const client = new Discord.Client()
const prefix = env.PREFIX

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.login(env.TOKEN)
