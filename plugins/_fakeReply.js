import fetch from 'node-fetch'

export async function before(m, { conn }) {
let name = '𝑮𝒆𝒏𝒆𝒔𝒊𝒔-𝑩𝒐𝒕 - 𝑪𝒉𝒂𝒏𝒏𝒆𝒍'
let imagenes = ["https://iili.io/dsvLXUJ.md.png",
"https://iili.io/dsvpB1I.md.png",
"https://iili.io/dsvyI3P.md.png",
"https://iili.io/ds8JsVf.md.png",
"https://iili.io/ds83u8N.md.png",
"https://iili.io/ds8FYJV.md.png",
"https://iili.io/ds8fK92.md.png"]

let icono = imagenes[Math.floor(Math.random() * imagenes.length)]


global.rcanal = {
 contextInfo: {
     	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363220939514640@newsletter",
      serverMessageId: 100,
      newsletterName: name,
   }, 
   externalAdReply: {
    showAdAttribution: true, 
    title: botname, 
    body: textbot, 
    mediaUrl: null, 
    description: null, 
    previewType: "PHOTO", 
    thumbnailUrl: icono, 
    sourceUrl: canal, 
    mediaType: 1, 
    renderLargerThumbnail: false }, 
    }, 
    }


 global.fake = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363220939514640@newsletter",
      serverMessageId: 100,
      newsletterName: name,
    },
    },
  }
}