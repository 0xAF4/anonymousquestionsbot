const {Telegraf, Markup} = require('telegraf')
const bot = new Telegraf('')

bot.start( ctx =>{
    ctx.reply(`Добро пожаловать, оставьте здесь свой вопрос и мы обязательно передадим его Кариму!`)
})

bot.on('text', (ctx, next) =>{
    if (ctx.message.chat.id === 437603529) {
        var myRe = new RegExp('"id":(.*?),')
        try{
            ctx.telegram.sendMessage(myRe.exec(ctx.message.reply_to_message.text)[1], ctx.message.text)
        } catch(err) {
            ctx.reply('Это должен быть реплай!')
        }
    } else {next()}
})

bot.on('text', ctx =>{    
    ctx.telegram.sendMessage(437603529, `${JSON.stringify(ctx.message.from)} \n\n ${ctx.message.text}`)
})


bot.launch().then( resp => console.log('Bot Started!'))
