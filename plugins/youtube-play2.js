import Starlights from '@StarlightsTeam/Scraper'
import fetch from 'node-fetch' 
import yts from 'yt-search'
let limit = 100

let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
 if (!text) throw m.reply(`   ✧Uso: ${usedPrefix}${command} Joji Ew`);
    let res = await yts(text);
    let videoList = res.all;
    let video = videoList[0];
await m.react('🕓')
try {
let { title, duration, size, thumbnail, dl_url } = await Starlights.ytmp3v2(video.url)

let img = await (await fetch(`${thumbnail}`)).buffer()
if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal).then(_ => m.react('✖️'))
await conn.sendMessage(m.chat, { audio: { url: dl_url }, fileName: title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })
await m.react('✅')
} catch {
try {
let { title, size, quality, thumbnail, dl_url } = await Starlights.ytmp3(video.url)

let img = await (await fetch(`${thumbnail}`)).buffer()
if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal).then(_ => m.react('✖️'))
await conn.sendMessage(m.chat, { audio: { url: dl_url }, fileName: title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })
await m.react('✅')
} catch {
await m.react('✖️')
}
}
}
handler.help = ['play2 *<consulta>*']
handler.tags = ['downloader']
handler.command = ['play2']
//handler.limit = 1
handler.register = true 

export default handler