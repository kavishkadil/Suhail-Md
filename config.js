const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "https://cloud.mongodb.com/v2#/org/660d0429b37f3a73effc1cb7/projects"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "sri lanka/colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,94706407195";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94706407195";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "unvailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,94706407195";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,94706407195";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,94706407195";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_31_04_03_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibUhsMkFBbmNCNCtKUTBxdXhoOE5wMTM5ckU5MTVoNTlLT3Q3WGJOYUVsND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjdxU3BsaUtaWHdSK3RGMmlzWThibkpvZkhPemw2NVpGUnNOMXdxQldyd2M9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYUN3bjgvQk1aL0ZtaThEOGJNWk1hb1NuTGxWYVEyVmduayt6UktsY3JIND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjI0TXdvMFkvVmJBRjhzYXNSNnN5aGpTMWVBZWpoOFNtNTBhY1dKc0FKRUk9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMEFubUVLRTJBRmJYMGFpdGdKS29EdnVHMFBKUzBQMGNsdUFoY0l6cm9Ydz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlJvcUNpT1hpaWVtWWhqdzBsVitDcXVJb2YyK3BYQWdUQ2c4Z3JPT3RQMkE9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJjTTFIQUZYSTgzUHl3d1l0U1VsZFp6bEs0NEF5Z2tGMUZTZUNqN0s0ZVhZPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR0J6N0ZRY0IwWnEyS2h0ZUVaOWV4UjBFSE16eVBteWxJZmxvekRYRXN4bz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJYUXZSRndzdmt0S0ZSTWw0ZnhGU3ZBQU4ybUxDejdTTWpsbnpTUitTaHdBTWlKcC9tTU9QS094SE9qL25NWGdXdVFrakJacGhLVmQ2VkM3ei9nTkNpQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjA0LFwiYWR2U2VjcmV0S2V5XCI6XCJxbG1yV1IxbVczL21ZZCtZeC9YL0dmSVNzUHhzbEcvemlFekYxV2dudGF3PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiV2ZFcTBzTk5TWWVHVS1heDZZZmFkd1wiLFwicGhvbmVJZFwiOlwiYmJkYmRmOWMtMWVhZS00NDNiLWE5NTgtNjU2MTM5YWIyNWVmXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI4WkFKK1kvTW1ZRmNGekFjcUJWajBIM2xaK0k9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNW96Z0lXZmErbW1mRlllVG5qTTU5ejcxZ0dBPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIlpUUVhFSlNTXCIsXCJtZVwiOntcImlkXCI6XCI5NDcwNjQwNzE5NTo2MEBzLndoYXRzYXBwLm5ldFwiLFwibGlkXCI6XCIxODEwNjc2MDA0MTcwMDI6NjBAbGlkXCIsXCJuYW1lXCI6XCLijaPqnrDhtqvNouqqn+KCgeKCg+C8kMm04bSP4bSbyo8g4bSLyarJtMmi4oOd8J+HpvCfh7RcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ0kvYjNuRVFxZSt6c0FZWUF5QUFLQUE9XCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJ4bDE1U1Uvc1FxeENZQW9HeEJVTUc2OHZqckhOejg3alg0Ny9yaUJHekM4PVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwia09ZL1hCaVlTbm8zd3gzMUxEOUovRS80THhPR2ZodGpVRUhVc0ZJaERoZm54VnRibjRPSDBHWDgyUGJ6QjZuUW9nSWxtNDNOZ01KSm1vSUlFSUdIRGc9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJrTnpXT214SU5OMW52Wk9IckJmR0xhVmcvTUhnL1I0WllGOXZibEVnR0tCSkl0QnhmOCtkSGtsbG5DZGVYV2FROWdmeCt2WW1Bb2lQSUlKaGRSUThpQT09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiOTQ3MDY0MDcxOTU6NjBAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCY1pkZVVsUDdFS3NRbUFLQnNRVkRCdXZMNDZ4emMvTzQxK08vNjRnUnN3dlwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTIxMjU4NjgsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBTW9rXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTW9rLmpzb24iOiAie1wia2V5RGF0YVwiOlwicGZuRWRqcFYwV0xGZmVkTUU3TGxuY21uSGdIZjN2amF2b3JmdTFFcC93QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzg1Mjk5MzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©Anjana" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Anjana",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Noty King",
  ownername:process.env.OWNER_NAME|| "Anjana",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
