import fetch from 'node-fetch' 
import yts from 'yt-search'
const {
    proto,
    generateWAMessageFromContent,
    prepareWAMessageMedia
  } = (await import('@adiwajshing/baileys')).default
  
let handler = async (m, { conn, args, text, isPrems, isOwner, usedPrefix, command }) => {

if (!text) {
    return m.reply(`   ✧Uso: ${usedPrefix}${command} Joji Ew`);
  }
  try {
    let results = await yts(text);
    let tes = results.all[0]
    let {
      title,
      thumbnail,
      timestamp,
      views,
      ago,
      url
    } = tes;
    let texto = "\n*" + title + "*" + "\n\n      *✧ `Duracion`:* " + timestamp + "\n      *✧ `Vistas`:* " + views + "\n      *✧ `Publicado`:* " + ago + "\n";
    let msg = generateWAMessageFromContent(m.chat, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': texto
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': wm
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'hasMediaAttachment': false,
              ...(await prepareWAMessageMedia({
                'image': {
                  'url': thumbnail
                }
              }, {
                'upload': conn.waUploadToServer
              }))
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "quick_reply",
                'buttonParamsJson': "{\"display_text\":\"Audio\",\"id\":\".ytmp3 " + url + "\"}"
              },{
                'name': "quick_reply",
                'buttonParamsJson': "{\"display_text\":\"Video\",\"id\":\".ytmp4 " + url + "\"}"
              },{
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"Mirar en Youtube","url":"${url}","merchant_url":"https://"}`
              },{
                "name": "cta_copy",
                "buttonParamsJson": JSON.stringify({
                "display_text": `Copiar Link`,
                "copy_code": `${url}`
                })
              }]
            })
          })
        }
      }
    }, {
      'quoted': m
    });
    return await conn.relayMessage(m.chat, msg.message, {});
  } catch (err) {
    m.reply("error")
    console.log(err)
  }
}
handler.help = ['play *<consulta>*']
handler.tags = ['downloader']
handler.command = ['play']
//handler.limit = 1
handler.register = true 

export default handler