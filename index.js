const TelegramBot = require('node-telegram-bot-api')
const env = require('dotenv')
// const express = require('express')


env.config()

const TOKEN = process.env.BOT_TOKEN
const bot = new TelegramBot(TOKEN, {
    polling : true
})


// THE START FUNCTION
bot.onText(/\/start/, (msg) => {
    let chatId = msg.chat.id

    const options = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Get Started', callback_data: 'getStarted' }, { text: 'Subscriptions', callback_data: 'subscriptions' }],
                [{ text: 'Visit Website', url: 'https://www.tlausdtfiles.pro' }],
                [{ text: 'Help', callback_data: 'help' }, { text: 'About', callback_data: 'about' }],
            ]
        })
    }

    bot.sendMessage(chatId, 'Welcome to TLAUST Bot', options)
})

// THE HELP FUNCTION
bot.on