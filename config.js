const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://mongodbural:mongodbural@cluster0.j0d7xng.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94766943622'
global.devs = '94766943622';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' //wa.me/+25000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/fb7993e24f7ecdaecbed5.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'JAYSON Whats𝐁𝐨𝐭' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'JAYSON' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? "VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0VucDl0UXRBSkhSS2wzZmFyTUNWV0JGQlAyQmtYWGtRZzlNelRuYmdFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczlJSkJnZGFlWGR3L1ZpMGZ5dE9lRER0ZnIwWTBSZ3hsZHl1bHl6V2MxVT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTmRIQTZEamV0dDlJb0VEV3RDUEVYcDRvNzY4NTM2RmRPemtwTWk1cDNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3L2RML2RFcGhsL3o0YmVGekpTSUFwcDRBbU83d3crZkdNUS9qQjQybFZrPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVFZkxUaEt5ZStMS2N6QlZCVEEzU0dneUxxQlk2cHFRVERvV2RiQmwvMTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJpd28rbnpsbFE2WS9KSGNwTjdNNlhReGpkZldLL1lOR1hIUmpOc2NGQkE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOUTlHVG1tWTdjWDZ4bDA5VUVQWkhyaUhvdUphSWUrZ3ViUm1rbkMweDVOVzQ3KzJPTk5JSXFSTHZ3MTFjU1h3WDdYTms1N3NCM1RhNkw3Q2t0K0RDUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjMwLCJhZHZTZWNyZXRLZXkiOiJjOWREMkxuTjZSQUs1bkxOMTFQTlVEcTdHU1A1bTQ0OWp6RHZkSjhySjhBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIX1V5SUFUTlRsZTJkMkt5eW5aV3VRIiwicGhvbmVJZCI6Ijg3ZjE0YjYxLTNlN2QtNDQxYi1iMzVkLTZmYmEwMWI3ZDBiMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwbHk0WUNvdnJuVzJjem52RVF5VmpLbE8yQUU9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5hZ1VjREdwQ2xrVGVCSEdvaFdWRHd0eTYvOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01TLzgrWUhFTWU0NDZvR0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieXBPbmhXek8zVHlrSmVyVUZoc2x6K2p5SnZqVUJ6R1hNcHdYak11YWpHTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiN0hLUGppcndjVVQ3aXhVNFMya3BqQzQ1eUh4MWNyVWlGbXdVekljUTd3K0FBTjFsNWJrRzNpVUZibU14VjgvemJuVFE4ZzIwWk1qY3B3Y055Rkg3REE9PSIsImRldmljZVNpZ25hdHVyZSI6IitnWkJOQmJJWVpEejgvUXZTbkFBMXh0OGQ2WjEwKzlzYUNkSUg2U0hxaW4ydW5JRzZTQmswcEdDME02NHdZaTc2VTBEVXZUMHZpOFBTaWxudDJ6WEFnPT0ifSwibWUiOnsiaWQiOiIxOTE3NzIwODI5MzoxNUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxOTE3NzIwODI5MzoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjcVRwNFZzenQwOHBDWHExQlliSmMvbzhpYjQxQWN4bHpLY0Y0ekxtb3hqIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAwMzIyMzgwfQ==" : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'Jayson' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'Jayson-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? true : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.OPENAI_API_KEY === undefined ? 'eSFM1EC1O1B9fN8HveLZT3BlbkFJbjqG4BahRvcoGhk1Yu8e' : process.env.OPENAI_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
