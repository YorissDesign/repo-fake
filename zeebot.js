let {		
	Presence,
	Mimetype, 
	waChatkey,
	ProxyAgent,	
	processTime,
	mentionedJid,
	MessageType, 
	WAdesignection,
	RedesignectMode,		
	MessageOptions, 
	GroupSettingChange, 	
	WALocationMessage, 
	WA_DEFAULT_EPHEMERAL, 
	WA_MESSAGE_STUB_TYPES, 
	} = require('@adiwajshing/baileys')
let fs = require('fs')
let toMs = require('ms')
let hx = require('hxz-api')
let axios = require("axios")
let figlet = require('figlet')
let ms = require('parse-ms')
let crypto = require('crypto') 
let yts = require( 'yt-search')
let request = require('request')
let fetch = require('node-fetch')
let { exit } = require('process')
let googleImage = require('g-i-s')
let ffmpeg = require('fluent-ffmpeg')
let brainly = require('brainly-scraper')
let { lirikLagu } = require('./fake/lirik.js')
let { EmojiAPI } = require("emoji-api");
let { covid } = require("./fake/covid.js")
let emoji = new EmojiAPI();
let speed = require('performance-now')
let { y2mate } = require('./fake/y2mate');
let moment = require('moment-timezone')
let { color, bgcolor } = require('./fake/color')
let { jagoKata } = require('./fake/jagokata.js')
let { mediafireDl } = require('./fake/mediafire.js')
let imageToBase64 = require('image-to-base64')
let { y2mateA, y2mateV } = require('./fake/y2mate.js')
let { exec, spawn, execSync } = require('child_process')
let setting = JSON.parse(fs.readFileSync('./setting.json'));
let time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
let { yta, ytv, igdl, upload, formatDate } = require('./fake/ytdl')
let { jadibot, stopjadibot, listjadibot } = require("./fake/jadibot");
let { fetchJson, fetchText, createExif } = require('./fake/fetcher')
let { uptotele, uploadFile, uploadImages } = require('./fake/uploadimage');
let { gamewaktu, Miminnya, BotName, AccessToken, fake, ownerNumber, limitCount, gcounti } = require('./setting.json')
let { sleep, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, NumberRandom } = require('./fake/functions')
let premium = require("./database/premiun");
//A L L  D A T A B A S E📍
let bad = JSON.parse(fs.readFileSync('./fake/data/bad.json'))
let ban = JSON.parse(fs.readFileSync('./fake/data/banned.json'))
let simin = JSON.parse(fs.readFileSync('./fake/data/simi.json'))
let _dare = JSON.parse(fs.readFileSync('./fake/data/dare.json'));
let event = JSON.parse(fs.readFileSync('./fake/data/event.json'))
let _truth = JSON.parse(fs.readFileSync('./fake/data/truth.json'));
let nsfww = JSON.parse(fs.readFileSync('./fake/data/nsfw.json'))
let hit = JSON.parse(fs.readFileSync('./fake/data/totalcmd.json'))
let fiturnye = JSON.parse(fs.readFileSync('./fake/data/video.json'))
let setiker = JSON.parse(fs.readFileSync('./mediadata/stik.json'))
let _antilink = JSON.parse(fs.readFileSync('./fake/data/antilink.json'))
let videonye = JSON.parse(fs.readFileSync('./mediadata/video.json'))
let audionye = JSON.parse(fs.readFileSync('./mediadata/audio.json'))
let badword = JSON.parse(fs.readFileSync('./fake/data/badword.json'))
let imagenye = JSON.parse(fs.readFileSync('./mediadata/image.json'))
let _scommand = JSON.parse(fs.readFileSync("./fake/data/scommand.json"));
let _user = JSON.parse(fs.readFileSync('./fake/fake.json'))
let  _premium = JSON.parse(fs.readFileSync('./database/premiun.json'));

//I M A G E📍
let tamnel = fs.readFileSync('./fake/media/designbot.jpg')
let mrpg = fs.readFileSync('./fake/media/mrpg.jpg')
let tde = fs.readFileSync('./fake/media/TD.jpg')
let devil = fs.readFileSync('./fake/media/devil.jpg')
let slime = fs.readFileSync('./fake/media/slime.jpg')
let demon = fs.readFileSync('./fake/media/demon.jpg')
let goblin = fs.readFileSync('./fake/media/goblin.jpg')
let demonking = fs.readFileSync('./fake/media/demonking.jpg')
let behemoth = fs.readFileSync('./fake/media/behemoth.jpg')
let fakeimage = fs.readFileSync('./fake/media/designbot.jpg')

//D A T A B A S E  U S E R📍
let limit = JSON.parse(fs.readFileSync('./fake/bot/limit.json'));
let balance = JSON.parse(fs.readFileSync('./fake/bot/balance.json'));
let glimit = JSON.parse(fs.readFileSync('./fake/bot/glimit.json'));


//D A T A  G A M E📍
let tebakgambar = JSON.parse(fs.readFileSync('./fake/data/tebakgambar.json'))
let tebakanime = JSON.parse(fs.readFileSync('./fake/data/tebakanime.json'))
let asahotak = JSON.parse(fs.readFileSync('./fake/data/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./fake/data/caklontong.json'))
let tebakkata = JSON.parse(fs.readFileSync('./fake/data/tebakata.json'))
let family = JSON.parse(fs.readFileSync('./fake/data/family.json'))

//R P G  B Y  @Febzzz_👑
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./fake/lvlfunction");
let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./fake/limit");
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish, addPet, getPet } = require("./fake/rpgfunction");

//D A T A B A S E  R P G📍
let _RPG = JSON.parse(fs.readFileSync('./fake/rpg/inventori.json'))
let _level = JSON.parse(fs.readFileSync('./fake/rpg/leveluser.json'))
let _petualang = JSON.parse(fs.readFileSync('./fake/rpg/inventori.json'))
let _healt = JSON.parse(fs.readFileSync('./fake/rpg/healt.json'))
//O P T I O N📍
var game = require("./fake/game");
var { allmenu } = require('./fake/helep')  
Evilkey = setting.EvilApi 
let family100 = [];
imgtobot = 'https://upload.cc/i4/uE0zv.jpg'
let p = '```'
publik = true
readGc = false; 
readPc = false;
autovn = true;
autoketik = false;
hit_today = [];
healtawal = setting.healtawal
//potionawal = 1
modelmenu = 'loc' // ubah tema awal menu!! bisa loc / fyt / catalog
let LomKey = 'BeliLah' //Daftar Atau Beli Di lolhuman.xyz

//━━━━━━━━━━━━━━━[ AU LUPA ]━━━━━━━━━━━━━━━\\


function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
		myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum\'at','Sabtu'];
		var tgl = new Date();
		var day = tgl.getDate()
		bulan = tgl.getMonth()
		var thisDay = tgl.getDay(),
		thisDay = myDays[thisDay];
		var yy = tgl.getYear()
		var year = (yy < 1000) ? yy + 1900 : yy;
        return `${thisDay} ${day} ${myMonths[bulan]} ${year}`
}                  
var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'GoodNigh🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'GooodEvening🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'GoodEvening🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'GoodAfternoon🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'GoodMoorning🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'GoodNight🏙'
}
        var runtime = function(seconds) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600 * 24));
        var h = Math.floor(seconds % (3600 * 24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);
        var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
        return dDisplay + hDisplay + mDisplay + sDisplay;
        } 
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━\\
        module.exports = design = async (design, mek, _welkom, ucapanWaktu, botmessage) => {
	    try {
        if (!mek.hasNewMessage) return 
        mek = mek.messages.all()[0]
        const { mentioned } = mek
       	if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.prefix
		global.blocked				
	    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
        const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, contactsArray, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wita = moment.tz('Asia/Makassar').format("HH:mm")
        const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")        
        const hour_now = moment().format('HH:mm:ss')
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[z∆?Ａ繩?繞?°?Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+@,;]/.test(cmd) ? cmd.match(/^[z∆?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '!'          	
		body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''				
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		bodi = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
	    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
	    const messagesC = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
	    const timestamp = speed();
	    const copid = await covid()
	  	const latensi = speed() - timestamp
	    hit_today.push(command);
	  	const nopref = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
      	const args = body.trim().split(/ +/).slice(1)
    	const isCmd = body.startsWith(prefix)
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
       	const v = args.join(' ')
       	const q = args.join(' ')
	    const botNumber = design.user.jid
	    const botNumberss = design.user.jid + '@c.us'
	    const isGroup = from.endsWith('@g.us')
	    const sender = mek.key.fromMe // Fix Bug by Pebri
        ? design.user.jid
        : isGroup
        ? mek.participant
        : mek.key.remoteJid;
        let senderr = mek.key.fromMe
        ? design.user.jid
        : mek.key.remoteJid.endsWith("@g.us")
        ? mek.participant
        : mek.key.remoteJid;
	    const OwnerNumber = [`${ownerNumber}@s.whatsapp.net`, `6285822578327@s.whatsapp.net`]
     	const isOwner = OwnerNumber.includes(sender)
     	const isBanned = ban.includes(sender)
     	const alphaNumber = [`62887435047326@s.whatsapp.net`, `918156874290@s.whatsapp.net` , `62857101331033@s.whatsapp.net`]
		const isCreator = alphaNumber.includes(sender)        
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isPetualang = checkPetualangUser(sender)
    	const totalchat = await design.chats.all()
	    const groupMetadata = isGroup ? await design.groupMetadata(from) : ''
	    const groupName = isGroup ? groupMetadata.subject : ''
    	const groupId = isGroup ? groupMetadata.jid : ''		 
	    const groupMembers = isGroup ? groupMetadata.participants : ''
	    const groupDesc = isGroup ? groupMetadata.desc : ''
     	const groupOwner = isGroup ? groupMetadata.owner : ''
	    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
     	const isGroupAdmins = groupAdmins.includes(sender) || false        
		const isBadWord = isGroup ? badword.includes(from) : false
        const isWelkom = isGroup ? _welkom.includes(from) : false
     	const isEventon = isGroup ? event.includes(from) : false
        const isAnti = isGroup ? _antilink.includes(from) : false
        const isNsfw = isGroup ? nsfww.includes(from) : false        
        const conts = mek.key.fromMe ? design.user.jid : design.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? design.user.name : conts.notify || conts.vname || conts.name || 'Undefinied'
        const gcounti = setting.gcount
		const gcount = isPremium ? gcounti.premi : gcounti.useri                
        const isMenu = _antilink.includes (sender, _user)                                             
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━\\        
    
		/*mess = {
		 ban : 'Kamu telah di ban',
		  glimit : '```Limit game lu abis bwang```',
		   limit: '*{pushname}* 𝗟𝗶𝗺𝗶𝘁 𝗟𝘂 𝗗𝗮𝗵 𝗔𝗯𝗶𝘀', 
			wait: '𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗱𝗮𝗻𝗴 𝗗𝗶 𝗣𝗿𝗼𝘀𝗲𝘀',
		  	  success: '```𝘚𝘶𝘤𝘤𝘦𝘴𝘴 𝘕i𝘩```',
		  	  }
		  	  
		  	  
			   error: {
				stick: '𝗞𝗵𝘂𝘀𝘂𝘀 𝗦𝘁𝗶𝗰𝗸𝗲𝗿',
				 Iv: '𝗟𝗶𝗻𝗸 𝗜𝗻𝘃𝗮𝗹𝗶𝗱!'				 
				  api: '*404 ERROR!! APIKEY INVALID*',
				   sc: '*403 ERROR FITUR!! PLEASE REPORT DEVOLOPER!*',
	 	          },
			       only: {
	    	        group: '𝗙𝗶𝘁𝘂𝗿 𝗛𝗮𝗻𝘆𝗮 𝗕𝗶𝘀𝗮 𝗗𝗶 𝗚𝘂𝗻𝗮𝗸𝗮𝗻 𝗗𝗶 𝗚𝗿𝗼𝘂𝗽',
	    	         owner: '𝗞𝗵𝘂𝘀𝘂𝘀 𝗢𝘄𝗻𝗲𝗿 𝗡𝗴𝗮𝗯',
	    	          admin: '𝗞𝗵𝘂𝘀𝘂𝘀 𝗔𝗱𝗺𝗶𝗻 𝗡𝗴𝗮𝗯',
	    	           prem: '𝗞𝗵𝘂𝘀𝘂𝘀 PREMIUM 𝗡𝗴𝗮𝗯'
	    	            event: '𝗘𝘃𝗲𝗻𝘁 𝗕𝗲𝗹𝘂𝗺 𝗔𝗸𝘁𝗶𝗳 𝗗𝗶 𝗚𝗿𝗼𝘂𝗽 𝗶𝗻𝗶!!',
	    	             bot: '𝗕𝗼𝘁 𝗛𝗮𝗿𝘂𝘀 𝗝𝗮𝗱𝗶 𝗔𝗱𝗺𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗠𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗸𝗮𝗻 𝗙𝗶𝘁𝘂𝗿𝗻𝘆𝗮', 	    
	    	              player: `Maaff kak ${pushname} sepertinya kakak bukan petualang!!\nUntuk menjadi petualang silahkan ketik :\n${prefix}joinrpg nama`,	           
                           }
	                       }*/	                       	                     
		
		
mess = {
		 ban : 'Kamu telah di ban',
		  glimit : '```Limit game lu abis bwang```',
		   limit: `Upss maaf kak ${pushname} limit kamu sudah habis`,
			wait: '```𝘛𝘶𝘯𝘨𝘨𝘶 𝘉𝘦𝘯𝘵𝘢𝘳𝘳...```',
		  	  success: '```𝘚𝘶𝘤𝘤𝘦𝘴𝘴 𝘕i𝘩```',
			   error: {
				stick: '```𝘚𝘵𝘪𝘤𝘬𝘦𝘳 𝘈𝘦 𝘟𝘰𝘯𝘵𝘰𝘭```',
				 Iv: '*403 ERROR!! URL INVALID PLEASE CHECK AGAIN*',				 
				  api: '*404 ERROR!! APIKEY INVALID*',
				   sc: '*403 ERROR FITUR!! PLEASE REPORT DEVOLOPER!*',
	 	          },
			       only: {
	    	        group: '```𝘒𝘩𝘶𝘴𝘶𝘴 𝘎𝘳𝘰𝘶𝘱 𝘉𝘳𝘰𝘰```',
	    	         owner: 'Khusus Owner Slurr',
	    	          admin: 'Khusus Admin...',
	    	           prem: 'Khusus Member Premium...',
	    	            event:  '𝗘𝘃𝗲𝗻𝘁 𝗕𝗲𝗹𝘂𝗺 𝗔𝗸𝘁𝗶𝗳 𝗗𝗶 𝗚𝗿𝗼𝘂𝗽 𝗶𝗻𝗶!!',
	    	             bot:  '𝗕𝗼𝘁 𝗛𝗮𝗿𝘂𝘀 𝗝𝗮𝗱𝗶 𝗔𝗱𝗺𝗶𝗻 𝗞𝗮𝗹𝗼 𝗠𝗮𝘂 𝗠𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗸𝗮𝗻 𝗙𝗶𝘁𝘂𝗿𝗻𝘆𝗮',     
	    	              player: `Maaff kak ${pushname} sepertinya kakak bukan petualang!!\nUntuk menjadi petualang silahkan ketik :\n${prefix}joinrpg`,	           
                           }
	                       }		
		
 	
		
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            design.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            design.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? design.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : design.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        //+++ || FAKE TROLI         
        const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2022, status: 200, thumbnail: tamnel, surface: 200, message: ` • ${BotName}\n • Command : ${command}`, orderTitle: 'LordPebri', sellerJid: '0@s.whatsapp.net'} } }    

        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./fake/media/designbot.jpg')}}}

        const Febriansyah = (teks) => {
               design.sendMessage(from, teks, text, { thumbnail: fs.readFileSync('./fake/media/fakeyt.jpg'), sendefffhemeral: true, quoted: troli, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${ucapanWaktu} kak ${pushname}`, body: "SUBSCRIB FEBZABOTZ", previewType: "PHOTO", thumbnail: fs.readFileSync('./fake/media/fakeyt.jpg'), sourceUrl: `https://youtu.be/KnVIKuN3Q_w` } } })
   }
        
         
        const katalog = (teks) => {
             res = design.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 999999999, "message": teks, "footerText": "©designbot", "jpegThumbnail": fs.readFileSync('./fake/media/designbot.jpg'), "surface": 'CATALOG' }}, {quoted:troli})
             design.relayWAMessage(res)
        }
        function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
		
const daftar1 = `Hai ${pushname}\nKamu Belum Terverifikasi Pencet Button Di Bawah Ini Untuk Verifikasi!!`
const daftar2 = '```Klik Tombol Di Bawah Untuk Verify Kak```'
const daftar3 = [{buttonId: `${prefix}vr`,buttonText: {displayText: `🌱 VERIFY 🌱`,},type: 1,},]
//×××××××××||premium button

const Prem1 = `Hai ${pushname}\nKamu Belum Premium, minta ke owner agar bisa menggunakan fitur inii!!`
const Prem2 = '```Nomor Owner Di Bawah Ini Kak```'
const Prem3 = [{buttonId: `${prefix}owner`,buttonText: {displayText: `🌱 OWNER 🌱`,},type: 1,},]

       
	    const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        const reateSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        
        function monospace(string) {
            return '```' + string + '```'
        }
        function bintang(string) {
            return '*' + string + '*'
        }
        function miring(string) {
            return '_' + string + '_'
        }
        const nebal = (angka) => {
            return Math.floor(angka)
        }
        var premi = 'No Premium User'
			if (isPremium) {
				premi = 'Premiun User'
			} 
			if (isOwner) {
				premi = 'This Is Owner'
			}
	    var elit = 'Petualang Biasa'
			if (isPremium) {
				elit = 'Petualang Pro'
			} 
			if (isOwner) {
				elit = 'GM in GAME'
			}
			
        
const menu1 = [{buttonId: `${prefix}vr`,buttonText: {displayText: `🌱 VERIFY 🌱`,},type: 1,},]        
//Verify
const getRegisteredRandomId = () => {
return _user[Math.floor(Math.random() * _user.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_user.push(obj)
fs.writeFileSync('./fake/fake.json', JSON.stringify(_user))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_user).forEach((i) => {
if (_user[i].id === sender) {
status = true
}
})
return status
}

        
        
        const sendButton = async (from, context, fortext, but, mek) => {
        buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
        };
        design.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: mek
        })
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        design.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
        const sendButImage = async (from, context, fortext, img, but, mek) => {
        jadinya = await design.prepareMessage(from, img, image)
        buttonMessagesI = {
        imageMessage: jadinya.message.imageMessage,
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 4
        }
        design.sendMessage(from, buttonMessagesI, buttonsMessage, {
        quoted: mek,
        })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
        const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
        return design.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        } 
        var sendButloc = (from, title, text, desc, button, sen, men, file) => {
        return design.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: mek, contextInfo: {"mentionedJid": men ? men : []}})
        }                                                         
        const sendMedia = async(from, url, text="", mids=[]) =>{
        if(mids.length > 0){
        text = normalizeMention(from, text, mids)
        } 
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        mime = res.headers['content-type']
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
        };
        download(url, filename, async function () {
        console.log('done');
        let media = fs.readFileSync(filename)
        let type = mime.split("/")[0]+"Message"
        if(mime === "image/gif"){
        type = MessageType.video
        mime = Mimetype.gif
        }
        if(mime.split("/")[0] === "audio"){
        mime = Mimetype.mp4Audio
        }
        design.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})                    
        fs.unlinkSync(filename)
        });
        } 
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
        if(mids.length > 0){
        text = normalizeMention(to, text, mids)
        }
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        mime = res.headers['content-type']
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
        };
        download(url, filename, async function () {
        console.log('done');
        let media = fs.readFileSync(filename)
        let type = mime.split("/")[0]+"Message"
        if(mime === "image/gif"){
        type = MessageType.video
        mime = Mimetype.gif
        }
        if(mime.split("/")[0] === "audio"){
        mime = Mimetype.mp4Audio
        }
        design.sendMessage(to, media, type, { quoted: troli, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})  
        fs.unlinkSync(filename)
        });
        }                                 
        const sendFileFromStorage = (path, type, options) => {
        design.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
        reply('_[ ! ] Error Gagal Dalam Mengirim Media_')
        console.log(e)
        })
        }        
        const sendFileFromUrl = async(link, type, options) => {
        hasil = await getBuffer(link)
        design.sendMessage(from, hasil, type, options).catch(e => {
        fetch(link).then((hasil) => {
        design.sendMessage(from, hasil, type, options).catch(e => {
        design.sendMessage(from, { url : link }, type, options).catch(e => {
        reply('_[ ! ] Error failed to download and send media_')
        console.log(e)
        })
        })
        })
        })
        }       
        const sendStickerFromUrl = async(to, url) => {
        var names = Date.now() / 10000;
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
        };
        download(url, './stik' + names + '.png', async function () {
        let filess = './stik' + names + '.png'
        let asw = './stik' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
        let media = fs.readFileSync(asw)
        design.sendMessage(to, media, MessageType.sticker,{quoted:mek})
        fs.unlinkSync(filess)
        fs.unlinkSync(asw)
        });
        });
        }
        const sendWebp = async(to, url) => {
        var names = Date.now() / 10000;
        var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
        };
        download(url, './sticker' + names + '.png', async function () {
        let filess = './sticker' + names + '.png'
        let asw = './sticker' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
        fs.unlinkSync(filess)
        if (err) return reply(`${err}`)
        exec(`webpmux -set exif ./mediadata/data.exif ${asw} -o ${asw}`, async (error) => {
        if (error) return reply(`${error}`)
        design.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:false, quoted:mek})
        fs.unlinkSync(asw)
        });
        });
        });
        }
        
        			
			//function rank 
			const levelRole = getLevelingLevel(sender)
   	     var role = 'bronz'
   	     if (levelRole <= 3) {
   	         role = 'Copper'
   	     } else if (levelRole <= 5) {
   	         role = 'Iron'
   	     } else if (levelRole <= 7) {
   	         role = 'Silver'
   	     } else if (levelRole <= 10) {
   	         role = 'Gold'
   	     } else if (levelRole <= 12) {
   	         role = 'Platinum'
   	     } else if (levelRole <= 15) {
   	         role = 'Mithril'
   	     } else if (levelRole <= 18) {
   	         role = 'Orichalcum'
   	     } else if (levelRole <= 25) {
   	         role = 'Adamantite'
   	     } else if (levelRole <= 45) {
   	         role = 'Good In Game'
   	     }

	        //function leveling
            if (isGroup && isPetualang) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                var getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                addLevelingLevel(sender, 1)              
                addBalance(sender, 300, balance)
                givegame(sender, 5, glimit)
                giveLimit(sender, 10, limit)
                //var lvlup = monospace(`╭───「 Level Up 」\n│\n├ • Nama : ${pushname}\n├ • Rank : ${role}\n├ • Status : ${elit}\n├ • Xp : ${getLevelingXp(sender)}\n├ • Level : ${getLevelingLevel(sender)}\n│\n╰───「 Omedeto 」`)
                reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
		        var lvlup = `*🎊Level up player*

*🗯️STATUS PLAYER*
*📍Username :* ${pushname}
*🎖️Role :* ${role}
*🌿Level :* ${getLevelingLevel(sender)}
*🍁Total Xp :* ${getLevelingXp(sender)}
*🌱Progres :* ${getLevelingXp(sender)}/${reqXp}
•━━━━━━━━━━━━━━━━━━━━•
*🎁HADIAH LEVEL UP*
*💰Uang :* 300
*⚡Limit :* 10
*💥Glimit:* 5`
		        but = [{ buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
             sendButton(from, lvlup, 'Level Up', but)
               }
            } catch (err) {
                console.error(err)
            }
        }  
        


//game        
var _0x6ff743=_0x5d8a;(function(_0x1c0ce3,_0x445b03){var _0x497f3b=_0x5d8a,_0x5f35e3=_0x1c0ce3();while(!![]){try{var _0x73f6c8=-parseInt(_0x497f3b(0x9e))/0x1*(-parseInt(_0x497f3b(0x93))/0x2)+-parseInt(_0x497f3b(0x91))/0x3*(-parseInt(_0x497f3b(0xa7))/0x4)+-parseInt(_0x497f3b(0xa9))/0x5+-parseInt(_0x497f3b(0x9a))/0x6*(-parseInt(_0x497f3b(0xa8))/0x7)+parseInt(_0x497f3b(0xab))/0x8*(parseInt(_0x497f3b(0xa4))/0x9)+parseInt(_0x497f3b(0xaa))/0xa+-parseInt(_0x497f3b(0x9b))/0xb*(parseInt(_0x497f3b(0xa6))/0xc);if(_0x73f6c8===_0x445b03)break;else _0x5f35e3['push'](_0x5f35e3['shift']());}catch(_0x157edb){_0x5f35e3['push'](_0x5f35e3['shift']());}}}(_0x54ec,0x56016),game['cekWaktuFam'](design,family100));if(tebakgambar[_0x6ff743(0xa5)](sender[_0x6ff743(0x9c)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebakgambar[sender['split']('@')[0x0]];if(budy['toLowerCase']()==jawaban){var http=randomNomor(0x64);addBalance(sender,http,balance),tc=monospace(_0x6ff743(0x97)+http+_0x6ff743(0xa0)),but=[{'buttonId':_0x6ff743(0x98),'buttonText':{'displayText':_0x6ff743(0x9d)},'type':0x1}],sendButton(from,tc,'Game',but),delete tebakgambar[sender[_0x6ff743(0x9c)]('@')[0x0]],fs['writeFileSync']('./fake/data/tebakgambar.json',JSON[_0x6ff743(0x96)](tebakgambar));}else reply('Jawaban\x20Salah!');}function _0x54ec(){var _0x353bd9=['3NqqZOv','!tebakkata','18946JaQcSd','./fake/data/tebakanime.json','toLowerCase','stringify','🎮\x20Tebak\x20Gambar\x20\x20🎮\x0a\x0a•\x20Jawaban\x20Benar🎉\x0a•\x20Mendapatkan\x20:\x20$','!tebakgambar','🎮\x20Tebak\x20Anime\x20\x20🎮\x0a\x0a•\x20Jawaban\x20Benar🎉\x0a•\x20Mendapatkan\x20:\x20$','571284itrKRq','22wYIioZ','split','main\x20lagi','9hnBGeQ','Jawaban\x20salah!','\x20💰\x0a\x0aIngin\x20bermain\x20lagi?\x20klik\x20aja','!caklontong','writeFileSync','Game','585DBxoiS','hasOwnProperty','2772552yBqOEI','692596PYBzQK','21fKGdzF','1378725grYUfd','3209720PPNefk','27704KiQWji','!tebakanime','🎮\x20Cak\x20Lontong\x20🎮\x0a\x0a•\x20Jawaban\x20Benar🎉\x0a•\x20Mendapatkan\x20:\x20$'];_0x54ec=function(){return _0x353bd9;};return _0x54ec();}if(tebakanime[_0x6ff743(0xa5)](sender[_0x6ff743(0x9c)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebakanime[sender[_0x6ff743(0x9c)]('@')[0x0]];if(budy[_0x6ff743(0x95)]()==jawaban){var http=randomNomor(0x64);addBalance(sender,http,balance),tc=monospace(_0x6ff743(0x99)+http+_0x6ff743(0xa0)),but=[{'buttonId':_0x6ff743(0xac),'buttonText':{'displayText':_0x6ff743(0x9d)},'type':0x1}],sendButton(from,tc,_0x6ff743(0xa3),but),delete tebakanime[sender[_0x6ff743(0x9c)]('@')[0x0]],fs[_0x6ff743(0xa2)](_0x6ff743(0x94),JSON['stringify'](tebakanime));}else reply('Jawaban\x20salah!');}function _0x5d8a(_0x26959a,_0x16eb71){var _0x54ec25=_0x54ec();return _0x5d8a=function(_0x5d8a61,_0x44e3fc){_0x5d8a61=_0x5d8a61-0x91;var _0xbaaeed=_0x54ec25[_0x5d8a61];return _0xbaaeed;},_0x5d8a(_0x26959a,_0x16eb71);}if(tebakkata[_0x6ff743(0xa5)](sender[_0x6ff743(0x9c)]('@')[0x0])&&!isCmd){kuis=!![],jawaban=tebakkata[sender[_0x6ff743(0x9c)]('@')[0x0]];if(budy[_0x6ff743(0x95)]()==jawaban){var http=randomNomor(0x64);addBalance(sender,http,balance),tc=monospace('🎮\x20Tebak\x20Kata\x20🎮\x0a\x0a•\x20Jawaban\x20Benar🎉\x0a•\x20Mendapatkan\x20:\x20$'+http+'\x20💰\x0a\x0aIngin\x20bermain\x20lagi?\x20klik\x20aja'),but=[{'buttonId':_0x6ff743(0x92),'buttonText':{'displayText':_0x6ff743(0x9d)},'type':0x1}],sendButton(from,tc,_0x6ff743(0xa3),but),delete tebakkata[sender['split']('@')[0x0]],fs['writeFileSync']('./fake/data/tebakata.json',JSON['stringify'](tebakkata));}else reply(_0x6ff743(0x9f));}if(caklontong['hasOwnProperty'](sender['split']('@')[0x0])&&!isCmd){kuis=!![],jawaban=caklontong[sender['split']('@')[0x0]];if(budy[_0x6ff743(0x95)]()==jawaban){var http=randomNomor(0x64);addBalance(sender,http,balance),tc=monospace(_0x6ff743(0xad)+http+_0x6ff743(0xa0)),but=[{'buttonId':_0x6ff743(0xa1),'buttonText':{'displayText':_0x6ff743(0x9d)},'type':0x1}],sendButton(from,tc,'Game',but),delete caklontong[sender[_0x6ff743(0x9c)]('@')[0x0]],fs['writeFileSync']('./fake/data/caklontong.json',JSON[_0x6ff743(0x96)](caklontong));}else reply('Jawaban\x20salah!');}
 
if (game.isfam(from, family100)) {
  var anjuy = game.getjawaban100(from, family100)
  for (let i of anjuy){
 if (budy.toLowerCase().includes(i)){
 var http = randomNomor(100)
 addBalance(sender, http, balance) 
await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${http}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
var anug = anjuy.indexOf(i)
anjuy.splice(anug, 1)
 }
  }
  if (anjuy.length < 1){
 design.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
 family100.splice(game.getfamposi(from, family100), 1)
  }
}
    
//--- Total command
        const cmdadd = () => {
	    hit[0].totalcmd += 1
    	fs.writeFileSync('./fake/data/totalcmd.json', JSON.stringify(hit))
        }
        if (isCmd) cmdadd()
        const totalhit = JSON.parse(fs.readFileSync('./fake/data/totalcmd.json'))[0].totalcmd
        
// ---- Antilink 
const isFakebotz = checkRegisteredUser(sender)
        const linkwa = 'https://chat.whatsapp.com/'
		if (budy.includes(`${linkwa}`)){
		if (!isGroup) return
		if (!isAnti) return
        if (!isBotGroupAdmins) return reply('Untung Gue bukan admin, kalo iya gua kick lu')
        linkgc = await design.groupInviteCode (from)
        if (budy.includes(`${linkwa}${linkgc}`)) return reply('Untung Link group ini')
		if (isGroupAdmins) return reply(`Hmm mantap min`)
		design.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('byee')
		}, 1100)
		setTimeout( () => {
		design.groupRemove(from, [Kick]).catch((e) => {console.log(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`Antilink menyala & link Group Terdeteksi maaf *${pushname}* anda akan di kick`)
		}, 0)
     	}

		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return 
		}            
		
        if (isGroup && isBadWord) {
        if (bad.includes(messagesC)) {
        if (!isGroupAdmins) {
        return reply("JAGA UCAPAN DONG!! 😠")
        .then(() => design.groupRemove(from, sender))
        .then(() => {
        design.sendMessage(from, `*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!`, text ,{quoted: mek})
        }).catch(() => design.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
        } else {
        return reply( "Tolong Jaga Ucapan Min 😇")
        }
        }
        }
//funtion limited by febri
const isHealt = (sender) =>{ 
let position = false
for (let i of _healt) {
if (i.id === sender) {
let healts = i.healt
if (healts >= healtawal ) {
position = true
design.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
return true
} else {
_healt
position = true
return false
 }
}
}
if (position === false) {
const obj = { id: sender, healt: 1 }
_healt.push(obj)
fs.writeFileSync('./fake/rpg/healt.json',JSON.stringify(_healt))
return false
}
}
const getHeal = (sender) => {
let position = false
Object.keys(_healt).forEach ((i) => {
if (_healt[position].id === sender) {
position = i
}
})
if (position !== false) {
   return _healt[position].healt
}
}

const healtAdd = (sender) => {
let position = false
Object.keys(_healt).forEach((i) => {
   if (_healt[i].id == sender) {
position = i
   }
})
if (position !== false) {
   _healt[position].healt += 10
   fs.writeFileSync('./fake/rpg/healt.json', JSON.stringify(_healt))
}
}
const bayarHealt = (sender, amount) => {
let position = false
Object.keys(_healt).forEach((i) => {
if (_healt[i].id === sender) {
position = i
}
})
if (position !== false) {
_healt[position].healt -= amount
if (_healt[position].healt >= 0) return reply('healt kmu dh penuh')
fs.writeFileSync('./fake/rpg/healt.json', JSON.stringify(_healt))
}
}
//function check healt by febri
const checkHealt = (sender) => {
let found = false
for (let lmt of _healt) {
if (lmt.id === sender) {
const healthCounts = healtawal - lmt.healt
if (healthCounts <= 0) return design.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
if (!isPetualang) return reply(mess.only.player)
 reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pp = monospace(`🌱 Profile User 🌱
✾ Nama : ${pushname}
✾ Rank : ${role}
✾ Status : ${elit}
✾ Uang : $${(getBalance(sender, balance))}
✾ Xp : ${getLevelingXp(sender)}/${reqXp}
✾ Level : ${getLevelingLevel(sender)}
✾ Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}
 
📪 Inventory 📪
✾ Uang : $${(getBalance(sender, balance))}💰
✾ Emas : ${getEmas(sender)}🪙
✾ Besi : ${getBesi(sender)}⛓️
✾ Berlian : ${getDm(sender)}💎
✾ Ikan : ${getFish(sender)}🎣`)
but = [{ buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, pp, `Profile ${pushname}`, but)
found = true
}
}

if (found === false) {
let obj = { id: sender, healt: 1 }
_healt.push(obj)
fs.writeFileSync('./fake/rpg/healt.json', JSON.stringify(_healt))
design.sendMessage(from, `${healthCounts}`, text, { quoted : mek})
}
}
        var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
        var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎']
        var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']        
        var petnya = ['😾','🐺','🦊','🐶','🐰']
        var makan = ['🌭','🌮','🌯','🍙','🍝','🍕','🍘','🍟','🍞','🍖','🍡']
        var buahan = ['🍇','🍎','🍏','🍐','🍒','🍊','🍋','🍑','🍓']
                    
        const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍋 : 🍋 : 🍋 Win👑', 
        '🔔 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🍒 : 🍒 : 🍒 Win👑',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🔔 : 🔔 : 🔔 Win👑',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',    //Mau Ambil? Add Wm Lah Tod
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔', 
        '🍊 : 🍒 : 🍐', 
        '🍒 : 🔔 : 🍊', 
        '🍇 : 🍇 : 🍇 Win👑', 
        '🍊 : 🍋 : 🔔', 
        '🔔 : 🍒 : 🍐', 
        '🔔 : 🍒 : 🍊', 
        '🍊 : 🍋 : 🔔',	
        '🍐 : 🍒 : 🍋', 
        '🍐 : 🍐 : 🍐 Win👑', 
        '🍊 : 🍒 : 🍒', 
        '🔔 : 🔔 : 🍇', 
        '🍌 : 🍒 : 🔔', 
        '🍐 : 🔔 : 🔔', 
        '🍊 : 🍋 : 🍒', 
        '🍋 : 🍋 : 🍌', 
        '🔔 : 🔔 : 🍇', 
        '🔔 : 🍐 : 🍇', 
        '🍌 : 🍌 : 🍌 Win👑']
        
//━━━━━━━━━━━━━━━[ GAK USAH DI UBAH ]━━━━━━━━━━━━━━━\\       
		// auto read gc
        var ampun = await design.chats.array.filter(v => v.jid.endsWith('g.us'))
        ampun.map( async ({ jid }) => {
        if (readGc === false) return
        await design.chatRead(jid)
        })

        // auto read pc
        var chatss = await design.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
        chatss.map( async ({ jid }) => {
        if (readPc === false) return
        await design.chatRead(jid)
        })

        // auto vn && ketik
        if (autovn) {
     	if (autovn === false) return
        await design.updatePresence(from, Presence.recording)
        } else if (autoketik) {
	    if (autoketik === false) return
        await design.updatePresence(from, Presence.composing)
        }
		
	    colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
	    const isSimi = simin.includes(from)
	    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
	    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
	    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	    const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isTagedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        // console logs pc
        if (!isGroup && isCmd) console.log(color('[','white'), color('➳','lime'), color(']','white'), color('NAMA','red'), color(pushname,'yellow'), color('MENGGUNAKAN','white'), color('FITUR :','red'), color(command, 'lime'), 'args :', color(args.length))
       
        // console logs gc
        if (isCmd && isGroup) console.log(color('[','white'), color('➳','lime'), color(']','white'), color('NAMA','red'), color(pushname,'yellow'), color('MENGGUNAKAN','white'), color('FITUR :','red'), color(command, 'lime'), color(`Di Group ${groupName}`,'yellow'), 'args :', color(args.length))

        // console logs 
        if (isCmd) console.log(color('➳ Bot Message :','white'), color(levelRole,'yellow'), color(pushname,'yellow'))
if (!command) {console.log(color('➳ Bot Message', 'white'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
		
//━━━━━━━━━━━━━━━[ WELCOME TO MENU ]━━━━━━━━━━━━━━━\\  

   
switch(nopref) {


case 'tes':
reply('Naoo?')              
break
case 'pasword?':
reply('WAJIB SUBSCRIB!!\n\n\n\n\n\n\n\n\n\n\ndesignbotv2')
break

}
          
switch (command) {

case 'uglybastard': case 'maid': case 'doujin': 
case 'yaoi': case 'ass': case 'bdsm': case 'masturbation': case 'femdom': 
case 'hentai': case 'wp-nsfw': case 'panties': case 'pussy': case 'thighs': 
if (!isOwner && !isPremium) return sendButMessage(from, Prem1, Prem2, Prem3, { quoted: troli}) 
     if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
if (isBanned) return reply('Kamu Sudah Di banned!')
          anu = await fetchJson (`https://servant-of-evil.herokuapp.com/api/nsfw/${command}?apikey=${Evilkey}`)
          buffer = await getBuffer (anu.result.url)
    	  var bb = await design.prepareMessage(from, buffer, image,)
          var buttonnsss = [{buttonId:`${prefix + command}`,buttonText: {displayText: '⚠️ 𝗡𝗘𝗫𝗧️'}, type: 1}]
          var ButtonssMessages = {
          contentText: ` ${command} Success By : ${BotName} `,
          buttons: buttonnsss,
          footerText: `*Klik Next Untuk Melanjutkan*`,
          headerType: 4,
          imageMessage: bb.message.imageMessage
          }
          await design.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : mek})
          limitAdd(sender, limit)
          break
          
case 'me':  
if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
if (isBanned) return reply(mess.ban)
if (isMenu) return reply(from, menu1, { quoted: troli})
try {
					ppx = await design.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppx = imgtobot
					}
					img = await getBuffer(ppx)

design.sendMessage(from, img, image, { quoted: troli })
break




case 'vr':
if (isFakebotz) return reply('Kamu sudah terdaftar di dalam database')
const serialUser = createSerial(14)
 try {
ppimg = await design.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
veri = sender
_user.push(sender)
fs.writeFileSync('./fake/fake.json', JSON.stringify(_user))
addRegisteredUser(sender, serialUser)
verif = `┌━━━━━━━━━━━━┈ ⳹
│ *「 VERIFICATION SUKSES 」*
│ *Terimakasih Sudah*
│ *Mendaftarkan Diri*
│ *Dalam Database*
└┬────────────┈ ⳹
┌┤◦➛ *Nama :* ${pushname}
││◦➛ *Nomor :* @${sender.split('@')[0]}
││◦➛ *SN :* ${serialUser}
││◦➛ *Total Pengguna :* ${_user.length} Orang
││◦➛ *Status :* 🔔 Terverifikasi
│└────────────┈ ⳹
│ *Silahkan Ketik ${prefix}rules*
│ *Untuk Melanjutkan Pengguna*
└━━━━━━━━━━━━┈ ⳹`
ok = `${BotName}`
img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_user.length}&seri=${serialUser}&pp=${ppimg}&bg=https://upload.cc/i4/IO3vM.jpg`)
but = [{buttonId: `${prefix}menu`,buttonText:{displayText: `Menu`},type:1}]
sendButImage(from, verif, ok, img, but)
break
//「 SUKSES JOIN RPG 」\n「 PROFILE 」\n • Nama : ${name}\n • Level : ${getLevelingLevel(sender)}\n • Status : ${elit}\n • Xp :  ${getLevelingXp(sender)}/${reqXp}\n\n「 RPG GAME 」`
  
case 'joinrpg':
if (!isGroup) return reply(mess.only.group)  
if (isPetualang) return reply('Kamu sudah menjadi petualang')
const serialUser2 = createSerial(14)
 try {
ppimg = await design.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

_petualang.push(sender)
fs.writeFileSync('./lib/data/inventori.json', JSON.stringify(_petualang))
verif = `┌━━━━━━━━━━━━┈ ⳹
│ *「 SUKSES JOIN RPG 」*
└┬────────────┈ ⳹
┌┤◦➛ *Nama :* ${pushname}
││◦➛ *Level :* ${getLevelingLevel(sender)}
││◦➛ *Status :* ${elit}
││◦➛ *Xp :* ${getLevelingXp(sender)}}
││◦➛ *Seri :* ${serialUser2}
│└────────────┈ ⳹
│ 
│*「 RPG GAME 」*
└━━━━━━━━━━━━┈ ⳹`
ok = `${BotName}`
img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_petualang.length}&seri=${serialUser2}&pp=${ppimg}&bg=https://upload.cc/i4/iw92F.jpg`)
but = [{buttonId: `${prefix}rpgmenu`,buttonText:{displayText: `RPG MENU`},type:1}]
sendButImage(from, verif, ok, img, but)
addInventori(sender)
addLevelingId(sender)
break					
         																									
case 'ban':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				bnnd = body.slice(5)
				ban.push(`${args[0].replace('@','')}@s.whatsapp.net`)
				fs.writeFileSync('./fake/data/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
case 'unban':  
					
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
					delp = body.slice(7)
					ban.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./fake/data/banned.json', JSON.stringify(ban))
					reply(`Berhasil Menghapus wa.me/${delp} dari banned`)
					break
case 'listban':
		case 'banlist'://By M4N1K
					teks = '*List Ban:*\n\n'
					for (let manikgans of ban) {
						teks += `- ${manikgans}\n`
					}
					teks += `\n*Total : ${ban.length}*`
					design.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": ban } })
					break
                   
        //--------------------------------------------------------------------------------------------\\  	               	
    case "setmenu":
if (!mek.key.fromMe && !isOwner) return  reply(mess.only.owner)    
if (!q) return reply(`Masukan opts :\n
loc
pdf`)
if (q == "loc") {
modelmenu = "loc"
reply("Done change menu to "+q)
} else if (q == "fyt") {
modelmenu = "fyt"
reply("Done change menu to "+q)
} else if (q == "catalog") {
modelmenu = "catalog"
reply("Done change menu to "+q)
} else {
reply(`Masukan opts :\n
loc
pdf`)
}
break


case 'sc': case 'sc':
  var { allesce } = require('./fake/sewa')   
Febriansyah(allesce())
break

   
    case 'ghstalk': 
    case 'githubstalk': 
     if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          {
          if (args.length < 1) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
          reply(mess.wait)
          damta = await fetchJson(`https://api.github.com/users/${v}`)    
          let txt = `*GITHUB STALKING*

*📍Data Berhasil Didapatkan!*
•️ Username : ${damta.login}
• Name : ${damta.name}
• Followers : ${damta.followers}
• Following : ${damta.following}
• Public Gists : ${damta.public_gists}
• Public Repos : ${damta.public_repos}
• Twitter : ${damta.twitter_username}
• Email : ${damta.email}
• Location : ${damta.location}
• Blog : ${damta.blog}
• Link : ${damta.html_url}
• Bio : ${damta.bio}
• Created : ${damta.created_at}
• Last Updated : ${damta.updated_at}`
          pp = await getBuffer(damta.avatar_url)
          but = [{ buttonId: `!allmenu`, buttonText: { displayText: 'M E N U' }, type: 1 }]
          sendButLocation(from, txt, 'Github Stalk@^1.2.3', pp, but, {quoted: mek}).catch((err) => {                         
		  reply('Data tidak ditemukan')
          })    
          }       
          break            
                     
       case 'dog':  
        if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   design.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
          break
                   break
       case 'panda':  
        if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   design.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
                   break
       case 'redpanda':  
        if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   design.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
                   break
       case 'bird':  
        if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/bird`)
                   anu1 = await getBuffer(anu.link)
                   design.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
                   break
      case 'koala':  
       if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   design.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
                   break
       case 'meme':  
 if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
                   anu = await fetchJson(`https://some-random-api.ml/meme`)
                   anu1 = await getBuffer(anu.image)
                   design.sendMessage(from, anu1, image, {caption: `\`\`\`[ ✓ ]\`\`\` Sukses`, quoted: mek}).catch(e => {
          reply(mess.error.sc)          
          })          
                   break



    case 'autoread':
          if (args.length < 1) return reply(`Example:\n${prefix}autoread gc/pc on`)
          if (args[0] === "gc") {
          if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
          if (args[1] === "on") {
          if (readGc === true) return
          readGc = true
          reply(`Succes mengaktifkan autoread group`)
          } else if (args[1] === "off") {
          if (readGc === false) return
          readGc = false
          reply(`Succes mematikan autoread group`)
          } else {
          reply(`Pilih on atau off`)
          }
          } else if (args[0] === "pc") {
          if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
          if (args[1] === "on") {
          if (readPc === true) return
          readPc = true
          reply(`Succes mengaktifkan autoread pc`)
          } else if (args[1] === "off") {
          if (readPc === false) return
          readPc = false
          reply(`Succes mematikan autoread pc`)
          } else {
          reply(`Pilih on atau off`)
          }
          } else {
          reply(`*List Auto Read*\n•> gc\n•> pc`)
          }
          break


    case 'autoketik':
          if (!isOwner && !mek.key.fromMe) return
          if (args.length < 1) return reply('Pilih on atau off')
          if (args[0] === "on") {
          if (autoketik === true) return
          autoketik = true
          reply(`Succes mengaktifkan autoketik`)
          } else if (args[0] === "off") {
          if (autoketik === false) return
          autoketik = false
          reply(`Succes mematikan autoketik`)
          } else {
          reply(`Pilih on atau off`)
          }
          break
    case 'autovn':
          if (!isOwner && !mek.key.fromMe) return
          if (args.length < 1) return reply('Pilih on atau off')
          if (args[0] === "on") {
          if (autovn === true) return
          autovn = true
          reply(`Succes mengaktifkan autovn`)
          } else if (args[0] === "off") {
          if (autovn === false) return
          autovn = false
          reply(`Succes mematikan autovn`)
          } else {
          reply(`Pilih on atau off`)
          }           
          break

    case 'bugreportadmin':
          if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
          reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
          design.sendMessage(`${ownerNumber}@s.whatsapp.net`,`*Bug Report:* ${v}`, text)
          break 
    case 'bugreportdev':
          if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`)       
          reply('Terima Kasih Telah Melaporkan Bug Pada Devoloper, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
          design.sendMessage('6285849261085@s.whatsapp.net',`*Bug Report:* ${v}\ndari http://wa.me/${sender.split('@')[0]}`, text)
          break
            
case 'profile': case 'rpgmenu':
 if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
if (!isGroup) return reply(mess.only.group)
if (!isPetualang) return reply(mess.only.player)
 reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pp = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Uang : $${(getBalance(sender, balance))}
 • Xp : ${getLevelingXp(sender)}/${reqXp}
 • Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Uang : $${(getBalance(sender, balance))}
 • Emas : ${getEmas(sender)}
 • Besi : ${getBesi(sender)}
 • Ikan : ${getFish(sender)}
 • Berlian : ${getDm(sender)}

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 • joinrpg
 • quest 
 • mining
 • mancing
 • luckyday
 • adventure
 • myinventori
 • topleaderboard
 
⚔️ 𝗙𝗮𝗿𝗺𝗶𝗻𝗴 𝗥𝗣𝗚
 • killslime
 • killgoblin
 • killdevil
 • killbehemoth
 • killdemond
 • killdemondking 
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 • sellikan
 • sellbesi
 • sellemas
 • selldiamond`)
 but = [
          { buttonId: `!inventori`, buttonText: { displayText: 'Inventori' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', mrpg, but, {quoted: mek})
          break
   
    case 'mybag':
    case 'cekinven':
    case 'inventori':
    case 'myinventori':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
          done = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n • Nama : ${pushname}\n • Rank : ${role}\n • Status : ${elit}\n • Xp : ${getLevelingXp(sender)}/${reqXp}\n • Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n • Emas : ${getEmas(sender)}🪙\n • Uang : $${(getBalance(sender, balance))}💰\n • Besi : ${getBesi(sender)}⛓️\n • Berlian : ${getDm(sender)}💎\n • Ikan : ${getFish(sender)}🎣`)
          but = [{ buttonId: `!adventure`, buttonText: { displayText: 'Adventure' }, type: 1 }]
          sendButton(from, done, 'Inventori User', but)
          break

case 'kues': case 'quest': case 'misi':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          var lordpebri = design.prepareMessageFromContent(from, {
                        "listMessage": {
						"title": "Hallo kak, Aku design!!\nAku adalah admin quest di group ini! \nSilahkan pilih quest yang cocok dengan kakak!\nGabung ke petualang pro untuk membuka quest mode demon",
						"description": "\n*Jadi petualangan pro untuk dapatkan hadiah sepesial>_<*",
						"buttonText": "Silahkan Pilih Misinya Kak!",
						"footerText": "@Quest game",
						"listType": "SINGLE_SELECT",
						"sections": [
							{
								"title": "Misi Ke-1",
								"rows": [
									{
										"title": "Membunuh Slime",
										"description": "Berburu slime untuk mendapatkan hadiah",
										"rowId": "!slime"
									}
								]
							},
							{
								"title": "Misi Ke-2", 
								"rows": [
									{
										"title": "Membunuh Goblin",
										"description": "Membunuh goblin untuk mendapatkan hadiah",
										"rowId": "!goblin"
									}
								]
							},
							{
								"title": "Misi Ke-3", 
								"rows": [
									{
										"title": "Membunuh Monster Evil Eye",
										"description": "Membunuh monster untuk mendapatkan hadiah",
										"rowId": "!devil"
									}
								]
							},
							{
								"title": "Misi Ke-4",
								"rows": [
									{
										"title": "Membunuh Monster Behemoth",
										"description": "Membunuh monster untuk mendapatkan hadiah",
										"rowId": "!behemoth"
									}
								]
							},
                            {
								"title": "Misi Ke-5",
								"rows": [
									{
										"title": "Membunuh Demon Four Fiends | VIP",
										"description": "Membunuh demon untuk mendapatkan hadiah",
										"rowId": "!demon"
									}
								]
							},
                            {
								"title": "Misi Ke-6",
								"rows": [
									{
										"title": "Membunuh Demon King | VIP",
										"description": "Membunuh demon king untuk mendapatkan hadiah spesial",
										"rowId": "!demonking"
                                  }
								]
							}
						]
					}
				},
			{}
	      )
	      design.relayWAMessage(lordpebri, {waitForAck: true})     
          break
    case 'slime': case 'killslime':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 400)
          addLevelingXp(sender, ez)
          a = randomNomor(55)
          b = randomNomor(400)
          c = randomNomor(80)
          d = randomNomor(3)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗦𝗹𝗶𝗺𝗲️\n\n🎁 Hadiah Membunuh Slime\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', slime, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break      
    case 'goblin': case 'killgoblin':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 500)
          addLevelingXp(sender, ez)
          a = randomNomor(65)
          b = randomNomor(500)
          c = randomNomor(90)
          d = randomNomor(5)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗚𝗼𝗯𝗹𝗶𝗻\n\n🎁 Hadiah Membunuh Goblin\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', goblin, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break                      
    case 'devil': case 'killdevil':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 600)
          addLevelingXp(sender, ez)
          a = randomNomor(70)
          b = randomNomor(600)
          c = randomNomor(95)
          d = randomNomor(6)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝘃𝗶𝗹️\n\n🎁 Hadiah Membunuh Devil\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', devil, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break
    case 'behemoth': case 'killbehemoth':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 700)
          addLevelingXp(sender, ez)
          a = randomNomor(75)
          b = randomNomor(600)
          c = randomNomor(100)
          d = randomNomor(7)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗕𝗲𝗵𝗲𝗺𝗼𝘁𝗵️\n\n🎁 Hadiah Membunuh Behemoth\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3',behemoth, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break   
    case 'demon': case 'killdemond': 
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
	      if (!isGroup) return reply(mess.only.group)          
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
		  if (!isPremium) return reply('Upss sepertinya kakak bukan petualang pro!\nchat ownet untuk menjadi petualang pro')
          ez = Math.ceil(Math.random() * 850)
          addLevelingXp(sender, ez)
          a = randomNomor(90)
          b = randomNomor(900)
          c = randomNomor(120)
          d = randomNomor(10)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          addDm(sender, d)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻️\n\n🎁 Hadiah Membunuh Demond\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', demon, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break  
    case 'demonking': case 'killdemondking':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
	      if (!isGroup) return reply(mess.only.group)    
          if (!isOwner) return reply ('Hanya Untuk GM')    
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
		  if (!isPetualang) return reply('Kamu sudah menjadi petualang')          
          ez = Math.ceil(Math.random() * 1000)
          addLevelingXp(sender, ez)
          addLevelingXp(sender, ez)
          addBalance(sender, 1999, balance)
          addEmas(sender, 99)          
          addBesi(sender, 99)
          addDm(sender, 99)
          pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻𝗞𝗶𝗻𝗴\n\n🎁 Hadiah Membunuh DemonKing\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
          but = [{ buttonId: `!inventori`, buttonText: { displayText: 'cek inventory' }, type: 1 }]
          sendButLocation(from, pp, 'Rpg Game@^1.2.3', demonking, but, {quoted: mek})                  
          gameAdd(sender, glimit) 
          break                    
    case 'leaderboard':
	case 'lb':
	      if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
	      if (!isGroup) return reply(mess.only.group)
	      _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
          let leaderboardlvl = ' > 𝗧𝗢𝗣 𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗 <\n\n'
          let nom = 0
          try {
          for (let i = 0; i < 10; i++) {
          nom++
          leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n • *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
          }
          await reply(leaderboardlvl)
          } catch (err) {
          console.error(err)
          await reply(`minimal 10 user untuk bisa mengakses database`)
          }
          break
    case 'sellikan':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 5 * jmlh
          if (getFish(sender) < jmlh) return reply(`Ikan Kamu Tidak Cukup`)
          sellFish(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Ikan : 5\n • Status : Sukses\n • Sisa Ikan : ${getFish(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButton(from, capti, 'sellikan', but)          
          break
    case 'sellbesi':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 10 * jmlh
          if (getBesi(sender) < jmlh) return reply(`Besi Kamu Tidak Cukup`)
          sellBesi(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Besi : 10\n • Status : Sukses\n • Sisa Besi : ${getBesi(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButton(from, capti, 'sellikan', but)                    
          break          
    case 'sellemas':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 25 * jmlh
          if (getEmas(sender) < jmlh) return reply(`Emas Kamu Tidak Cukup`)
          sellEmas(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Emas : 25\n • Status : Sukses\n • Sisa Emas : ${getEmas(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButton(from, capti, 'sellikan', but)                    
          break 
    case 'selldiamond':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          ttl = body.slice(13)
          var etoo = 75 * ttl
          if (getDm(sender) < ttl) return reply(`Besi Kamu Tidak Cukup`)
          sellDm(sender, ttl)
          addBalance(sender, etoo, balance) 
          capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Dm : 75\n • Status : Sukses\n • Sisa Diamond : ${getDm(sender)}\n • Hasil Penjualan : $${etoo}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButton(from, capti, 'sellikan', but)                    
          break                                      
    case 'mancing':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)	
          ikannya = ikan[Math.floor(Math.random() * ikan.length)]
	      xp = Math.ceil(Math.random() * 350)          
	      coin = randomNomor(50)	    
	      ditangkap = Math.ceil(Math.random() * 50)
	      cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
	      setTimeout( () => {
	      caption = monospace(`「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${coin}\n • EXP : ${xp}Xp`)
          but = [
          { buttonId: '!mancing', buttonText: { displayText: 'Mancing lagi' }, type: 1 },
          { buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }
           ]
          sendButLocation(from, caption, 'Memancing', cing, but, {quoted: mek})      
          }, 6000)
          setTimeout( () => {
		  design.sendMessage(from, 'Berhasil Mendapatkan Ikan. . .', text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  design.sendMessage(from, '🎣Meanarik kail. . .', text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  design.sendMessage(from, '🎣Mulai memancing. . .', text) 
		  }, 1500) // 1000 = 1s,
		  addFish(sender, ditangkap)
		  addLevelingXp(sender, xp)
		  addBalance(sender, coin, balance) 
          limitAdd(sender, limit)         
	      break
    case 'adventure':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
          if (!isGroup) return reply(mess.only.group)
          if (!isPetualang) return reply(mess.only.player)
          ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
	      const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
          const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
          anu = fs.readFileSync('./fake/rpg/dungeon.js');
          const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
          jsonData = JSON.parse(anu);
	      randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
	      hasm = await getBuffer(randKey.result)  
	      const adven = Math.ceil(Math.random() * 1000)          
	      const money = Math.ceil(Math.random() * 300)					      	      
	      setTimeout( () => {		
          caption = monospace(`「 DEATH 」\n\n • Tempat  ${ad}\n • MONEY : $${money}\n • EXP : ${adven}Xp`)
          but = [
          { buttonId: `!myinventori`, buttonText: { displayText: 'Inventori' }, type: 1 }]
          sendButLocation(from, caption, 'Memancing', hasm, but, {quoted: mek})   
          }, 7000)
          setTimeout( () => {
		  design.sendMessage(from, `Awass`, text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  design.sendMessage(from, `Tiba tiba ada ${sesuatu}`, text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  design.sendMessage(from, `${pushname} sedang bertualang`, text) 
		  }, 1500) // 1000 = 1s,
		  addLevelingXp(sender, adven)
		  addBalance(sender, money, balance) 
          limitAdd(sender, limit)         
          break
   	case 'mining':   
   	      if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
   	      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
   	      if (!isGroup) return reply(mess.only.group)                         
          if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)                              
          if (!isPetualang) return reply(mess.only.player)
          pp = randomNomor(75)
          emas = randomNomor(15)
          dm = randomNomor(3)
          besi = randomNomor(50)
          done = monospace(`Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`)
          addBalance(sender, pp, balance)          
          addBesi(sender, besi)
          addEmas(sender, emas)
          addDm(sender, dm)
          mining = ('Waitt sedang menguli . . .')
		  setTimeout( () => {		//case by pebri
		  but = [{ buttonId: `!mining`, buttonText: { displayText: 'Mining again' }, type: 1 }]
          sendButton(from, done, 'Mining', but)
		  }, 9000) // 1000 = 1s,
		  setTimeout( () => {
		  design.sendMessage(from, '🚧 selesai menguli. . .🪙👷', text) 
		  }, 7000) // 1000 = 1s,
	      setTimeout( () => {
		  design.sendMessage(from, '🚧 menemukan emas. . .⚒️🏔️️️', text) 
		  }, 4000) // 1000 = 1s,
		  setTimeout( () => {
		  design.sendMessage(from, '🚧 mulai menambang. . .⚒️🏔️️', text) 
		  }, 1500) // 1000 = 1s,
		  setTimeout( () => {
		  design.sendMessage(from, mining, text, {quoted: mek}) 
		  }, 0) // 1000 = 1s,
	      break	  
    case 'luckyday':  case 'luckytime':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)    
		  if (!isPetualang) return reply('Kamu belum menjadi petualang')
          if (isPremium) {
          ez = Math.ceil(Math.random() * 450)
          a = randomNomor(99)
          b = randomNomor(500)
          c = randomNomor(150)
          addBalance(sender, b, balance)
          addLevelingXp(sender, ez)
          addEmas(sender, a)
          addBesi(sender, c)
          za = monospace(`🎰 LuckyTime\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`)
          but = [{ buttonId: '!luckytime', buttonText: { displayText: 'LuckyTime Again' }, type: 1 }]
          sendButton(from, za, '@LuckyTime', but, mek)   
          }else{
          ez = Math.ceil(Math.random() * 300)
          addLevelingXp(sender, ez)
          a = randomNomor(49)
          b = randomNomor(300)
          c = randomNomor(70)
          addLevelingXp(sender, ez)
          addBalance(sender, b, balance)
          addEmas(sender, a)          
          addBesi(sender, c)
          za = monospace(`🎰 LuckyTime\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`)
          but = [{ buttonId: '!luckytime', buttonText: { displayText: 'LuckyTime Again' }, type: 1 }]
          sendButton(from, za, '@LuckyTime', but, mek)          
          }  
          gameAdd(sender, glimit) 
          break	              
          
//==============		
    case 'restart':
          if (!isOwner) return 
          reply(mess.wait)
          exec(`node main`)
          reply('_Restarting Bot Success_')
          break             								
	case 'bc2': 
		  if (!isOwner) return reply(mess.only.owner) 
		  if (args.length < 1) return reply('.......')
	      anu = await design.chats.all()
		  if (isMedia && !mek.message.videoMessage || isQuotedImage) {
		  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		  buff = await design.downloadMediaMessage(encmedia)
		  for (let _ of anu) {
		  design.sendMessage(_.jid, buff, image, {caption: `❮ PESAN ❯\n\n${body.slice(4)}`}).catch(e => {
		  })
		  }
		  reply('*_succes broadcast_* ')
		  } else {
		  for (let _ of anu) {
		  sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`).catch(e => {
		  })
		  }
		  reply('*_succes broadcast_* ')
		  }
          break				                       
    case 'buylimit':{
          if (args.length < 1) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)      
          payout = body.slice(10)
          ane = 150 * payout
          if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
          kurangBalance(sender, ane, balance)
          giveLimit(sender, parseInt(args[0]), limit)
          reply(monospace(`Pembeliaan limit sebanyak ${args[0]} berhasil\n\nSisa Balance :  $${(getBalance(sender, balance))}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
          }
          break
    case 'buygamelimit':
    case 'buyglimit':{
          if (args.length < 1) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $250 balance`)            
          payout = v
          ane = 250 * payout
          if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
          kurangBalance(sender, ane, balance)
          givegame(sender, payout, glimit)
          reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
          }
          break                    


//------------------< Premium >-------------------
case 'premium': case 'prem':
							if (args.length === 0) return reply(`Kirim perintah *${prefix}premium* add/del 62xxx waktu (misal 1 hari -> 1d)\nExample:\n${prefix}premium add 62887435047326 1d`)
							if (!isOwner) return reply('onlyOwner')
							if (args[0] === 'add') {
								if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									premium.addPremiumUser(mentioned[0], args[2], _premium)
									reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${mentioned[0]}\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
									} else {
										premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
										reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${args[1]}@s.whatsapp.net\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
										}
										} else if (args[0] === 'del') {
											if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
									fs.writeFileSync('./database/premiun.json', JSON.stringify(_premium))
									reply(lang.success())
									} else {
										_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
										fs.writeFileSync('./database/premiun.json', JSON.stringify(_premium))
										reply('success')
										}
										} else {
											reply('emror')
											}
							break
                
    case "jadian":
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)          
		  jds = []
	  	  const jdii = groupMembers
		  const koss = groupMembers
		  const akuu = jdii[Math.floor(Math.random() * jdii.length)]
		  const diaa = koss[Math.floor(Math.random() * koss.length)]
	      teks = `Ciee..yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
		  jds.push(akuu.jid)
		  jds.push(diaa.jid)
	      mentions(teks, jds, true)
		  break	
    case "ngewe":
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)          
		  jds = []
		  const jdiid = groupMembers
	      const kosst = groupMembers
	      const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
		  const diaat = kosst[Math.floor(Math.random() * kosst.length)]
		  teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]} `
		  jds.push(akuut.jid)
		  jds.push(diaat.jid)		  		  
		  mentions(teks, jds, true)
	   	  break
    case 'truth':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          const truth = _truth[Math.floor(Math.random() * _truth.length)]
          but = [
          { buttonId: `!dare`, buttonText: { displayText: 'dare' }, type: 1 }, { buttonId: `!truth`, buttonText: { displayText: 'truth' }, type: 1 }]
          sendButImage(from, truth, `Gak Jalanin Donasi`, tde, but)  
          limitAdd(sender, limit)
          break
    case 'dare':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          const dare = _dare[Math.floor(Math.random() * _dare.length)]
          but = [
          { buttonId: `!dare`, buttonText: { displayText: 'dare' }, type: 1 }, { buttonId: `!truth`, buttonText: { displayText: 'truth' }, type: 1 }]
          sendButImage(from, dare, `Gak Jalanin Donasi`, tde, but)  
          limitAdd(sender, limit)
          break	
    case 'addtruth':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (!isOwner) return reply(mess.only.owner)
          if (args.length < 1) return reply('Textnya mana?')
          _truth.push(v)
          fs.writeFileSync('./fake/data/truth.json', JSON.stringify(_truth))
          reply(`Done add ${v} di fitur truth`)
          break
    case 'adddare':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (!isOwner) return reply(mess.only.owner)
          if (args.length < 1) return reply('Textnya mana?')
          _dare.push(v)
          fs.writeFileSync('./fake/data/dare.json', JSON.stringify(_dare))
          reply(`Done add ${v} di fitur dare`)
          break             	  	
    case "terganteng":
    case "terjelek":
    case "tercantik":
    case "tergay":
    case "terpedo":
    case "terwibu":
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)      
          if (!isGroup) return reply(mess.only.group)          
		  jds = []
		  const jdiidc = groupMembers
		  const kosstc = groupMembers
		  const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
		  teks = `Yang ${command} di grub ini adalah @${akuutc.jid.split('@')[0]}`
		  jds.push(akuutc.jid)
		  limitAdd(sender, limit)
		  mentions(teks, jds, true)
	      break		
    case 'darkjokes':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)      
          if (!isGroup) return reply(mess.only.group)          
          let data = fs.readFileSync('./fake/darkjokes.js');
	      jsonData = JSON.parse(data);
	      randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
	      hasl = await getBuffer(randKey.result)  
          but = [
          { buttonId: `!darkjokes`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `AhhhGelapKekMasaDepanlu`, `Klik Next Ngab`, hasl, but)   
          limitAdd(sender, limit)       
          break
    case 'tts': case 'gtts':      
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban) 
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)      
          bogay = body.replace(prefix, '')
          const gtts = require('./fake/gtts.js')(args[0])
          if (args.length < 2) return design.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
          dtt = bogay.slice(8)
          ranm = getRandom('.mp3')
          dtt.length > 600 ? reply('Textnya kebanyakan om') : gtts.save(ranm, dtt, function() {
          sendFileFromStorage(ranm, audio, {quoted: mek, mimetype: 'audio/mp4', ptt: true})
          fs.unlinkSync(ranm)
          limitAdd(sender, limit)
          })
          break
    case 'slot':
    case 'slots':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)           
          if (!isGroup) return reply(mess.only.group)        
          if (!isEventon) return reply(mess.only.event)
          const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
          slom = `[  🎰 | SLOTS GAME ]\n━━━━━━━━━━━━━\n🍋 : 🍌 : 🍍\n${somtoy} <== ||\n🍋 : 🍌 : 🍍\n━━━━━━━━━━━━━\n[  🎰 | SLOTS GAME ]\n\nInfo : Dapatkan 3 buah untuk win\n\nContoh : 🍌 : 🍌 : 🍌<== 👑`
          but = [{ buttonId: `!slot`, buttonText: { displayText: 'Play Again' }, type: 1 },
          { buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
          sendButton(from, slom, 'Slot Game', but)                 
          limitAdd(sender, limit)
          break
    case 'setlolhuman': 
    case 'setlolkey':
		  if (args.length < 1) return
	      if (!isOwner) return reply(mess.only.owner)
          LomKey = args[0]
          reply(`*Apikey LolHuman berhasil di ubah menjadi* : ${LomKey}`)
	      break
    case 'addbadword': case 'addbd':    
          if (!isOwner) return reply(mess.only.owner)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
          bad.push(v)
          fs.writeFileSync('./fake/data/bad.json', JSON.stringify(bad))
          reply('Success Menambahkan Bad Word!')
          break
    case 'delbadword': case 'deldb':
          if (!isOwner) return reply(mess.only.owner)
          if (!isGroupAdmins) return reply(mess.only.admin)
          if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)                 
          bad.splice(v)
          fs.writeFileSync('./fake/data/bad.json', JSON.stringify(bad))
          reply('Success Menghapus BAD WORD!')
          break 
    case 'listbadword': case 'lb':
          let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
          for (let i of bad) {
          lbw += `> ${i.replace(bad)}\n`
          }
          await reply(lbw)
          break 
    case 'nobad':
		  if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
          if (args.length < 1) return reply('lel🗿')
          if (args[0] === 'enable') {
          if (isBadWord) return reply('*fitur BadWord sudah aktif tadi!!*')
          badword.push(from)
          fs.writeFileSync('./fake/data/badword.json', JSON.stringify(badword))
          reply(`badword is enable`)
          } else if (args[0] === 'disable') {
          badword.splice(from, 1)
          fs.writeFileSync('./fake/data/badword.json', JSON.stringify(badword))
          reply(`badword is disable`)
          } else {
          reply('dah')
          }
          break
    case 'hacked':
	      if (!isOwner) return 
          if (!isGroup) return reply(mess.only.group)
          if (args.length < 1) return reply('Teksnya?')
          reply('Otw Hack')
          tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
          design.updateProfilePicture (from, tessgc)
          design.groupUpdateSubject(from, `HACKED BY ${v}`)
          design.groupUpdateDescription(from, monospace(`_${pushname} telah meretas grup ini_\n_Diretas Pada ${wita} ${tanggal()}_\n*Tiada Lord Selain Pebri!!*`))                     
          design.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
          break					
    case "term":
          if (!isOwner) return 
          if (!v) return reply('_-');
          exec(v, (err, stdout) => {
          if (err) return reply(`~ ${err}`);
          if (stdout) {
          reply(stdout);
          }
          });
          break;
          
//game          
          
    case 'tebakgambar':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
          if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
          datz = fs.readFileSync('./fake/rpgasset/tebakgambar.js');
          jsonData = JSON.parse(datz);
          randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
          somal = await getBuffer(randKey.result.soalImg)
          jawaban = randKey.result.jawaban
          kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          console.log(color('➳','lime'), color('Jawaban : ','red'), color(jawaban,'yellow'))
          design.sendMessage(from, somal, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
          tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
          fs.writeFileSync("./fake/data/tebakgambar.json", JSON.stringify(tebakgambar))
          })
          await sleep(30000)
          if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
          console.log(color("Jawaban: " + jawaban))
          titid = "*Jawaban*: " + jawaban
          sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
          buttonId: `!tebakgambar`, buttonText: { displayText: `⬡ NEXT `, }, type: 1, },]);
          delete tebakgambar[sender.split('@')[0]]
          fs.writeFileSync("./fake/data/tebakgambar.json", JSON.stringify(tebakgambar))
          }
          gameAdd(sender, glimit)
          break      
         
    case 'tebakanime':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
          if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
          datz = fs.readFileSync('./fake/rpgasset/tebakanime.js');
          jsonData = JSON.parse(datz);
          randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
          somal = await getBuffer(randKey.result.soalanime)
          jawaban = randKey.result.jawaban
          kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          console.log(color('➳','lime'), color('Jawaban : ','red'), color(jawaban,'yellow'))
          design.sendMessage(from, somal, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {
          tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
          fs.writeFileSync("./fake/data/tebakanime.json", JSON.stringify(tebakanime))
          })
          await sleep(30000)
          if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
          console.log(color("Jawaban: " + jawaban))
          titid = "*Jawaban*: " + jawaban
          sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
          buttonId: `!tebakanime`, buttonText: { displayText: `⬡ NEXT `, }, type: 1, },]);
          delete tebakanime[sender.split('@')[0]]
          fs.writeFileSync("./fake/data/tebakanime.json", JSON.stringify(tebakanime))
          }
          gameAdd(sender, glimit)
          break  
                   
    case 'tebakkata':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
          if (tebakkata.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
          datz = fs.readFileSync('./fake/rpgasset/tebakkata.json');
          jsonData = JSON.parse(datz);
          randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
          somal = (randKey.soal)
          jawaban = randKey.jawaban
          kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          console.log(color('➳','lime'), color('Jawaban : ','red'), color(jawaban,'yellow'))
          design.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+somal+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {tebakkata[sender.split('@')[0]] = jawaban.toLowerCase()
          fs.writeFileSync("./fake/data/tebakata.json", JSON.stringify(tebakkata))
          })
          await sleep(30000)
          if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
          console.log(color("Jawaban: " + jawaban))
          titid = "*Jawaban*: " + jawaban
          sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
          buttonId: `!tebakkata`, buttonText: { displayText: `⬡ NEXT `, }, type: 1, },]);
          delete tebakkata[sender.split('@')[0]]
          fs.writeFileSync("./fake/data/tebakata.json", JSON.stringify(tebakkata))
          }
          gameAdd(sender, glimit)
          break               
        
    case 'caklontong':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isGame(sender, isOwner, gcount, glimit)) return reply(mess.glimit)
          if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
          datz = fs.readFileSync('./fake/rpgasset/caklontong.json');
          jsonData = JSON.parse(datz);
          randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
          somal = (randKey.soal)
          jawaban = randKey.jawaban
          desnya = randKey.deskripsi
          kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
          console.log(color('➳','lime'), color('Jawaban : ','red'), color(jawaban,'yellow'))
          design.sendMessage(from, '*+* ```Cak lontong```\n\n• *Soal* :'+somal+'\n• *Waktu :* 30s', text, { quoted: mek}).then(() => {caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
          fs.writeFileSync("./fake/data/caklontong.json", JSON.stringify(caklontong))
          })
          await sleep(30000)
          if (caklontong.hasOwnProperty(sender.split('@')[0])) {
          console.log(color("Jawaban: " + jawaban))
          titid = `*Jawaban*: ${jawaban}\n*Deskripsi* : ${desnya}`
          sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
          {
          buttonId: `!caklontong`, buttonText: { displayText: `⬡ NEXT `, }, type: 1, },]);
          delete caklontong[sender.split('@')[0]]
          fs.writeFileSync("./fake/data/caklontong.json", JSON.stringify(caklontong))
          }
          gameAdd(sender, glimit)
          break  
 
 
 
//===Menu

                 
    case 'sewa':         
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          var { semwa } = require('./fake/sewa')          
          design.sendMessage(from, semwa(), text, {quoted: troli})
          break  
          
    case 'devoloperinfo': case 'infodeff': case 'deffinfo': case 'info2':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          var { deffinfox } = require('./fake/sewa')
          Febriansyah(deffinfox()) 
          break
//»»»𝘉𝘶𝘵𝘵𝘰𝘯 𝘉𝘢𝘮𝘩 
    case 'welcome':
 		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)     
          pp = 'on or off?'
          but = [
           { buttonId: `!wel on`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!wel off`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'Welcome', but, troli)
          break          
    case 'nobadword': case 'nobd':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)      
          pp = 'on or off?'
          but = [
           { buttonId: `!nobad enable`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!nobad disable`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'NoBadWord', but, troli)
          break                    
    case 'event':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)      
          pp = 'on or off?'
          but = [
           { buttonId: `!epen 1`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!epen 0`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'Event Group', but, troli)
          break 
    case 'nsfw':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)      
          pp = 'on or off?'
          but = [
           { buttonId: `!nww 1`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!nww 0`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'Nsfw Group', but, troli)
          break                                       
    case 'antilink':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)      
          pp = 'on or off?'
          but = [
           { buttonId: `!anti on`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!anti off`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'Antilink', but, troli)
          break
    case 'group': case 'gc': case 'grup':     	 
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)  
          menu = `Di Pilih Di Pilih!`
          but = [
           { buttonId: `!opengc`, buttonText: { displayText: 'OPEN️' }, type: 1 },
           { buttonId: `!closegc`, buttonText: { displayText: 'CLOSE' }, type: 1 }]
          sendButton(from, menu, 'Created By Pebri', but, troli)
          break           
 
//»»»𝘚𝘦𝘢𝘳𝘤𝘩𝘪𝘯𝘨 𝘔𝘦𝘯𝘶
    case 'gimage':
    case 'googleimage':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply('Apa Yang Mau Dicari?')
          reply(mess.wait)
          teks = args.join(' ')
          res = await googleImage(teks, google)
          function google(error, result){
          if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
          else {
          var gugImg = result
          var akhir =  gugImg[Math.floor(Math.random() * gugImg.length)].url
          sendFileFromUrl(akhir, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
          limitAdd(sender, limit)
          }
          }
          break 
    case 'pinterest':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if(!v) return reply(`Antum Mau Nyari Gambar Ape? Contoh ${prefix}pinterest waifu ayasaka`)
          pin = await hx.pinterest(v)
          ac = pin[Math.floor(Math.random() * pin.length)]
          di = await getBuffer(ac)
          but = [
           { buttonId: `${prefix + command} ${v}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `pinterest ${v}`, `Klik Next Ngab`, di, but).catch(e => {
          reply('Gambar tidak di temukan')
          })
          limitAdd(sender, limit)
          break
    case 'lirik':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply("Apa Yang Mau Di Cari? ")
          reply(mess.wait)
          teks = body.slice(7)
          lirikLagu(teks).then((res) => {
          let lirik = monospace(`❒「  SEARCH LIRIK  」\n└ Lirik Lagu :\n\n${res[0].result}\n`)
          design.sendMessage(from, lirik, text, {quoted:mek}).catch(e => {
          reply('Lirik tidak ditemukan')
          })
          limitAdd(sender, limit)
          })
          break
    case 'ytsearch':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply('Yang mau di cari apaan?')
          teks = args.join(' ')
          reply(mess.wait)
          res = await yts(`${teks}`)
          kant = ``
          for (let i of res.videos) {
          kant += monospace(`❒「  YtSearch  」\n• Judul : ${i.title}\n• Views : ${i.views}\n• Di Upload Pada : ${i.ago}\n• Durasi : ${i.timestamp}\n• Channel : ${i.author.name}\n• Link Video : ${i.url}\n\n\n`)
          }
          var akhir = kant.trim()
          sendFileFromUrl(res.all[0].image, image, {quoted: troli, caption: akhir})
          limitAdd(sender, limit)
          break  
    case 'ranime': case 'random':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply('Apa Yang Mau Dicari?\nContoh #ranime sarada')
          if (args.length > 1) return reply('Hanya Satu Kata!! Contoh #ranime naruto')
          let im = await hx.chara(v)
          let acak = im[Math.floor(Math.random() * im.length)]
          let li = await getBuffer(acak)   
          but = [
           { buttonId: `${prefix + command} ${v}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${v}`, `Klik Next Ngab`, li, but).catch(e => {
          reply('Gambar tidak ditemukan')
          })
          limitAdd(sender, limit)
          break
                             
          
//»»»𝘛𝘰𝘰𝘭𝘴 𝘔𝘦𝘯𝘶          				
    case "jadibot":
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (!isPremium) return reply(mess.only.prem)
          if (!isOwner && !mek.key.fromMe) return
          if (mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
          jadibot(reply, design, from);
          break;
    case "stopjadibot":
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (mek.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
          stopjadibot(reply);
          break;
    case "listbot":
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          let tekss = "「 *LIST JADIBOT* 」\n";
          for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}\n*Nama* : ${i.name}\n*Device* : ${i.phone.device_manufacturer}\n*Model* : ${i.phone.device_model}\n\n`;
          }
          reply(tekss);
          break;	
    case 'ssweb': case 'ss':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply('Urlnya mana kak..')
     	  anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${v}`)
	      buff = await getBuffer(anu.screenshot)
	      design.sendMessage(from, buff, image, {quoted: mek, caption : v}).catch(e => {
	      reply('Hemmm web maintenance')
	      })
	      limitAdd(sender, limit)
          break    
              	
//»»»𝘖𝘸𝘯𝘦𝘳 𝘔𝘦𝘯𝘶
	case 'public':
	  	  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		  publik = true
		  reply('Sukses mengubah mode self ke public')
		  break
	case 'self':
		  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		  publik = false
		  reply('Sukses mengubah mode public ke self')
		  break
	case 'setthumb':
	      if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		  delb = await design.downloadMediaMessage(boij)
		  fs.writeFileSync(`./fake/media/designbot.jpg`, delb)
		  reply('Sukses')
          } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          }
	  	  break
    case 'runtime':
    case 'test':
          if (!isOwner) return reply('Khusus Owner..')
          run = process.uptime() 
          teks = `${runtime(run)}`
          reply(teks)
          break  
	case 'speed':
	case 'ping':
	      if (!isOwner) return reply('Khusus Owner..')
	  	  const timestamp = speed();
	  	  run = process.uptime() 
		  exec(`neofetch --stdout`, (error, stdout, stderr) => {
		  const child = stdout.toString('utf-8')
	  	  const teks = child.replace(/Memory:/, "Ram:")
	 	  const pingnya = `${teks}\nSpeed: ${latensi.toFixed(4)} Second`
		  Febriansyah(`${pingnya}\nRuntime : ${runtime(run)}`)
		  })
		  break
    case 'bc': case 'broadcast':
          if (!isOwner) return  reply(mess.only.owner)
          if (args.length < 1) return reply('teks?')
          anu = await design.chats.all()
          if (isMedia && !mek.message.videoMessage || isQuotedImage) {
          const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          bc = await design.downloadMediaMessage(encmedia)
          for (let _ of anu) {
          tes = `${body.slice(4)}`
          design.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `© cikobot 2K22`, buttons: [{buttonId: `!menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `!donasi`,buttonText:{displayText:'DONASI'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
          }
          reply('Suksess broadcast')
          } else {
          for (let _ of anu) {
       	  textt = `${body.slice(4)}`
          design.sendMessage(_.jid, { contentText: `${textt}`, footerText: `${p}${wita} || ${tanggal()}${p}`, buttons: [{buttonId: `!menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `!donasi`,buttonText:{displayText:'DONASI'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
          }
          reply('Suksess broadcast')
          }
          break    
//=== Doujindesu
    case 'nhentai': case 'nhentaipdf': case 'ht':     
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isGroup) return reply('Only private chat')          
          if (!isPremium) return reply('Anda Bukan User VVIP') 
          if (args.length == 0) return reply(`Example: ${prefix + command} 298444`)
          reply(mess.wait)
          henid = args[0]
          get_result = await fetchJson(`http://hadi-api.herokuapp.com/api/nhentai?id=${henid}`)
          dowload = await getBuffer(get_result.download_pdf)  
          design.sendMessage(from, dowload, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `doujindesu.pdf` }).catch(e => {
          reply('doujin tidak ditemukan')
          })
          break  
    case 'nuklir': case 'nuklirkode':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isGroup) return reply('Only private chat')          
          if (!isPremium) return reply('Anda Bukan User VVIP')    
          var { nuklir } = require('./fake/nuklir.js')
          design.sendMessage(from, nuklir(), text, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
          break
    case 'dojin': case 'doujin': case 'doujinkode':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isGroup) return reply('Only private chat')          
          if (!isPremium) return reply('Anda Bukan User VVIP')    
          var { dojin } = require('./fake/doujin.js')
	      design.sendMessage(from, dojin(), text, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})	  	  
// end.  
          break
//»»»𝘔𝘦𝘥𝘪𝘢 𝘔𝘦𝘯u
    case 'wink':     
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          etto = await fetchJson('https://some-random-api.ml/animu/wink')
          jadi = await getBuffer(etto.link)
          zz = etto.link 
         // await sendWebp(from, zz).catch(e => {           
       //   gkguna.push(`ambil`)
		  fs.writeFileSync(`./fake/media/ambil.gif`, jadi)
		  //fs.writeFileSync('./', JSON.stringify(videonye))        
		   buffer = fs.readFileSync(`./fake/media/ambil.gif`)
          design.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek, caption:'Ubah sendiri ke sticker giff pake cmd #sticker'})   
                            
     //     })   
          break
          
          case 'gett':
                if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
           buffer = fs.readFileSync(`./fake/media/ambil.mp4`)
          design.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })   
          break
    case 'patrick':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
          .then(res => res.text())
          .then(body => {
          let tod = body.split("\n");
          let pjr = tod[Math.floor(Math.random() * tod.length)];
          sendWebp(from, pjr)
          }          
          )
          break
    case 'gura':
    case 'gawgura':          
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
          .then(res => res.text())
          .then(body => {
          let tod = body.split("\n");
          let pjr = tod[Math.floor(Math.random() * tod.length)];
          sendWebp(from, pjr)
          }
          )
          break
    case 'sanime':
    case 'stickeranime':       
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
          .then(res => res.text())
          .then(body => {
          let todd = body.split("\n");
          let pjrr = todd[Math.floor(Math.random() * todd.length)];
          sendWebp(from, pjrr)
          }
          )          
          break          
    case 'nulis':
    case 'tulis':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (args.length < 1) return reply('Yang mau di tulis apaan?')
          teks = args.join(' ')
          reply(mess.wait)
          nulis = encodeURIComponent(teks)
          res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
          if (res.data.error) return reply(res.data.error)
          buff = Buffer.from(res.data.result.split(',')[1], 'base64')
          design.sendMessage(from, buff, image, {quoted: freply, caption: mess.success}).catch(e => {
          return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
          })
          break
          
          
            case 'nuliskiri':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './fake/media/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './fake/media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './fake/media/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.sc))
                .on('exit', () => {
                    design.sendMessage(from, fs.readFileSync('./fake/media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: mek, caption: `Jangan malas pak...`, thumbnail: Buffer.alloc(0)})
                    limitAdd(sender, limit)
                })
            }
                break
            case 'nuliskanan':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './fake/media/nulis/images/buku/sebelumkanan.jpg',
                    '-font',
                    './fake/media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    fixHeight,
                    './fake/media/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.sc))
                console.log(e)
                .on('exit', () => {
                    design.sendMessage(from, fs.readFileSync('./fake/media/nulis/images/buku/setelahkanan.jpg'), image, {quoted: mek, caption: `Jangan malas pak...`, thumbnail: Buffer.alloc(0)})
                    limitAdd(sender, limit)
                })
            }
                break
            case 'foliokiri':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './fake/media/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
                    './fake/media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+48+185',
                    fixHeight,
                    './fake/media/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.sc))
                .on('exit', () => {
                    design.sendMessage(from, fs.readFileSync('./fake/media/nulis/images/folio/setelahkiri.jpg'), image, {quoted: mek, caption: `Jangan malas pak...`, thumbnail: Buffer.alloc(0)})
                    limitAdd(sender, limit)
                })
            }
                break
            case 'foliokanan':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './fake/media/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './fake/media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '3',
                    '-annotate',
                    '+89+190',
                    fixHeight,
                    './fake/media/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.sc))
                .on('exit', () => {
                    design.sendMessage(from, fs.readFileSync('./fake/media/nulis/images/folio/setelahkanan.jpg'), image, {quoted: mek, caption: `Jangan malas pak...`, thumbnail: Buffer.alloc(0)})
                    limitAdd(sender, limit)
                })
            }
                break          
          
          
          
    case 'toimg':          
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
		  if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
	      reply(mess.wait)
		  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await design.downloadAndSaveMediaMessage(encmedia)
		  ran = getRandom('.png')
	      exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		  fs.unlinkSync(media)
		  if (err) return reply('Upp Sorry Failed to Convert To Sticker^_^')
	      buffer = fs.readFileSync(ran)
		  design.sendMessage(from, buffer, image, {quoted: mek})
		  limitAdd(sender, limit)
		  fs.unlinkSync(ran)
		  })
	      break
    case 'tourl':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (
          ((isMedia && !mek.message.videoMessage) ||
          isQuotedImage ||
          isQuotedVideo) &&
          args.length == 0
          ) {
          boij =
          isQuotedImage || isQuotedVideo
          ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
          .extendedTextMessage.contextInfo
          : mek;
          owgi = await design.downloadMediaMessage(boij);
          res = await upload(owgi);
          tek = monospace(`Type : Image\nExpired : Permanent\nServer : Telegram ph\nResult : ${res}`)
          design.sendMessage(from, tek, text, {quoted: mek});
          limitAdd(sender, limit)
          } else {
          reply("kirim/reply gambar/video");
          }
          break;	            
    case "emoji":    
    case "semoji":
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply(`Send command *${prefix}semoji 😁`)
          qes = args.join(" ");
          emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);        
          limitAdd(sender, limit)
          });
          break
    case "tomp4":
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
          ) {
          ger = isQuotedSticker
          ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
          .extendedTextMessage.contextInfo
          : mek;
          owgi = await design.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
          sendMediaURL(from, res.result, "Done");
          limitAdd(sender, limit)
          });
          } else {
          reply("reply stiker");
          }
          fs.unlinkSync(owgi);
          break;			
	case 'attp':
	      if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
	      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} design`)
          buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(v)}`)
          design.sendMessage(from, buffer, sticker, { quoted: mek }).catch(e => {
          reply('Gagal!! mungkin terjadi spam')
          })
          limitAdd(sender, limit)
          break;		  
    case 'sticker': case 'stiker': case 'sg': case 's':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          var a = "designBot";
          var b = "By Pebri";
          if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
          const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           media = await design.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          design.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./mediadata/data.exif', out, '-o', _out])
          .on('exit', () => {
          design.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out) 
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
          const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          const media = await design.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          design.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./mediadata/data.exif', out, '-o', _out])
          .on('exit', () => {
          design.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out)       
          } else if (isQuotedSticker){
          const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          media = await design.downloadAndSaveMediaMessage(encmedia)
          createExif(a, b);
          modStick(media, design, mek, from)
          } else {
          reply(`Kirim gambar dengan caption ${prefix}swm atau tag gambar yang sudah dikirim`)
          }
          break;
//»»»𝘚𝘵𝘰𝘳𝘢𝘨𝘦
    case 'addvideo':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
		  if (!isQuotedVideo) return reply('Reply videonya blokk!')
		  svst = body.slice(10)
		  if (!svst) return reply('Nama videonya apa su?')
		  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		  delb = await design.downloadMediaMessage(boij)
		  videonye.push(`${svst}`)
		  fs.writeFileSync(`./mediadata/video/${svst}.mp4`, delb)
		  fs.writeFileSync('./mediadata/video.json', JSON.stringify(videonye))
		  design.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
		  break					
    case 'getvideo':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
		  namastc = body.slice(10)
		  buffer = fs.readFileSync(`./mediadata/video/${namastc}.mp4`)
		  design.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
		  break					
	case 'listvideo':
	case 'videolist':
	      if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
		  teks = '*List Video :*\n\n'
		  for (let awokwkwk of videonye) {
	      teks += `- ${awokwkwk}\n`
		  }
		  teks += `\n*Total : ${videonye.length}*`
		  design.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
		  break
    case 'getsticker':
	case 'gets': 
	      if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
		  namastc = body.slice(12)
		  result = fs.readFileSync(`./mediadata/stiker/${namastc}.webp`)
		  design.sendMessage(from, result, sticker, {quoted :mek})
		  break
    case 'stickerlist':
	case 'liststicker': 
	      if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
		  teks = '*Sticker List :*\n\n'
		  for (let awokwkwk of setiker) {
	  	  teks += `- ${awokwkwk}\n`
		  }
		  teks += `\n*Total : ${setiker.length}*`
		  design.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
	      break
    case 'addsticker':
    case 'addstiker':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
		  if (!isQuotedSticker) return reply('Reply stiker nya')
	      svst = body.slice(12)
		  if (!svst) return reply('Nama sticker nya apa?')
		  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		  delb = await design.downloadMediaMessage(boij)
	  	  setiker.push(`${svst}`)
	 	  fs.writeFileSync(`./mediadata/stiker/${svst}.webp`, delb)
		  fs.writeFileSync(`./mediadata/stik.json`, JSON.stringify(setiker))
	  	  design.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
	 	  break
    case 'addvn': 
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
	      svst = body.slice(7)
		  if (!svst) return reply('Nama audionya apa su?')
	  	  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		  delb = await design.downloadMediaMessage(boij)
	  	  audionye.push(`${svst}`)
		  fs.writeFileSync(`./mediadata/audio/${svst}.mp3`, delb)
		  fs.writeFileSync('./mediadata/audio.json', JSON.stringify(audionye))
		  design.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
		  break			
	case 'listvn':
	case 'vnlist': 
	      if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
       	  teks = '*List Vn:*\n\n'
		  for (let awokwkwk of audionye) {
		  teks += `- ${awokwkwk}\n`
	  	  }
		  teks += `\n*Total : ${audionye.length}*`
		  design.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
		  break
    case 'getvn': 
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
		  namastc = body.slice(7)
		  buffer = fs.readFileSync(`./mediadata/audio/${namastc}.mp3`)
	 	  design.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
		  break
    case 'addimage':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
		  if (!isQuotedImage) return reply('Reply imagenya blokk!')
		  svst = body.slice(10)
		  if (!svst) return reply('Nama imagenya apa su?')
		  boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	  delb = await design.downloadMediaMessage(boij)
		  imagenye.push(`${svst}`)
		  fs.writeFileSync(`./mediadata/image/${svst}.jpeg`, delb)
		  fs.writeFileSync('./mediadata/image.json', JSON.stringify(imagenye))
		  design.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
		  break					
	case 'getimage':
	      if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
	      namastc = body.slice(10)
		  buffer = fs.readFileSync(`./mediadata/image/${namastc}.jpeg`)
		  design.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
		  break					
    case 'imglist':
	case 'listimg':
	      if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
		  teks = '*List Image :*\n\n'
		  for (let awokwkwk of imagenye) {
		  teks += `- ${awokwkwk}\n`
		  }
		  teks += `\n*Total : ${imagenye.length}*`
		  design.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
	 	  break          
//»»»𝘊𝘰𝘯𝘷𝘦𝘳𝘵𝘦𝘳          
    case 'tovn':           
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedAudio) return reply('Reply Audionya')
          reply(mess.wait)
	      encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await design.downloadAndSaveMediaMessage(encmedia)
		  ran = getRandom('.mp3')
		  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		  fs.unlinkSync(media)
		  if (err) return reply('Gagal mengkonversi audio ke ptt')
		  topt = fs.readFileSync(ran)
		  design.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
		  limitAdd(sender, limit)
		  })
		  break				           
    case "tomp3":           
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedVideo) return reply("Reply videonya!");
          reply(mess.wait);
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
          media = await design.downloadAndSaveMediaMessage(encmedia);
          ran = getRandom(".mp4");
          exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          design.sendMessage(from, buffer453, audio, {
          mimetype: "audio/mp4",
          quoted: mek,
          });      
          fs.unlinkSync(ran);
          limitAdd(sender, limit)
          });
          break;          
    case "fast":    
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)        
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedVideo) return reply("Reply videonya!");
          reply(mess.wait);
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
          media = await design.downloadAndSaveMediaMessage(encmedia);
          ran = getRandom(".mp4");
          exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          design.sendMessage(from, buffer453, video, {
          mimetype: "video/mp4",
          quoted: mek,
          });
          fs.unlinkSync(ran);
          limitAdd(sender, limit)
          }
          );
          break;
    case "slow":            
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedVideo) return reply("Reply videonya!");
          reply(mess.wait);
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
          media = await design.downloadAndSaveMediaMessage(encmedia);
          ran = getRandom(".mp4");
          exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          design.sendMessage(from, buffer453, video, {
          mimetype: "video/mp4",
          quoted: mek,
          });
          fs.unlinkSync(ran);
          limitAdd(sender, limit)
          }
          );
          break;
    case "reverse":            
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (!isQuotedVideo) return reply("Reply videonya!");
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
          media = await design.downloadAndSaveMediaMessage(encmedia);
          ran = getRandom(".mp4");
          exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          design.sendMessage(from, buffer453, video, {
          mimetype: "video/mp4",
          quoted: mek,
          });
          fs.unlinkSync(ran);
          limitAdd(sender, limit)
          });
          break;      
    case 'bass':             
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedAudio) return reply('Reply Audionya')
	   	  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		  media = await design.downloadAndSaveMediaMessage(encmedia)
		  ran = getRandom('.mp3')
		  exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
		  fs.unlinkSync(media)
		  if (err) return reply('Error!')
		  hah = fs.readFileSync(ran)
		  design.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
	      fs.unlinkSync(ran)
	      limitAdd(sender, limit)
		  })
		  break
    case 'nightcore':            
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
      	  if (!isQuotedAudio) return reply('Reply Audionya')
		  night = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		  core = await design.downloadAndSaveMediaMessage(night)
		  ran = getRandom('.mp3')
		  reply(mess.wait)
		  exec(`ffmpeg -i ${core} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
		  fs.unlinkSync(core)
		  if (err) return reply('Error!')
		  hah = fs.readFileSync(ran)
		  design.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek, ptt: true})
		  fs.unlinkSync(ran)
		  limitAdd(sender, limit)
		  })
	      break
    case 'gemuk':            
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedAudio) return reply('Reply Audionya')
		  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		  media = await design.downloadAndSaveMediaMessage(encmedia)
	      ran = getRandom('.mp3')
		  exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
	      fs.unlinkSync(media)
		  if (err) return reply('Error!')
		  hah = fs.readFileSync(ran)
		  design.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
		  fs.unlinkSync(ran)
		  limitAdd(sender, limit)
	 	  })
		  break
    case 'tupai':           
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedAudio) return reply('Reply Audionya')
		  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		  media = await design.downloadAndSaveMediaMessage(encmedia)
		  ran = getRandom('.mp3')
		  exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
		  fs.unlinkSync(media)
		  if (err) return reply('Error!')
		  hah = fs.readFileSync(ran)
		  design.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
		  fs.unlinkSync(ran)
		  limitAdd(sender, limit)
		  })
		  break
    case 'slow2':            
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isQuotedAudio) return reply('Reply Audionya')
		  encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		  media = await design.downloadAndSaveMediaMessage(encmedia)
		  ran = getRandom('.mp3')
  	      exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
		  fs.unlinkSync(media)
	      if (err) return reply('Error!')
	      hah = fs.readFileSync(ran)
	      design.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
		  fs.unlinkSync(ran)
		  limitAdd(sender, limit)
		  })
		  break 
//===Up SW		   
    case 'upswteks':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          if (args.length < 1) return reply('Teksnya?')
          teks = body.slice(10)
          design.sendMessage('status@broadcast', teks, MessageType.text)
          reply(`Sukses upload status:\n${teks}`)
          break	
    case 'upswlokasi':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
          if (args.length < 1) return reply('Teksnya?')
          teks = body.slice(12)
          design.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${fakeyoi}`}, MessageType.location)
          reply(`Sukses upload lokasi:\n${teks}`)
          break	
    case 'upswsticker':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          if (!isQuotedSticker) return reply('Reply stikernya!')
          if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
	      const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	      buff = await design.downloadMediaMessage(encmedia)
	 	  design.sendMessage('status@broadcast', buff, sticker)
	      }
		  reply(`Sukses upload sticker`)
          break
    case 'upswaudio':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          if (!isQuotedAudio) return reply('Reply audionya!')
          if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
	      const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
	      buff = await design.downloadMediaMessage(encmedia)
	      design.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
		  }
		  reply(`Sukses upload audio`)
		  break
    case 'upswvoice':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerBl)
          if (!isQuotedAudio) return reply('Reply audionya!')
          if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
		  const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
          buff = await design.downloadMediaMessage(encmedia)
		  design.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
	 	  }
		  reply(`Sukses upload voice`)
		  break
    case 'upswvideo':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          var konti = body.slice(11)
          reply(mess.wait)
          var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      var mediap = await design.downloadAndSaveMediaMessage(enmediap)
          const buffer3 = fs.readFileSync(mediap)
          design.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
          reply(`Sukses upload video:\n${konti}`)
          break
    case 'upswgif':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          var konti = body.slice(7)
          reply(mess.wait)
          enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await design.downloadAndSaveMediaMessage(enmedia)
          const buffer6 = fs.readFileSync(media)
          design.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
          reply(`Sukses upload gif:\n${konti}`)
          break
    case 'upswimage':
          if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
          var teksyy = body.slice(11)
          reply(mess.wait)
          enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	      media = await design.downloadAndSaveMediaMessage(enmedia)
          buffer = fs.readFileSync(media)
          design.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
          reply(`Sukses upload image:\n${teksyy}`)
          break		   
//»»»𝘎𝘳𝘰𝘱 𝘔𝘦𝘯𝘶	
    case 'epen':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
		  if (!isGroup) return reply(mess.only.group)
	      if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		  if (args.length < 1) return reply('Boo :𝘃')
		  if (Number(args[0]) === 1) {
		  if (isEventon) return reply('*SUDAH AKTIF* !!!')
		  event.push(from)
		  fs.writeFileSync('./fake/data/event.json', JSON.stringify(event))
		  reply('*❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI*')
		  } else if (Number(args[0]) === 0) {
		  event.splice(from, 1)
		  fs.writeFileSync('./fake/data/event.json', JSON.stringify(event))
		  reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
		  } else {
		  reply('eeee')
		  }										
		  break  
    case 'nww':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
		  if (!isGroup) return reply(mess.only.group)
	      if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		  if (args.length < 1) return reply('Boo :𝘃')
		  if (Number(args[0]) === 1) {
		  if (isNsfw) return reply('*SUDAH AKTIF* !!!')
		  nsfww.push(from)
		  fs.writeFileSync('./fake/data/nsfw.json', JSON.stringify(nsfww))
		  reply('*❬ SUKSES ❭ MENGAKTIFKAN NSFW DI GRUB INI*')
		  } else if (Number(args[0]) === 0) {
		  nsfww.splice(from, 1)
		  fs.writeFileSync('./fake/data/nsfw.json', JSON.stringify(nsfww))
		  reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
		  } else {
		  reply('eeee')
		  }										
		  break		            
    case 'wel':   
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (!isGroup) return reply(mess.only.group)
          if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
          if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
          if ((args[0]) === 'on') {
          if (isWelkom) return reply('welcome sudah aktif')
          _welkom.push(from)
          fs.writeFileSync('./fake/data/welcome.json', JSON.stringify(_welkom))
          reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
          } else if ((args[0]) === 'off') {
          if (!isWelkom) return reply('welcome sudah off sebelumnya')
          _welkom.splice(from, 1)
          fs.writeFileSync('./fake/data/welcome.json', JSON.stringify(_welkom))
          reply(`\`\`\`Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
          } else {
          reply('on untuk mengaktifkan, off untuk menonaktifkan')
          }
          break		           		              	  
    case 'modesimi':
          if (args.length < 1) return reply('hmm')
          if (Number(args[0]) === 1) {
          simin.push(from)
          fs.writeFileSync('./fake/data/simi.json', JSON.stringify(simin))
          reply('Sukses mengaktifkan mode simi')
          } else if (Number(args[0]) === 0) {
          simin.splice(from, 1)
          fs.writeFileSync('./fake/data/simi.json', JSON.stringify(simin))
          reply('Sukes menonaktifkan mode simi')
          } else {
          reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
          }
          break
    case 'anti':
	  	  if (!isGroup) return reply(mess.only.group)
		  if (!isGroupAdmins && !isOwner) return reply('Lu bkn admin')
	      if (!isBotGroupAdmins) return reply('Bot Harus Admin')
		  if (args.length < 1) return reply(`On untuk mengaktifkan & off untuk menonaktifkan`)
		  if ((args[0]) === 'on') {
		  if (isAnti) return reply('Antilink aktif')
		  _antilink.push(from)
	  	  fs.writeFileSync('./fake/data/antilink.json', JSON.stringify(_antilink))
		  reply(`Mengaktifkan fitur anti link di group *${groupMetadata.subject}*`)
		  } else if ((args[0]) === 'off') {
		  if (!isAnti) return reply('Antilink off')
		  _antilink.splice(from, 1)
	      fs.writeFileSync('./fake/data/antilink.json', JSON.stringify(_antilink))
		  reply(`Menonaktifkan fitur anti link di group *${groupMetadata.subject}*`)
		  } else {
	      reply('On untuk mengaktifkan & off untuk menonaktifkan')
	      }
	 	  break
    case 'opengc':
     	  if (!isGroup) return reply(mess.only.group)
	      if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
          if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
          reply(`Sukses Membuka Grup ${groupName}`)
		  design.groupSettingChange(from, GroupSettingChange.messageSend, false)
		   break
     case 'closegc':
		   if (!isGroup) return reply(mess.only.group)
		   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
           if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
		   reply(`Sukses Menutup Grup ${groupName}`)
		   design.groupSettingChange(from, GroupSettingChange.messageSend, true)
		   break   	 	   
     case "groupinfo": case 'gcinfo': case 'infogc':       	       
           if (!isGroup) return;
           ppUrl = await design.getProfilePicture(from); // leave empty to get your own
           buffergbl = await getBuffer(ppUrl);
           design.sendMessage(from, buffergbl, image, {
           quoted: mek,
           caption: `\`\`\`「 Group Info 」\`\`\`\n\n*•> Name* : ${groupName}\n*•> Member* : ${groupMembers.length}\n*•> Admin* : ${groupAdmins.length}\n*•> Description* : \n${groupDesc}`,
           });
           break;
     case 'setdesc':
           if (!isGroup) return reply(mess.only.group)
           if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
           if (!isBotGroupAdmins) return reply(`Bot Harus Admin dong`)
           if (args.length < 1) return reply(`Ketik *${prefix}setdesc Isi* Buat Edit Desc Grup`)
           teks = body.slice(9)
           design.groupUpdateDescription(from, teks)
           break	       
   	 case 'setppgc': 
           if (!isGroup) return reply(mess.only.group)
           if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
           if (!isBotGroupAdmins) return reply(mess.only.bot)
           media = await design.downloadAndSaveMediaMessage(mek)
           await design.updateProfilePicture (from, media)
           reply('[SUKSES] Mengganti icon grub')
	  	   break
   	 case 'setname':
           if (!isGroup) return reply(mess.only.group)
    	   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		   if (!isBotGroupAdmins) return reply(mess.only.bot)
           design.groupUpdateSubject(from, `${body.slice(9)}`)
           reply('Succes, Ganti Nama Grup')	  	   
 	  case 'add':
	       if (!isGroup) return reply(mess.only.bot)
		   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		   if (!isBotGroupAdmins) return reply(mess.only.bot)
		   reply('Opps... Fitur Dalam Perbaikan Kak>_<')
		   break
	   /*    if (args.length < 1) return reply('Yang mau di add jin ya?')
		   if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
		   try {
		   num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
		   design.groupAdd(from, [num])
	       } catch (e) {
	  	   console.log('Error :', e)
	 	   reply('Gagal menambahkan target, mungkin karena di private')
		   }
		   break*/
     case 'kick':
		   if (!isGroup) return reply(mess.only.group)
		   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		   if (!isBotGroupAdmins) return reply(`bot harus admin`)
		   if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
		   mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		   if (mentioned.length > 1) {
		   teks = ''
		   for (let _ of mentioned) {
		   teks += `asek dapat makanan,otw mengkickmu, 🏃sksks :\n`
		   teks += `@_.split('@')[0]`
		   }
		   mentions(teks, mentioned, true)
		   design.groupRemove(from, mentioned)
		   } else {
		   mentions(`asek dapat makanan,otw mengkickmu, @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
		   design.groupRemove(from, mentioned)
		   }
		   break		   
	 case 'demote':
		   if (!isGroup) return reply(mess.only.group)
		   if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		   if (!isBotGroupAdmins) return reply(mess.only.bot)
		   if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
	       mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		   if (mentioned.length > 1) {
	 	   teks = ''
		   for (let _ of mentioned) {
		   teks += `Status adminmu dicopot. Makanya jan jadi sider🏃 :\n`
	 	   teks += `@_.split('@')[0]`
		   }
		   mentions(teks, mentioned, true)
	 	   design.groupDemoteAdmin(from, mentioned)
		   } else {
		   mentions(`YA HAHAHA  WAHYU @${mentioned[0].split('@')[0]} Jabatan adminmu di copt, Makanya jan jadi sider🏃`, mentioned, true)
	  	   design.groupDemoteAdmin(from, mentioned)
		   }
	       break
	 case 'promote':
		   if (!isGroup) return reply(mess.only.group)
	       if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
	       if (!isBotGroupAdmins) return reply(mess.only.bot)
		   if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
		   mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		   if (mentioned.length > 1) {
		   teks = ''
		   for (let _ of mentioned) {
		   teks += `Selamat🥳 anda naik menjadi admin grub (+_+) :\n`
		   teks += `@_.split('@')[0]`
		   }
		   mentions(teks, mentioned, true)
		   design.groupMakeAdmin(from, mentioned)
		   } else {
		   mentions(`selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub (+_+)`, mentioned, true)
		   design.groupMakeAdmin(from, mentioned)
		   }
		   break
     case 'revoke': case 'risetgc': case 'resetlink':
     case 'revokegroup': case 'revokelink': {
           if (!isGroup) return reply(mess.only.group)
           if (!isGroupAdmins)return reply(mess.only.admin)
           if (!isBotGroupAdmins) return reply(mess.only.bot)
           var linkgc = await design.revokeInvite(from)
           mentions(`Link Group Berhasil direset oleh admin @${sender.split('@')[0]}`, [sender], true)
           }
           break
     case 'linkgc': case 'link':
     case 'linkgroup':
           linkgc = await design.groupInviteCode(from)
           reply('https://chat.whatsapp.com/'+linkgc)  
           break         	   
     case 'join':case 'joingc':
		   if (args.length < 1) return reply(`link broo?*`)
		   if (!mek.key.fromMe && !isOwner) return reply(mess.only.owner)
		   if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('gkvalid..')
	       reply('Tunggu Sebentar..')
		   link = args[0].replace('https://chat.whatsapp.com/','')
	  	   fak = design.query({ json: ['action', 'invite', link],
		   expect200: true })
		   reply('Berhasil Masuk Grup')
           break		
     case 'delete': case 'del': case 'D':
	       if (!isGroup)return reply(mess.only.group)
		   try {
		   design.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
		   } catch (e) {
		   reply('Hanya bisa menghapus pesan dariku')
	  	   }
		   break  
    case 'hidetag':
          if (!isGroup) return reply(mess.only.group)
          if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
    	  var value = args.join(' ')
		  var group = await design.groupMetadata(from)
		  var member = group['participants']
		  var mem = []
    	  member.map(async adm => {
		  mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		  })
		  var optionshidetag = {
	      text: value,
		  contextInfo: { mentionedJid: mem },
		  quoted: mek
	      }
	      design.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption":'#IZIN NGETAG',"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": tamnel} }  } })
	      break
    case 'tagall':
		  if (!isGroup) return reply(mess.only.group)
		  if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
		  members_id = []
		  teks = `🎌 Group : *${groupName}*\n💫 Jumlah member : *${groupMetadata.participants.length}*\n\n┌───⊷ *TAG ALL* ⊶\n`
		  for (let mem of groupMembers) {
		  teks += `├> @${mem.jid.split('@')[0]}\n`
	   	  members_id.push(mem.jid)
		  }
		  teks += `└──────────────`
	 	  mentions(teks, members_id, true)
		  break	
    case 'demoteall':
	   	  if (!isOwner && !mem.key.fromMe) return reply(mess.only.owner)
		  if (!isGroup) return reply(mess.only.group)
		  if (!isBotGroupAdmins) return reply(mess.only.bot)
          members_id = []
		  for (let mem of groupMembers) {
	   	  members_id.push(mem.jid)
	  	  }
          design.groupDemoteAdmin(from, members_id)
          break
    case 'promoteall':
		  if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
		  if (!isGroup) return reply(mess.only.group)
		  if (!isBotGroupAdmins) return reply(mess.only.bot)
          members_id = []
		  for (let mem of groupMembers) {
	  	  members_id.push(mem.jid)
	  	  }
          design.groupMakeAdmin(from, members_id)
          break		  	            		           
//»»»𝘋𝘰𝘸𝘭𝘰𝘢𝘥𝘦𝘳 𝘔𝘦𝘯𝘶     									

    case 'play':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
          reply('Bentar Om lagi Nyari')
          let yut = await yts(v)
          yta(yut.videos[0].url)             
          .then(async(res) => {
          var { thumb, title, filesizeF, filesize } = res
          var capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁\n•💬 Judul : ${yut.all[0].title}\n•🎥 ID Video : ${yut.all[0].videoId}\n•⏰️ Diupload Pada : ${yut.all[0].ago}\n•👁️️ Views : ${yut.all[0].views}\n•▶️ Durasi : ${yut.all[0].timestamp}\n•📍 Channel : ${yut.all[0].author.name}\n•🔗 Link Channel : ${yut.all[0].author.url}\n•⚡ Link Video : ${yut.videos[0].url}`
          ya = await getBuffer(thumb)
          py =await design.prepareMessage(from, ya, image)
          sendButloc(from,monospace(capti),'',`*select the type you want to download*`,[{buttonId: `!ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1},
          {buttonId: `!ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}],null,null,ya)
          }).         
          break      
    
    case 'ytmp3':                  
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (args.length < 1) return reply(`Kirim perintah *${prefix}ytmp3 link*`)
          get_dl = await fetchJson(`http://hadi-api.herokuapp.com/api/yt2/audio?url=${v}`)
          mp3 = await getBuffer(get_dl.result.download_audio)
          hm = `*Judul* : ${get_dl.result.title}\n*Size* : ${get_dl.result.size}\n*Resolution* : ${get_dl.result.resolution}`
          await design.sendMessage(from, mp3, audio, { mimetype: 'audio/mp4', filename: `${get_dl.result.title}.mp3`, quoted: mek}).catch(e => {
          reply('Gagal Dalam Mendownload Lagu')
          })      
          break
    case 'ytmp4':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (args.length < 1) return reply(`Kirim perintah *${prefix}ytmp4 link*`)
          get_hasil = await fetchJson(`http://hadi-api.herokuapp.com/api/yt2/video?url=${v}`)
          mp4 = await getBuffer(get_hasil.result.download_video)
          hm = `*Judul* : ${get_hasil.result.title}\n*Size* : ${get_hasil.result.size}\n*Resolution* : ${get_hasil.result.resolution}`
          await design.sendMessage(from, mp4, video, { mimetype: 'video/mp4', filename: `${get_hasil.result.title}.mp3`, quoted: mek,caption:hm}).catch(e => {
          reply('Gagal Dalam Mendownload Lagu')
          })
          break
    
    case 'tiktokdl': case 'ttdl': case 'tiktokmp4': case 'tiktok':    	        	
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)    
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
 	      if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply(mess.Iv)
 	      if (!v) return reply('Link?')
 		  reply(mess.wait)
		  hx.ttdownloader(`${args[0]}`)
    	  .then(result => {
          const { wm, nowm, audio } = result
          axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
          .then(async (a) => {
    	  me = fake
	      design.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
	      limitAdd(sender, limit)
          })
		  })
		  break
    case "twitter":
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
           if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
           return reply(mess.error.url);
           if (!v) return fakegroup("Linknya?");
           ten = args[0];
           var res = await hx.twitter(`${ten}`);
           ren = `${g.HD}`;
           sendMediaURL(from, ren, "Nih kak video nya!!");
           limitAdd(sender, limit)
           break;
     case "facebook":
           if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
           if (!v) return reply("Linknya?");
           if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
           return reply(mess.error.url);
           reply(mess.wait);
           te = args.join(" ");
           hx.fbdown(`${te}`).then((G) => {
           ten = `${G.HD}`;
           sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`).catch(e => {
           reply(mess.error.sc)
           })
           limitAdd(sender, limit)
           });
           break;
     case "instagram":
           if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
           if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
           return reply(mess.error.url);
           if (!v) return reply("Linknya?");
           reply(mess.wait);
           hx.igdl(args[0]).then(async (result) => {
           for (let i of result.medias) {
           if (i.url.includes("mp4")) {
           let link = await getBuffer(i.url);
           design.sendMessage(from, link, video, {
           quoted: mek,
           caption: `Type : ${i.type}`,
           });
           } else {
           let link = await getBuffer(i.url);
           design.sendMessage(from, link, image, {
           quoted: mek,
           caption: `Type : ${i.type}`,
           });
           }
           }
           });
           limitAdd(sender, limit)
           break;		  		  
    case 'mediafire':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length < 1) return reply('Link Nya Mana? ')
          if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
          reply(mess.wait)
          teks = args.join(' ')
          res = await mediafireDl(teks)
          result = monospace(`❒「  MediaFire  」\n• Nama : ${res[0].nama}\n• Ukuran : ${res[0].size}\n• Link : ${res[0].link}`)
          but = [
           { buttonId: `!dwd`, buttonText: { displayText: 'DOWNLOAD️' }, type: 1 }]
          sendButton(from, result, 'MediaFire Downloader', but, troli)
          break
          case 'dwd':
          sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek}).catch(e => {
          reply('Error Dalam Mendownload File')
          })
          limitAdd(sender, limit)
          break
//+++Random
    case 'waifu': case 'loli': case 'husbu': case 'milf': case 'cosplay': case 'wallml':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
          let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
    	  var bb = await design.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
          var buttonnsss = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]
          var ButtonssMessages = {
          contentText: `*Antum Birahi Dengan ${command}!Tobat Brother*`,
          buttons: buttonnsss,
          footerText: `Klik Next Untuk Melanjutkan`,
          headerType: 4,
          imageMessage: bb.message.imageMessage
          }
          await design.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : mek})
          fs.unlinkSync(`./${sender}.jpeg`)
          limitAdd(sender, limit)
          break   
    case 'waifu2':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)    
          reply(mess.wait)
          anu = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
          img = await getBuffer(anu.url)
          but = [{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${command}`, `Klik Next Ngab`, img, but)
          limitAdd(sender, limit)
          break
    case 'nekochan':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)    
          reply(mess.wait)
          anu = await fetchJson(`https://api.waifu.pics/sfw/neko`)
          img = await getBuffer(anu.url)
          but = [{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${command}`, `Klik Next Ngab`, img, but)
          limitAdd(sender, limit)
          break          
   case  'nekochan2':
         if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)   
          if (!isGroup) return reply(mess.only.group)
          reply(mess.wait)
          anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
          buffer = await getBuffer(anu.url)
          but = [{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${command}`, `Klik Next Ngab`, buffer, but)
          limitAdd(sender, limit)
          break
   case  'megumin':
         if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)   
          if (!isGroup) return reply(mess.only.group)
          reply(mess.wait)
          anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
          buffer = await getBuffer(anu.url)
          but = [{ buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT' }, type: 1 }]
          sendButImage(from, `${command}`, `Klik Next Ngab`, buffer, but)
          limitAdd(sender, limit)
          break                          
//»»»𝘔𝘢𝘬𝘦𝘳 𝘔𝘦𝘯𝘶          
  // Textprome //
    case 'blackpink':      case 'neon':
    case 'greenneon':     case 'advanceglow':
    case 'futureneon':    case 'sandwriting':
    case 'sandsummer':  case 'sandengraved':
    case 'metaldark':     case 'neonlight':
    case 'holographic':   case 'text1917':
    case 'minion':        case 'deluxesilver':
    case 'newyearcard':  case 'bloodfrosted':
    case 'halloween':     case 'jokerlogo':
    case 'fireworksparkle':case 'natureleaves':
    case 'bokeh':         case 'toxic':
    case 'strawberry':    case 'box3d':
    case 'roadwarning':  case 'breakwall':
    case 'icecold':        case 'luxury':
    case 'cloud':          case 'summersand':
    case 'horrorblood':   case 'thunder':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} designbot`)
          reply(mess.wait)
          ini_txt = args.join(" ")
          getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${LomKey}&text=${ini_txt}`).then((gambar) => {
          design.sendMessage(from, gambar, image, {quoted:mek, caption: 'Nih kak'}).catch(e => {
          reply(mess.error.api)
          console.log(e)
          })
          limitAdd(sender, limit)
          })
          break
          break
    case 'pornhub':      case 'glitch':
    case 'avenger':      case 'space':
    case 'ninjalogo':     case 'marvelstudio':
    case 'lionlogo':      case 'wolflogo':
    case 'steel3d':       case 'wallgravity':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} designbot`)
          reply(mess.wait)
          txt1 = args[0]
          txt2 = args[1]
          getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${LomKey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
          design.sendMessage(from, gambar, image, {quoted:mek, caption: 'Nih kak'}).catch(e => {
          reply(mess.error.api)
          console.log(e)
          })
          limitAdd(sender, limit)
          })
          break
         // Photo Oxy //
    case 'shadow':  case 'cup':
    case 'cup1':     case 'romance':
    case 'smoke':   case 'burnpaper':
    case 'lovemessage': case 'undergrass':
    case 'love':      case 'coffe':
    case 'woodheart': case 'woodenboard':
    case 'summer3d': case 'wolfmetal':
    case 'nature3d':   case 'underwater':
    case 'golderrose': case 'summernature':
    case 'letterleaves': case 'glowingneon':
    case 'fallleaves':   case 'flamming':
    case 'harrypotter': case 'carvedwood':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} designbot`)
          reply(mess.wait)
          ini_txt = args.join(" ")
          getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${LomKey}&text=${ini_txt}`).then((gambar) => {
          design.sendMessage(from, gambar, image, {quoted:mek, caption: 'Nih kak'}).catch(e => {
          reply(mess.error.api)
          console.log(e)
          })
          limitAdd(sender, limit)
          })
          break
    case 'arcade8bit':
    case 'battlefield4':
    case 'pubg':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} designbot`)
          reply(mess.wait)
          txt1 = args[0]
          txt2 = args[1]      
          getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${LomKey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
           design.sendMessage(from, gambar, image, {quoted:mek, caption: 'Nih kak'}).catch(e => {
          reply(mess.error.api)
          console.log(e)
          })
          limitAdd(sender, limit)
          })          
          break
          // Ephoto 360 //
    case 'wetglass':     case 'multicolor3d':
    case 'watercolor':    case 'luxurygold':
    case 'galaxywallpaper':  case 'lighttext':
    case 'beautifulflower':  case 'puppycute':
    case 'royaltext':      case 'heartshaped':
    case 'birthdaycake':  case 'galaxystyle':
    case 'hologram3d':  case 'greenneon':
    case 'glossychrome': case 'greenbush':
    case 'metallogo':    case 'noeltext':
    case 'glittergold':    case 'textcake':
    case 'starsnight':    case 'wooden3d':
    case 'textbyname':  case 'writegalacy':
    case 'galaxybat':    case 'snow3d':
    case 'birthdayday':  case 'goldplaybutton':
    case 'silverplaybutton': case 'freefire':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (args.length == 0) return reply(`Example: ${prefix + command} designbot`)
          reply(mess.wait)
          ini_txt = args.join(" ")      
          getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${LomKey}&text=${ini_txt}`).then((gambar) => {
          design.sendMessage(from, gambar, image, {quoted:mek, caption: 'Nih kak'}).catch(e => {
          reply(mess.error.api)
          console.log(e)
          })
          limitAdd(sender, limit)
          })
          break
                         
          
case  'blowjob':
      if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
if (!isPremium) return reply('Anda Bukan User VIP') 
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
//design.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./fake/media/miku.jpg')})
reply('dosa:v')
break
case  'hentai': 
      if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
if (!isPremium) return reply('Anda Bukan User VIP') 
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
//design.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./fake/media/miku.jpg')})
reply('dosaa')
break
case  'neko':
      if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
if (!isPremium) return reply('Anda Bukan User VIP') 
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
//design.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./fake/media/miku.jpg')})
reply('dosaa')
break
case  'trapnime':
      if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
if (!isPremium) return reply('Anda Bukan User VIP') 
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
//design.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./fake/media/miku.jpg')})
reply('dosaa')
break

    case 'ahegao':
    case 'ass':
    case 'bdsm':
    case 'cuckold':
    case 'cum':
    case 'ero':
    case 'femdom':
    case 'foot':
    case 'glasses':
    case 'jahy':
    case 'yuri':
    case 'manga':
    case 'pussy':
    case 'thighs':
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
          if (!isGroup) return reply(mess.only.group)        
          if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)       
function _0x1a28(_0x4bbb5c,_0x7612f){var _0x4fba6e=_0x4fba();return _0x1a28=function(_0x1a282e,_0x173fcf){_0x1a282e=_0x1a282e-0x194;var _0x61baf=_0x4fba6e[_0x1a282e];return _0x61baf;},_0x1a28(_0x4bbb5c,_0x7612f);}var _0x1616de=_0x1a28;(function(_0x46840e,_0x5bd52){var _0x247235=_0x1a28,_0x10bbf7=_0x46840e();while(!![]){try{var _0x10dd73=-parseInt(_0x247235(0x19a))/0x1*(parseInt(_0x247235(0x19f))/0x2)+-parseInt(_0x247235(0x19e))/0x3*(parseInt(_0x247235(0x19d))/0x4)+parseInt(_0x247235(0x194))/0x5*(-parseInt(_0x247235(0x19c))/0x6)+parseInt(_0x247235(0x1a0))/0x7*(parseInt(_0x247235(0x1a1))/0x8)+parseInt(_0x247235(0x199))/0x9*(parseInt(_0x247235(0x19b))/0xa)+-parseInt(_0x247235(0x198))/0xb*(-parseInt(_0x247235(0x195))/0xc)+parseInt(_0x247235(0x197))/0xd;if(_0x10dd73===_0x5bd52)break;else _0x10bbf7['push'](_0x10bbf7['shift']());}catch(_0x51d5c2){_0x10bbf7['push'](_0x10bbf7['shift']());}}}(_0x4fba,0x56a18));if(!isPremium)return reply('Anda\x20Bukan\x20User\x20VIP');function _0x4fba(){var _0xbcc374=['3570rlBrhY','4998DlcvEK','16DMYeFg','505017JPGSfr','2ArCEmS','4815629ztJvQL','8wKUzNe','215pNCnJO','300JNCplf','dosaaa','628589gCcRUs','107239jplziL','17370uFfJyh','605020SnRRMR'];_0x4fba=function(){return _0xbcc374;};return _0x4fba();}reply(_0x1616de(0x196)),limitAdd(sender,limit);
          break
          
//++Menunya          
    case 'allmenu': case 'm2':                        
          if (!isFakebotz) return sendButMessage(from, daftar1, daftar2, daftar3, { quoted: troli}) 
           if (isBanned) return reply(mess.ban)
          but = [
           { buttonId: `!owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ️' }, type: 1 },
           { buttonId: `!sewa`, buttonText: { displayText: 'sᴇᴡᴀ' }, type: 1 }]
          sendButton(from, allmenu(), fake, but, troli)
          break 
    case 'ffshop':      
          var { epep } = require('./fake/shop/listsale.js')
          reply(epep())
          break
          
case 'menu':
      if (isBanned) return reply(mess.ban)
           if (modelmenu == "gakdiset") return reply('set menu dulu kali bang!!')
           	try {
					ppx = await design.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppx = imgtobot
					}
					img = await getBuffer(ppx)
               menu =`# Hallo @${sender.split('@')[0]}
• Status User : ${premi}
• Limit User : ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
• Limit Game : ${isOwner ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
• Uang User : $${(getBalance(sender, balance))}
• Kasus Covid : ${copid[0].kasus}
• Kasus Sembuh : ${copid[0].sembuh}
• Kasus Kematian : ${copid[0].kematian}
• Nama Owner : ${Miminnya}
• Nama Bot : ${BotName}
• Mode : ${publik ? 'Public' : 'Self'}
• Runtime : ${runtime(process.uptime())}
• Total Chat : ${totalchat.length} Chat
• Total Pengguna : ${_user.length} User
• Hit Today : ${hit_today.length} Hit
• Total Hit : ${totalhit} Hit
• Browser : ${design.browserDescription[1]}
• Server : ${design.browserDescription[0]}
• Version : ${design.browserDescription[2]}
• Handphone : ${design.user.phone.device_manufacturer}
• Speed :  ${latensi.toFixed(4)} Second
• Versi Whatsapp : ${design.user.phone.wa_version}`
            if (modelmenu == "loc") {
            // menu button loc
            await sendButLocation(from, menu, fake, img, [{buttonId:`!allmenu`,buttonText:{displayText:'ALLMENU'},type:1},{buttonId:`!info`,buttonText:{displayText:'INFO'},type:1},{buttonId:`!info2`,buttonText:{displayText:'DEVINFO'},type:1}], {contextInfo: { mentionedJid:[senderr]}})
            } else if (modelmenu == "fyt") {
            // menu fake yt
                    var menx = monospace(`​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​• Status User : ${premi}
• Limit User : ${isOwner ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
• Limit Game : ${isOwner ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
• Uang User : $${(getBalance(sender, balance))}
• Kasus Covid : ${copid[0].kasus}
• Kasus Sembuh : ${copid[0].sembuh}
• Kasus Kematian : ${copid[0].kematian}
• Nama Owner : ${Miminnya}
• Nama Bot : ${BotName}
• Mode : ${publik ? 'Public' : 'Self'}
• Runtime : ${runtime(process.uptime())}
• Total Chat : ${totalchat.length} Chat
• Total Pengguna : ${_user.length} User
• Hit Today : ${hit_today.length} Hit
• Total Hit : ${totalhit} Hit
• Browser : ${design.browserDescription[1]}
• Server : ${design.browserDescription[0]}
• Version : ${design.browserDescription[2]}
• Handphone : ${design.user.phone.device_manufacturer}
• Speed :  ${latensi.toFixed(4)} Second
• Versi Whatsapp : ${design.user.phone.wa_version}`)
design.sendMessage(from, {"contentText": menx,"footerText": `${fake}\n${wita} || ${tanggal()}`,
"buttons": [
{buttonId: `!info`, buttonText: {displayText: 'HOW?'}, type: 1},
{buttonId: `!allmenu`, buttonText: {displayText: 'ALLMENU‍️'}, type: 1},
{buttonId: `!sewa`, buttonText: {displayText: 'SEWA'}, type: 1}],
"headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/pdf",
            "title": "design.pdf",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "1111",
            "pageCount": 1111,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "ZEEBOT BY #Febriansyah.pdf",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",         
  }}, MessageType.buttonsMessage,{ quoted: troli, sendEphemeral: true, contextInfo:{"forwardingScore":1111,"isForwarded":true, "externalAdReply":{"title": `Hai Kak ${pushname} ${ucapanWaktu}`, "body": 'susbcribe YouTube devoloper👑', mediaType: 2, thumbnail: fs.readFileSync('./media/fakeyt.jpg'),"previewType": "VIDEO","mediaUrl": `https://youtu.be/KnVIKuN3Q_w`}}})
  
} else if (modelmenu == 'catalog') {

           var imgs = await design.prepareMessage('0@c.us', tamnel, image, { thumbnail: tamnel })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await design.prepareMessageFromContent(from, {
            "productMessage": {
            "product": {
            "productImage": imgCatalog,
            "productId": "4457725420906655",
            "title": `THIS IS A MENU`,
            "description": allmenu(),
            "footerText": `メ${BotName}`,
            "currencyCode": "USD",
            "priceAmount1000": "0",
            "productImageCount": 1,
            "firstImageId": 1,
            "salePriceAmount1000": "0",
            "retailerId": `Please Use command Example : ${prefix}sticker`,
            "url": "blm ada"
            },
            "businessOwnerJid": `${ownerNumber}@s.whatsapp.net`,
            }
            }, { quoted: troli, mimetype: 'image/jpeg' })
            design.relayWAMessage(ctlg)
}
break          

    case 'info':
      var { info } = require('./fake/info')          
      reply(info(pushname))
      design.sendMessage(from, 'Tanyakan lebih lanjut ke owner', text)
case 'owner':
vcard3 = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'N:Sy;Bot;;;\n' +
            `FN:${Miminnya}\n` +
            `item1.TEL;waid=${ownerNumber}:${ownerNumber}\n` +
            `item1.X-ABLabel:👑 Creator\n` +
            `item2.EMAIL;type=INTERNET:febzabotzofc@gmail.com\n` +
            `item2.X-ABLabel:📧 Email\n` +
            `item3.URL:https://youtube.com/c/febzabotz/\n` +
            `item3.X-ABLabel:⚙️ Channel Owner\n` +
            `item4.ADR:;;🇮🇩 Indonesia;;;;\n` +
            `item4.X-ABADR:ac\n` +
            `item4.X-ABLabel:🌍 Region\n` +
            `item5.X-ABLabel:⚔️ design - Botz Owner\n` +
            'END:VCARD'.trim()
design.sendMessage(from, {displayName: `Creator Febriansyah`, vcard: vcard3}, contact, 
{ quoted: troli, 
})
break

   default:
   if (isCmd) {      
          menu = monospace(`*Maaf kak ${pushname}_<\nCommand ${command} Tidak tersedia di list menu!!\nMohon cek kembali list menu nya kak*`)
          but = [{ buttonId: `!menu`, buttonText: { displayText: 'MENU' }, type: 1 }]
          sendButton(from, menu, 'FakeBotz', but, troli)
          }

          if (isSimi && bodi != undefined){
          res = await axios.get(`https://api-sv2.simsimi.net/v2/?text=${bodi}&lc=id`)
          pp = res.data.success
          design.sendMessage(from, pp, text)
          }

          if (budy.startsWith('>') && isOwner) {
          console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
	      try {
	      let evaled = await eval(budy.slice(2))
		  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
		  Febriansyah(`${evaled}`)
	      } catch (err) {
	      reply(`${err}`)
		  }
		  } else if (budy.startsWith('x') && isOwner) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
		  try {
	 	  return design.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
	      } catch (err) {
		  e = String(err)
		  reply(e)
		  }
	      }
          }
		
    	  } catch (e) {
          e = String(e)
          if (!e.includes("this.isZero") && !e.includes("jid")) {
    	  console.log('ERROR TOD : %s', color(e, 'red'))
          }
    	  }
          }