import FormData from 'form-data';
import axios from 'axios';
import cheerio from 'cheerio';

const handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(`✧ Ejemplo: ${usedPrefix + command} Gata only`);
async function ytdl(query) {
 const form = new FormData();
 form.append('query', query);

 try {
 const response = await axios.post('https://yttomp4.pro/', form, {
 headers: {
 ...form.getHeaders()
 }
 });

 const $ = cheerio.load(response.data);

 const results = {
 success: true,
 title: $('.vtitle').text().trim(),
 duration: $('.res_left p').text().replace('Duracion: ', '').trim(),
 image: $('.ac img').attr('src'),
 video: [],
 audio: [],
 other: []
 };
 
 $('.tab-item-data').each((index, tab) => {
 const tabTitle = $(tab).attr('id');
 $(tab).find('tbody tr').each((i, element) => {
 const fileType = $(element).find('td').eq(0).text().trim();
 const fileSize = $(element).find('td').eq(1).text().trim();
 const downloadLink = $(element).find('a.dbtn').attr('href');

 if (tabTitle === 'tab-item-1') {
 results.video.push({
 fileType,
 fileSize,
 downloadLink
 });
 } else if (tabTitle === 'tab-item-2') {
 results.audio.push({
 fileType,
 fileSize,
 downloadLink
 });
 } else if (tabTitle === 'tab-item-3') {
 results.other.push({
 fileType,
 fileSize,
 downloadLink
 });
 }
 });
 });
 
 return results;
 } catch (error) {
 return { success: false, message: error.message };
 console.log('Error:' + error);
 }
}

let ytdata = await ytdl(text);
console.log(ytdata);
};
handler.help = ["yt2 *<consulta>*"]
handler.tags = ["downloader"]
handler.command = /^(yt2)$/i

export default handler