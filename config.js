const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://bottechx:joelu2bad@bottechx.v1vk6.mongodb.net/?retryWrites=true&w=majority&appName=bottechx"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://bottechx:joelu2bad@bottechx.v1vk6.mongodb.net/?retryWrites=true&w=majority&appName=bottechx"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "16399990192";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "null" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "16399990192,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_14_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDg2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3OCxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDMyLFxuICAgICAgICA0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NCxcbiAgICAgICAgNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc2LFxuICAgICAgICAzLFxuICAgICAgICA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDYwLFxuICAgICAgICA2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDYwLFxuICAgICAgICA0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MixcbiAgICAgICAgNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDkyLFxuICAgICAgICA2NSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM2LFxuICAgICAgICA5MyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyLFxuICAgICAgICA5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDkzLFxuICAgICAgICAzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE2LFxuICAgICAgICA4NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDczLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM5LFxuICAgICAgICA1NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjY0QW1PcnhmS0RqRGh3b3pNRC9SaWJPeW9XM1gxSHcrSjR3TGtvSEhic2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTYzOTk5OTAxOTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBM0MzOTUwNTlFNTMwMjJDMkJCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDkyNzI3NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhanhHUGxwZVE4MjMwRGlLYWZ4M093XCIsXG4gIFwicGhvbmVJZFwiOiBcImQ4MjQ0NmI1LTQ3ODctNDMzYi04MGU0LWQzYzNkZGRkNTcxMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NyxcbiAgICAgIDg5LFxuICAgICAgMjMxLFxuICAgICAgMjIyLFxuICAgICAgNzIsXG4gICAgICAxOTcsXG4gICAgICAxMDYsXG4gICAgICAxMjksXG4gICAgICAxNjMsXG4gICAgICA3MCxcbiAgICAgIDc0LFxuICAgICAgMjE4LFxuICAgICAgNSxcbiAgICAgIDg1LFxuICAgICAgMjI2LFxuICAgICAgMTkwLFxuICAgICAgMTc5LFxuICAgICAgMTgyLFxuICAgICAgMTU1LFxuICAgICAgMTkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgMTY0LFxuICAgICAgMTExLFxuICAgICAgMTc0LFxuICAgICAgMTg1LFxuICAgICAgMjQ5LFxuICAgICAgMjIyLFxuICAgICAgMjI1LFxuICAgICAgMzMsXG4gICAgICA0NixcbiAgICAgIDIxLFxuICAgICAgNTMsXG4gICAgICAxLFxuICAgICAgMTM1LFxuICAgICAgMTE3LFxuICAgICAgMTI3LFxuICAgICAgOTEsXG4gICAgICAxNSxcbiAgICAgIDE0MixcbiAgICAgIDE4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5VjNOVktRUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTYzOTk5OTAxOTI6OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM0NTgzNDQ1ODA3MTU0OjkwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkogQSBZIFMgTyBOXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTY4N3ZNREVLUEhvN3NHR0JNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvZVZZYXUxVjZHSGJDNlVFOWYySnNHRzVVdFlHY3dyVFdQNE93M3RrVFhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk01UzFSazVjWTFJTG5uWDBKMkFYYkFLZGVENTRFcnFmeHU5NFFVKzVZT2Y4cWVibDVrSm8zUFRTcXJkNENGVEFtbklxSnBUWmdWNUdNdmorcWx6ZUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxHUWI5aWV2alk0TS82eEc0bEo3OFhYeWJWTVE1ajEvRU9WYmh5c3dWTEpIbjhLMW5tK2kwWWFweXdMeUgxb05vWldCd1Bud1hxOExDOCtoQzlkMUJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE2Mzk5OTkwMTkyOjkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0OTI3MjcxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFFc0FBTUEvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUVzQUFNQS8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "🤡",
  packname: process.env.PACK_NAME || "🆑OWN",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "J",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_1269c7c830226bf6bcc9a0a906a34c871f265424c0947b01";
global.aitts_Voice_Id = process.env.AITTS_ID|| "40";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
