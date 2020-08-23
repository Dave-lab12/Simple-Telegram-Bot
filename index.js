const TelegramBot = require('telegraf')
const token = '';
const bot = new TelegramBot(token)
const axios = require('axios')

const tru = ["What are your top three turn-ons?","What is your deepest darkest fear?","Tell me about your first kiss.","Who is the sexiest person here?","What is your biggest regret?","Who here has the nicest butt?","Who is your crush?","Who was the last person you licked?","Have you ever cheated or been cheated on?","Tell me about your most awkward date.","Have you ever made out with someone here?","What are you most self-conscious about?","When was the last time you peed in bed?","What is the biggest lie you have ever told?","What is the most embarrassing picture of you?","Who is the person you most regret kissing?","Tell us your most embarrassing vomit story.","What is the naughtiest thing you’ve done in public?","What do most people think is true about you, but isn’t?","What is the biggest thing you’ve gotten away with?","What would you do if you were the opposite sex for a month?","What is the most expensive thing you have stolen?","What is the most childish thing you still do?","What’s the worst time you let someone take the blame for something you did?","What is something your friends would never expect that you do?","Who here would you most like to make out with?","What lie have you told that hurt someone?","What is the meanest you have been to someone that didn’t deserve it?","What is something that people think you would never be into, but you are?","What was the worst encounter you had with a police officer?","What is the silliest thing you have an emotional attachment to?","Where is the strangest place you have peed?","Have you ever crapped your pants since you were a child?","What is the most embarrassing thing your parents have caught you doing?","What secret about yourself did you tell someone in confidence and then they told a lot of other people?","When was the most inappropriate time you farted?","What is the scariest dream you have ever had?","What is the most embarrassing thing in your room?","Why did you break up with your last boyfriend or girlfriend?","What is the stupidest thing you have ever done?","What is the grossest thing that has come out of your body?","What is your favorite thing that your boyfriend or girlfriend does?","What terrible thing have you done that you lied to cover up?","Who have you loved but they didn’t love you back?","What is something that you have never told anyone?","What is the most disgusting habit you have?","What pictures or videos of you do you wish didn’t exist?","What was the cruelest joke you played on someone?","What horrible thing have you done that no one else found out about?","What is the most embarrassing thing you have put up on social media?","What was the most awkward romantic encounter you have had?","What is the grossest thing you have had in your mouth?","Tell me about the last time someone unexpectedly walked in on you while you were naked.","What is the most embarrassing nickname you have ever had?","What is the most embarrassing series of texts you have on your phone? ","Describe your most recent romantic encounter in detail.","What is the weirdest thing you have done for a boyfriend or girlfriend?","Is it true that you (whatever you or the group suspects they do / did)?","When was the last time you wiped a booger off on something that shouldn’t have boogers on it?","What do you really hope your parents never find out about?","Tell me something you don’t want me to know.","What have you done that people here would judge you most for doing?","If you starred in a romance, what would it be like?"]
const dare = ["Serenade the person to your right.","Talk in an accent for the next 3 rounds.","Kiss the person to your left.","Attempt to do a magic trick.","Do four cartwheels in row.","Let someone shave part of your body.","Eat five tablespoons of a condiment.","Be someone’s pet for the next 5 minutes.","Attempt to break dance for 30 seconds.","Let the group give you a new hairstyle.","Do the worm.","Find some lipstick and put it on","You have 10 minutes to write a short love poem","Write something embarrassing somewhere on your body (that can be hidden with clothing) with a permanent marker.","Update your status as “I’m Mad”","Send me a picture of your hands.","Flirt with me for next 15 minutes.","Say I Love You in a voice note.","Tell me a joke.","Send last 5 pictures from your camera roll.","Name of your Ex?","What is your relationship status.","Describe our relationship with a movie name.","Delete your partner no. from your phone.","Ask a neighbor for a roll of toilet paper.","Drink 1 bottle of water in 10 seconds.","call your Mom and introduce her with your partner.","Call me and sing a song 4 me !"] 
//start command
 bot.start((ctx)=>{
    ctx.reply('hello my name is fox how can i help you')
 })
 //help  command
 bot.help((ctx)=>{
     ctx.reply('this bot have many functionalities the basic ones are \n /start \n /covid \n fox \n /joke \n /truth \n /dare')
 })
//listens when you call the bot name
 bot.hears('fox',(ctx)=>{
     ctx.reply('yoyoyo')
 })
//when trigered it will give you the stats of covid in limited countries 
bot.command('covid',(ctx)=>{
    
    ctx.telegram.sendMessage(ctx.chat.id,'Choose country',
    {
        reply_markup:{
            inline_keyboard: [
                [{text: "Ethiopia",callback_data:'et'},{text: "USA",callback_data:'us'}],
                [{text: "Netherlands",callback_data:'nl'}],[{text: "Cancel",callback_data:'c'}]
            ]
    }})
})
bot.action('et',(ctx)=>{
    ctx.deleteMessage()
    const ret = `▓▓▓▓
    ▒▒▒▓▓
    ▒▒▒▒▒▓
    ▒▒▒▒▒▒▓
    ▒▒▒▒▒▒▓
    ▒▒▒▒▒▒▒▓
    ▒▒▒▒▒▒▒▓▓▓
    ▒▓▓▓▓▓▓░░░▓
    ▒▓░░░░▓░░░░▓
    ▓░░░░░░▓░▓░▓
    ▓░░░░░░▓░░░▓
    ▓░░▓░░░▓▓▓▓
    ▒▓░░░░▓▒▒▒▒▓
    ▒▒▓▓▓▓▒▒▒▒▒▓
    ▒▒▒▒▒▒▒▒▓▓▓▓
    ▒▒▒▒▒▓▓▓▒▒▒▒▓
    ▒▒▒▒▓▒▒▒▒▒▒▒▒▓
    ▒▒▒▓▒▒▒▒▒▒▒▒▒▓
    ▒▒▓▒▒▒▒▒▒▒▒▒▒▒▓
    ▒▓▒▓▒▒▒▒▒▒▒▒▒▓
    ▒▓▒▓▓▓▓▓▓▓▓▓▓
    ▒▓▒▒▒▒▒▒▒▓
    ▒▒▓▒▒▒▒▒▓
    Sorry No Data found`
    ctx.telegram.sendMessage(ctx.chat.id,ret,{
    reply_markup:{inline_keyboard:[[{text:'back',callback_data: 'go-back'}]]}
})

})
bot.action('us',(ctx)=>{
    ctx.deleteMessage()
    getDataUs()
    .then((info)=>{
        ctx.telegram.sendMessage(ctx.chat.id,info,{
    reply_markup:{inline_keyboard:[[{text:'back',callback_data: 'go-back'}]]}
})
    })
    
})
bot.action('nl',(ctx)=>{
    ctx.deleteMessage()
   getData()
   .then((result)=>{
    ctx.telegram.sendMessage(ctx.chat.id,result,{
    reply_markup:{inline_keyboard:[[{text:'back',callback_data: 'go-back'}]]}
   })
    
})
})
bot.action('c',(ctx)=>{
    ctx.deleteMessage()
})
bot.action('go-back',(ctx)=>{
    ctx.deleteMessage()    
        ctx.telegram.sendMessage(ctx.chat.id,'Choose country',
        {
            reply_markup:{
                inline_keyboard: [
                    [{text: "Ethiopia",callback_data:'et'},{text: "USA",callback_data:'us'}],
                    [{text: "Netherlands",callback_data:'nl'}],[{text: "Cancel",callback_data:'c'}]
                ]
        }})
    })
async function getData(){
    url = "https://api.apify.com/v2/key-value-stores/vqnEUe7VtKNMqGqFF/records/LATEST?disableRedirect=true"
   let res = await axios.get(url)
   const gr = res.data.infectedByRegion[13]
   results = `Cases in Netherlands, ${gr.region}:
confirmed Cases: ${gr.infectedCount}:
Deceased Count: ${gr.deceasedCount} `;
   return results;
}
//function to fetch the covid stats
async function getDataUs()
{
    url = "https://api.apify.com/v2/key-value-stores/moxA3Q0aZh5LosewB/records/LATEST?disableRedirect=true"
    let response = await axios.get(url)
    let result = response.data.casesByState[23]
    let info = `Cases in the America , ${result.name}
Cases reported${result.casesReported},
Range${result.range}`
    return info
}

bot.command('joke',(ctx)=>{
    jokes().then((final)=>{
        
        ctx.reply(final)
        
    })
})
async function jokes(){
    url = "https://sv443.net/jokeapi/v2/joke/Any"
   let res = await axios.get(url)
    let resul = res.data.setup
    let res2 = res.data.delivery
    console.log(resul)
    console.log(res2)
    let final = `${resul} 
-${res2}`
    return final 
   
}

 //truth
 const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
 async function td(){
        await delay(20);
        const truth = tru.length;
        const rand = Math.floor(Math.random()*truth)
       return rand
     }
  bot.command('truth',(ctx)=>{
    td().then((rand)=>{     
    ctx.reply(tru[rand])
     })
 })
 //dare
 async function tdD(){
    await delay(20);
    const da = dare.length;
    const rand = Math.floor(Math.random()*da)
   return rand
 }
  bot.command('dare',(ctx)=>{
    tdD().then((rand)=>{     
    ctx.reply(dare[rand])
     })

 })
 //run the bot
 bot.launch()
