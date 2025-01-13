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
                [{ text: 'About', callback_data: 'about' }, { text: 'Subscriptions', callback_data: 'subscriptions' }],
                [{ text: 'Visit Website', url: 'https://www.tlausdtfiles.pro' }],
                [{ text: 'Help', callback_data: 'help' }, { text: 'FAQs', callback_data: 'askedQuestions' }],
            ]
        })
    }

    bot.sendMessage(chatId, 'Welcome to TLAUST Bot', options)
})

// THE HELP FUNCTION
bot.on('callback_query', (query) => {
    let chatId = query.message.chat.id
    let data = query.data

    if(data === 'help') {


        const helpMessage = `
        HELP:
        \nStep 1 \nCheck the licenses in the subscription page;
        \nStep 2 \nSelect the license that suit you;
        \nStep 3 \nPurchase the license selected;
        \nStep 4 \nLogin and generate the product key \nCheck your mail for the key;
        \nStep 5 \nSet transaction and broadcast the it. \nEnjoy your USDT
        `
        const trialVersion = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'Check Trial Version', callback_data: 'trialVersion' }]
                ]
            })
        }
        bot.sendMessage(chatId, helpMessage, trialVersion)


    }else if(data === 'about') {
        const aboutMessage = `
        ABOUT:
        \nWelcome to TLAUSDT, your premier destination for USDT flashing.
        \nWe are here to help you get started with USDT flashing.
        \nWe offer a variety of license plans to help you get started.
        `
        bot.sendMessage(chatId, aboutMessage)


    }else if(data === 'subscriptions') {
        bot.sendMessage(chatId, 'This is the subscription section')
    }else if(data === 'trialVersion') {

        const trialVersionMessage = `
        TRIAL VERSION:
        \nThis is the trial version of the software.
        \nThis Demo allows you to experience the reliability and functionality of our software before committing to the full paid version.
        \nThis Demo comes with a one-time use license.
        \nThis Demo is limited to sending 3 USDT per day.
        `
            bot.sendMessage(chatId, trialVersionMessage)
    }
})