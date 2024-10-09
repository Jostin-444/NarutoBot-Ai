import { execSync } from 'child_process'

var handler = async (m, { conn, text }) => {

m.react('🚀') 
try {

const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()

if (messager.includes('☘️ Ya estoy actualizada.')) messager = '☘️ Ya estoy actualizada a la última versión.'

if (messager.includes('💫 Actualizando.')) messager = '✨️ Procesando, espere un momento mientras me actualizo.\n\n' + stdout.toString()
conn.reply(m.chat, messager, m, rcanal,)

}