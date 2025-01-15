const TelegramBot = require('node-telegram-bot-api')
const env = require('dotenv')
// const express = require('express')
// const app = express()
// const PORT = process.env.PORT || 3000


env.config()

const TOKEN = process.env.BOT_TOKEN
const bot = new TelegramBot(TOKEN, {
    polling : true
})

    // const prohibitedWords = ['']


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

    bot.sendMessage(chatId, 'Welcome to TLA USDT and BTC Bot 💙', options)
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
                    [{ text: 'Check Trial Version', callback_data: 'trialVersion' }, { text: 'Text the admin', url: 'https://t.me/tlafiles' }]
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

        // PLAN ONE
        const planOne = `
        $144
        \n 15,000 TETHER, you get 15,000 USDT daily on the software
        \nValidity: 24 hours
        `
        const planOneButton = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'Proceed', callback_data: 'planOneProceed'}]
                ]
            })
        }

        // PLAN TWO
        const planTwo = `
        $222
        \n 5,000 TETHER, you get 5,000 USDT daily on the software
        \nValidity: 60 days
        `
        const planTwoButton = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'Proceed', callback_data: 'planTwoProceed'}]
                ]
            })
        }

        // PLAN THREE
        const planThree = `
        $322
        \n 10,000 TETHER, you get 10,000 USDT daily on the software
        \nValidity: 60 days
        `
        const planThreeButton = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'Proceed', callback_data: 'planThreeProceed'}]
                ]
            })
        }

        // PLAN FOUR
        const planFour = `
        $722
        \n 50,000 TETHER, you get 50,000 USDT daily on the software
        \nValidity: 60 days
        `
        const planFourButton = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'Proceed', callback_data: 'planFourProceed'}]
                ]
            })
        }

        bot.sendMessage(chatId, planOne, planOneButton)
        bot.sendMessage(chatId, planTwo, planTwoButton)
        bot.sendMessage(chatId, planThree, planThreeButton)
        bot.sendMessage(chatId, planFour, planFourButton)

    }else if(data === 'trialVersion') {

        const trialVersionMessage = `
        TRIAL VERSION:
        \nThis is the trial version of the software.
        \nThis Demo allows you to experience the reliability and functionality of our software before committing to the full paid version.
        \nThis Demo comes with a one-time use license.
        \nThis Demo is limited to sending 3 USDT per day.

        \nPlease navigate to the link below to download the trial version of the software.
        `

        const trialVersionOptions = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'Download File', url: 'https://www.tlausdtfiles.pro'}]
                ]
            })
        }
            bot.sendMessage(chatId, trialVersionMessage, trialVersionOptions)
    }else if(data === 'askedQuestions') {
        const askedQuestions = `
        FAQs:
        \nQ: What is USDT?
        \nA: USDT is a stablecoin that is pegged to the US dollar.
        \nQ: I Don't Have a Laptop?
        \nA: We can send you any amount you want. Just let us know the amount you want and we will send it to you. minimum of 5,000 usdt and maximum of 50,000 per day.
        \nQ: Does it Work on Windows or Mac?
        \nA: Yes, it works on both Windows and Mac. It can be used on any of the operating systems.
        \nQ: Is USDT flash transferrable?
        \nA: Yes 😊, you can transfer to any wallet using your preferred network. ERC20, BEP20 or TRC20..
        \nQ: Can it be used for P2P?
        \nA: Yes 😊, it is certainly the most recommended practice. You can also do bridges, swaps and transfer whatever you want.
        \nQ: Is there an expiration date for the flashed value?
        \nA: Yes 😊, each flash sent is valid for 190 days after the first transfer.
        \nQ: What are the benefit of using USDT flash?
        \nA: A USDT flasher allows a rapid transaction and an increased liquidity. It ensures high security and anonymity making it a valuable tool for quick and efficient cryptocurrency trading.
        `
        const askedQuestionsButton = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'Ask Other Questions❓', url: 'https://t.me/tlafiles' }]
                ]
            })
        }
        bot.sendMessage(chatId, askedQuestions, askedQuestionsButton)
    }else if(data === 'planOneProceed'){
        const proceedOne = `
        Please make a payment of $144 to
        \nTPLtfbPgpzEsm3h9LgiAM43wdZTjEypALk
        \nAfter payment, Please Confirm Below.
        `
        const proButton = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'Confirm Payment', url: 'https://t.me/tlafiles' }]
                ]
            })
        }

        bot.sendMessage(chatId, proceedOne, proButton)
    }else if(data === 'planTwoProceed'){
        const proceedTwo = `
        Please make a payment of $222 to
        \nTPLtfbPgpzEsm3h9LgiAM43wdZTjEypALk
        \nAfter payment, Please Confirm Below.
        `
        const proButton = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'Confirm Payment', url: 'https://t.me/tlafiles' }]
                ]
            })
        }

        bot.sendMessage(chatId, proceedTwo, proButton)
    }else if(data === 'planThreeProceed'){
        const proceedThree = `
        Please make a payment of $322 to
        \nTPLtfbPgpzEsm3h9LgiAM43wdZTjEypALk
        \nAfter payment, Please Confirm Below.
        `
        const proButton = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'Confirm Payment', url: 'https://t.me/tlafiles' }]
                ]
            })
        }

        bot.sendMessage(chatId, proceedThree, proButton)
    }else if(data === 'planFourProceed'){
        const proceedFour = `
        Please make a payment of $722 to
        \nTPLtfbPgpzEsm3h9LgiAM43wdZTjEypALk
        \nAfter payment, Please Confirm Below.
        `
        const proButton = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: 'Confirm Payment', url: 'https://t.me/tlafiles' }]
                ]
            })
        }

        bot.sendMessage(chatId, proceedFour, proButton)
    }
})

// FOR GROUP CHATS
// CAPTURE THE MESSAGE ON GROUP CHATS
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const chatType = msg.chat.type; 
    const botUsername = '@Fame7bot'; 

    // Check if the message contains text
    if (msg.text) {
        const messageText = msg.text;

        if (chatType === 'group' || chatType === 'supergroup') {
            // Check if the bot is mentioned
            if (messageText.includes(botUsername)) {
                if (messageText.toLowerCase().includes('hi') || messageText.toLowerCase().includes('hello')) {
                    bot.sendMessage(chatId, 'Hello, Welcome to TLA USDT and BTC Bot 💙');
                }else if(messageText.toLocaleLowerCase().includes('help')) {
                    const helpOptions = {
                        reply_markup: JSON.stringify({
                            inline_keyboard: [
                                [{ text: 'Help', callback_data: 'help' }],
                            ]
                        })
                    }
                    bot.sendMessage(chatId, 'How can I assist you? 😊 or checkout the available options', helpOptions);
                }else if(messageText.toLocaleLowerCase().includes('begin')) {
                    bot.sendMessage(chatId, 'I am sorry, I do not understand that command. Please type /start to get started');
                }else if(messageText.toLocaleLowerCase().includes('subscriptions')){
                        // PLAN ONE
                            const planOne = `
                            $144
                            \n 15,000 TETHER, you get 15,000 USDT daily on the software
                            \nValidity: 24 hours
                            `
                            const planOneButton = {
                                reply_markup: JSON.stringify({
                                    inline_keyboard: [
                                        [{ text: 'Proceed', callback_data: 'planOneProceed'}]
                                    ]
                                })
                            }

                            // PLAN TWO
                            const planTwo = `
                            $222
                            \n 5,000 TETHER, you get 5,000 USDT daily on the software
                            \nValidity: 60 days
                            `
                            const planTwoButton = {
                                reply_markup: JSON.stringify({
                                    inline_keyboard: [
                                        [{ text: 'Proceed', callback_data: 'planTwoProceed'}]
                                    ]
                                })
                            }

                            // PLAN THREE
                            const planThree = `
                            $322
                            \n 10,000 TETHER, you get 10,000 USDT daily on the software
                            \nValidity: 60 days
                            `
                            const planThreeButton = {
                                reply_markup: JSON.stringify({
                                    inline_keyboard: [
                                        [{ text: 'Proceed', callback_data: 'planThreeProceed'}]
                                    ]
                                })
                            }

                            // PLAN FOUR
                            const planFour = `
                            $722
                            \n 50,000 TETHER, you get 50,000 USDT daily on the software
                            \nValidity: 60 days
                            `
                            const planFourButton = {
                                reply_markup: JSON.stringify({
                                    inline_keyboard: [
                                        [{ text: 'Proceed', callback_data: 'planFourProceed'}]
                                    ]
                                })
                            }

                            bot.sendMessage(chatId, planOne, planOneButton)
                            bot.sendMessage(chatId, planTwo, planTwoButton)
                            bot.sendMessage(chatId, planThree, planThreeButton)
                            bot.sendMessage(chatId, planFour, planFourButton)
                }else {
                    bot.sendMessage(
                        chatId,
                        `Hello, I am ${botUsername} Bot. I noticed you mentioned me.`
                    );
                }
            }
            if(messageText.toLocaleLowerCase().includes('scam') || messageText.toLocaleLowerCase().includes('fraud')){
                bot.deleteMessage(chatId, msg.message_id)
                    bot.sendMessage(chatId, `Please do not use the word '${msg.text}' in this group chat. Thank you`)
            }
        } else if (chatType === 'private') {
            // Private chat handling
            if(messageText.toLocaleLowerCase().includes('scam')){
                bot.deleteMessage(chatId, msg.message_id)
                    bot.sendMessage(chatId, `Please do not use the word '${msg.text}' in this chat. Thank you`)
            }
        }
    }else {
        // Handle non-text messages (e.g., photos, stickers)
        bot.sendMessage(
            chatId,
            `I welcome you to TLA USDT and BTC Bot 💙. Please refer to me or tag me for assistance.`
        );
    }
});









// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`)
// }) 