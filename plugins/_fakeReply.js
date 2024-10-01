import fetch from 'node-fetch'

export async function before(m, { conn }) {
let name = '𝑵𝒂𝒓𝒖𝒕𝒐𝑩𝒐𝒕- 𝑴𝑫 - 𝑪𝒉𝒂𝒏𝒏𝒆𝒍'
let imagenes = ["https://iili.io/dtLKOBI.md.jpg",
"https://iili.io/dtLBx1I.md.jpg",
"https://iili.io/dtLCWFI.md.jpg",
"https://iili.io/dtLnzRn.md.jpg",
"https://iili.io/dtLoqzb.md.jpg",
"https://iili.io/dtLx2GR.md.jpg",
"https://iili.io/dtLxM6Q.md.jpg"]

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