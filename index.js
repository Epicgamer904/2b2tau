const pass = process.env['pass']
const email = process.env['email']
const mineflayer = require('mineflayer')
var walking = false
var stdin = process.openStdin();
stdin.addListener("data", function(d) {
	msg = d.toString().trim()
	sendMsg(msg)
  });
//const enemy = e => e.type === 'mob'
const playerLook = e => e.type === 'player'
var options = {
    host: '2b2t.com.au', // minecraft server ip
    username: email, 
    auth: 'microsoft',
    password: pass
}
const bot = mineflayer.createBot(options)
bot.once('spawn', () => {
	console.log('Successfuly spawned: ' + bot.username)
   /** if (enemy){
        bot.attack(playerLook)
    }**/
})

bot.on('chat', (username, message) => {
  logger(username, message)
  if (username === bot.username || username == "donate2b2tcomau") return
  bot.chat(message)
})

function sendMsg(msg)
{
	bot.chat(msg)
}

const logger = (username, message) => {
  let response = `<${username}> ${message}`
  if (message.startsWith(">")){
    console.log("\x1b[32m%s", response,'\x1b[0m')
  }
  else if(message.startsWith("`")){
    console.log("\x1b[34m%s", response,'\x1b[0m')
  }
  else{
    console.log(response)
  }
}
/**
bot.on('entityHurt', (entity) => {
    if (entity != bot.entity) return
    walking = !walking;
    bot.setControlState('forward', walking)
  
})
const { mineflayer: mineflayerViewer } = require('prismarine-viewer')
bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 3007, firstPerson: false })
})

bot.on('move', () =>{
    let friend = bot.nearestEntity(playerLook)

    if(friend){
        bot.lookAt(friend.position.offset(0, friend.height, 0))
    }
})
**/
bot.on("end", function (reason) {
    bot = mineflayer.createBot(details)
    console.log(reason)
})