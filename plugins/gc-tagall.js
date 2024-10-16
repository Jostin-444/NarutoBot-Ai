const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
 
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `⇢=͟͟͞͞🄰νίऽ૭ : ${pesan}`;
  let teks = `(づ｡◕‿◕｡)づ мєη¢ιóη gєηєяαℓ "\n  ⧼P̼⧽= ${participants.length} ℙ𝐀𝔍𝐈ꪀəﻜ\n\n ${oi}\n\n╭•┈┈•┈┈⊰🍿⃪᜔꫶┈•┈┈•◌ᜓ ݊ ᜒ𝅄\n`;
  for (const mem of participants) {
    teks += `│ ❏ᝰ. @${mem.id.split('@')[0]}\n`;
  }
  teks += `╰─┐ • •ㅤ•-ˏˋ✿ˊˎ-• •ㅤ•
        ꒷︶︶꒷︶︶꒷꒦︶✧꒷₊˚`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['todos <mesaje>'];
handler.tags = ['grupo'];
handler.command = /^(tagall|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;