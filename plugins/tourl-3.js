
importar uploadFile desde '../lib/uploadFile.js'
importar uploadImage desde '../lib/uploadImage.js'

dejar controlador = async(m) => {
  sea ​​q = m.citado? m.citado: m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) lanza 'Por favor responde a la foto/video'
  let media = esperar q.descargar()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele? uploadImage: uploadFile)(medios)
  m.reply(`▢ ${media.length} bytes

▢ ${isTele ? '(Sin fecha de vencimiento)' : '(Desconocido)'}
▢ *Enlace:* ${enlace}
  `)
}
handler.help = ['recorrido']
handler.tags = ['herramientas']
handler.command = ['cargar', 'recorrido', 'para enlace']

exportar controlador predeterminado