const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = [""];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"cD4cme/u+7117kb9gk/N9K7irE1cD1TtEr8RVJdWN04="},"public":{"type":"Buffer","data":"3xtAmNRoX+tNrTU+NI/3B2sVOD6LUo9/3YBg33vkLl8="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"KBhvScvHiZJH19hCmXN4pNVDyR7e65eUSWBmJqbm4W0="},"public":{"type":"Buffer","data":"mvsl7r9VBxVYtpgDrc0Wc0k8oBiNPyBMMHvgrPJ5dCo="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"uI0ZNhmck8Eo7L5JEGx7rdh1sf3uJlyrRN31dlhwf1o="},"public":{"type":"Buffer","data":"9f1gnCwjNNdxAMBQbE9crjctywncLD25Ck4g+uUSGV0="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"+JCKZj7XwbbCSRAAkeeO4C+8LMmtCRt2+yXHwOfo93k="},"public":{"type":"Buffer","data":"H5hq6U5/3mFjeN604r7079KFIL2O//EVDPxaMpFJNEk="}},"signature":{"type":"Buffer","data":"htSS0iMKZ+bad7B1loC7dUYdtWqsStA6XiPqU015ml+WChi0h5nceCryQx9h5kAqzOTEfq523fKH6PzMkYCCAw=="},"keyId":1},"registrationId":154,"advSecretKey":"I9o/QuWZE5eSV9PvbHI2BJ6UaSNXYmFdP+GyobIKs48=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"n6yial0GQsGPtRcympSXTg","phoneId":"5e2ea1dd-4a4d-4788-8ecc-5c87580bbe49","identityId":{"type":"Buffer","data":"jgbK34L0VIL3oueCN+OjaSZQh3E="},"registered":true,"backupToken":{"type":"Buffer","data":"NKO9MJ5xf/bHbVLQtGcEU4LgyXM="},"registration":{},"pairingCode":"N27H4GN8","me":{"id":"254726172763:46@s.whatsapp.net"},"account":{"details":"CM3k6JADEMvq4bUGGLoBIAAoAA==","accountSignatureKey":"+wSOfgWAem/Jsm0DhJpAYW5mRvGlnJSKw+Ubv5vXMXI=","accountSignature":"08BlP4XynDqEJFIK+Lk5Hi7NFiZCaDxJz4nplO5DgGEQ8754nx6Xo1Om+amMNbwcckigUKhjFsburetNc4mUDw==","deviceSignature":"2TI33MSc4jEGNi1NCHXEw8K7wk5qRlDP1gG9QEKpGq368q8HndzbDvPhyIH8TKGJ2htJSqY6NwPOWu3rxm0sCA=="},"signalIdentities":[{"identifier":{"name":"254726172763:46@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BfsEjn4FgHpvybJtA4SaQGFuZkbxpZyUisPlG7+b1zFy"}}],"platform":"android","lastAccountSyncTimestamp":1723364697}`
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
