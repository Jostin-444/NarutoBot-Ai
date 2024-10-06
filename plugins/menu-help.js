import ws from 'ws';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    let uniqueUsers = new Map();

/*    global.conns.forEach((conn) => {
        if (conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED) {
            uniqueUsers.set(conn.user.jid, conn);
        }
    });*/

    let users = [...uniqueUsers.values()];
    let totalUsers = users.length;
    let totalusr = Object.keys(global.db.data.users).length;
    let rtotal = Object.entries(global.db.data.users).length || '0'
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let username = conn.getName(m.sender);
    let locale = 'es';
    let d = new Date(new Date + 3600000);
    let time = d.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

/*    let sbot =
        conn.user.jid == global.conn.user.jid
        ? "`ʙᴏᴛ ::` Principal"
        : "`ꜱᴜʙʙᴏᴛ ᴅᴇ ::`" + `  Wa.me/${global.conn.user.jid.split`@`[0]}`;*/

/*    global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: ``,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${username}\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };*/

    let totalreg = Object.keys(global.db.data.users).length;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;

    m.react("🤍");
    let menu = ``;

    let txt = ""
    txt += '⍣ `ᴄʀᴇᴀᴅᴏʀ ::`' + ` Angel-OFC\n`;
    txt += '⍣ `ʙᴏᴛ ::`' + ` GenesisBot-MD\n`;
    txt += '⍣ `ꜰᴇᴄʜᴀ ::`' + ` ${fecha}\n`;
    txt += '⍣ `ᴠᴇʀꜱɪᴏɴ ::`' + ` ${vs}\n`;
//    txt += ⍣ `${sbot}\n`;
    txt += '⍣ `ᴘʀᴇꜰɪᴊᴏ ::`' + ` [  ${usedPrefix}  ]\n`;
    txt += '⍣ `ᴜꜱᴜᴀʀɪᴏꜱ ::`' + ` ${rtotal}\n`;
    txt += '⍣ `ᴠᴇʀɪꜰɪᴄᴀᴅᴏꜱ ::`' + ` ${rtotalreg}\n`;
    txt += '⍣ `ᴀᴄᴛɪᴠᴏ ::`' + ` ${uptime}\n`;
    txt += '⍣ `ᴄᴏɴᴛᴀᴄᴛᴏ ::` #owner\n\n';
    txt += "> ࣭݊ျ֘▹ ʙʏ ɢᴇɴᴇꜱɪꜱʙᴏᴛ-ᴍᴅ x ᴀɴɢᴇʟ-ᴏꜰᴄ";

    let listSections = [];

        listSections.push({
        title: `🔖 SELECCIÓNA LO QUE NECESITES`, highlight_label: `Popular Génesis`,
        rows: [
            {
                header: "፝͡ৎ𝘼𝙐𝙏𝙊 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝙍 ╎✅",
                title: "",
                description: `Verificacion Automáticamente`,
                id: `.reg ꪶ͢ɢᴇɴᴇs᭨s ꫂ❅ۣ .18`,
            },
            {
                header: "፝͡ৎ𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 ╎🤍",
                title: "",
                description: `𝘮𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘤𝘰𝘮𝘱𝘭𝘦𝘵𝘰`,
                id: `.allmenu`,
            },
            {
                header: "፝͡ৎ𝙈𝙀𝙉𝙐 𝘼𝙐𝘿𝙄𝙊𝙎 ╎🔊",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘢𝘶𝘥𝘪𝘰𝘴`,
                id: `${usedPrefix}menuaudios`,
            },
            {
                header: "፝͡ৎ𝙈𝙀𝙉𝙐𝙎 𝙉𝙎𝙁𝙒 ╎🔞",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘤𝘢𝘭𝘪𝘦𝘯𝘵𝘦`,
                id: `${usedPrefix}labiblia`,
            },
            {
                header: "፝͡ৎ𝙈𝙀𝙉𝙐 𝙅𝙐𝙀𝙂𝙊𝙎 ╎🎮",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘫𝘶𝘦𝘨𝘰𝘴`,
                id: `${usedPrefix}menugame`,
            },
            {
                header: "፝͡ৎ𝙈𝙀𝙉𝙐 𝘼𝙉𝙄𝙈𝙀 ╎🌸",
                title: "",
                description: `𝘮𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘢𝘯𝘪𝘮𝘦`,
                id: `${usedPrefix}menugame`,
            },
            {
                header: "፝͡ৎ𝙈𝙀𝙉𝙐 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 ╎📥",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘴`,
                id: `${usedPrefix}menudl`,
            },
            {
                header: "፝͡ৎ𝙈𝙀𝙉𝙐 𝙄𝘼𝙎 ╎🤖",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦 𝘐𝘈-𝘉𝘰𝘵`,
                id: `${usedPrefix}menuai`,
            },
            {
                header: "፝͡ৎ𝙍𝙀𝘿𝙀𝙎 ╎🍄",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘭𝘢𝘴 𝘳𝘦𝘥𝘦𝘴 𝘥𝘦𝘭 𝘣𝘰𝘵`,
                id: `${usedPrefix}redes`,
            },
            {
                header: "፝͡ৎ𝙂𝙍𝙐𝙋𝙊𝙎 ☁️",
                title: "",
                description: `𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘭𝘰𝘴 𝘨𝘳𝘶𝘱𝘰𝘴 𝘥𝘦𝘭 𝘣𝘰𝘵`,
                id: `${usedPrefix}grupos`,
            },
        ],
    });

    let vid = "https://i.ibb.co/1GfRGnL/Sylph.jpg";
    let img = "https://i.ibb.co/JHHsBnv/Sylph.jpg";
    let img2 = "https://i.ibb.co/1GfRGnL/Sylph.jpg";
    let img3 = "https://i.ibb.co/JHHsBnv/Sylph.jpg";
    let img4 = "https://i.ibb.co/1GfRGnL/Sylph.jpg";
    let img5 = "https://i.ibb.co/JHHsBnv/Sylph.jpg";
    let img6 = "https://i.ibb.co/1GfRGnL/Sylph.jpg";
    let img8 = "https://i.ibb.co/JHHsBnv/Sylph.jpg";
    let img9 = "https://i.ibb.co/1GfRGnL/Sylph.jpg";
    let img10 = "https://i.ibb.co/JHHsBnv/Sylph.jpg";
    let img11 = "https://i.ibb.co/1GfRGnL/Sylph.jpg";

    await conn.sendListB(m.chat, menu, txt, ` 𓏲᭨ ̤̤֟✧⏤͟͞ू⃪٭ۣۜ ፝͜⁞M͢ᴇɴᴜs۫۫۫۫۫۫۫۫ ᭄፝🤍𑜟꙲𒁑⁩`, [menu.jpg].getRandom(), listSections, estilo);
};

handler.command = ["menu", "help", "menú"];

export default handler;


function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}


  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;