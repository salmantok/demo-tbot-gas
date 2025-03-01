import { setupCommands } from './handlers.js';

// identifikasi
const token = '123456789:abcdefghijklmno'; // <- isikan token botmu disini
const bot = new libraryName.init(token);

function doPost(e) {
  bot.doPost(e);
}

/*function setWebHook() {
  let url = 'URL-HASIL-DEPLOY';
  let result = bot.telegram.setWebhook(url);
  console.log(result);
}*/

setupCommands(bot);
globalThis.doPost = doPost;
