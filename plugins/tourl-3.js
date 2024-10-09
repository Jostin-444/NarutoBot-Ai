import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'يرجى الرد على صورة/فيديو'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`▢ ${media.length} بايت

▢ ${isTele ? '(بدون تاريخ انتهاء)' : '(غير معروف)'}
▢ *رابط :* ${link}
  `)
}
handler.help = ['tourl3']
handler.tags = ['tools']
handler.command = ['upload3', 'tourl3']

export default handler