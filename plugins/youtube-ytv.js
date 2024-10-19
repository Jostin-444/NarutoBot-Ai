import Starlights from '@StarlightsTeam/Scraper'
import fetch from 'node-fetch' 
let limit = 100

let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {
 if (!text) throw m.reply(`   ✧Uso: ${usedPrefix}${command} <YouTube Video Link>`);

await m.react('🕓')
try {
let { title, duration, size, thumbnail, dl_url } = await Starlights.ytmp4v2(args[0])

let img = await (await fetch(`${thumbnail}`)).buffer()
if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal).then(_ => m.react('✖️'))
await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: `${title}`, mimetype: 'video/mp4', fileName: `${title}` + `.mp4`}, {quoted: m })
await m.react('✅')
} catch {
try {
let { title, size, quality, thumbnail, dl_url } = await Starlights.ytmp4(args[0])

let img = await (await fetch(`${thumbnail}`)).buffer()
if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal).then(_ => m.react('✖️'))
await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: `${title}`, mimetype: 'video/mp4', fileName: `${title}` + `.mp4`}, {quoted: m })
await m.react('✅')
} catch {
await m.react('✖️')
}}}
handler.help = ['ytmp4 *<link yt>*']
handler.tags = ['downloader']
handler.command = ['ytmp4', 'ytv', 'yt']
//handler.limit = 1
handler.register = true 

export default handler