import Starlights from '@StarlightsTeam/Scraper'
import fetch from 'node-fetch'
const { proto, generateWAMessageFromContent } = (await import('@adiwajshing/baileys')).default;

let handler = async (m, { conn, text, usedPrefix, command }) => {
       const ej_kenisawa = () => {
        let txt_ejemplo = `*🚩 Ingrese su petición*\n*🪼 Ejemplo de uso:* ${usedPrefix + command} como hacer estrella de papel`;
        let ejemplo = `${usedPrefix + command} como hacer estrella de papel`
    let buttonMessage = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: { text: txt_ejemplo },
                    nativeFlowMessage: {
                        buttons: [{
                "name": "cta_copy",
                "buttonParamsJson": JSON.stringify({
                "display_text": "Copiar Ejemplo",
                "copy_code": `${ejemplo}`
                })
              },],
                    }
                })
            }
        }
    }, { quoted: m });

    conn.relayMessage(m.chat, buttonMessage.message, {});
        }
if (!text) return ej_kenisawa()
await m.react('💬')
try {
let { msg } = await Starlights.openAi(text)
await conn.reply(m.chat, msg, m, rcanal)
} catch {
try {
let { result } = await Starlights.ChatGpt(text)
await conn.reply(m.chat, result, m, rcanal)
} catch {
try {
let { result } = await Starlights.ChatGptV2(text)
await conn.reply(m.chat, result, m, rcanal)
} catch {
try {
let api = await fetch(`https://apis-starlights-team.koyeb.app/starlight/chatgpt?text=${text}`)
let json = await api.json()

if (json.result) {
await conn.reply(m.chat, json.result, m, rcanal)
} else {
await m.react('✖️')
}
} catch {
await m.react('✖️')
}}}}}

handler.help = ['ai *<petición>*']
handler.tags = ['tools']
handler.command = /^(miku|ai|ia|chatgpt|gpt)$/i
handler.register = true

export default handler