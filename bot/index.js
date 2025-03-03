import { cmd } from './utils/cmd.js';

// Dapatkan Properti Skrip untuk `bot_token` dan `webhook_url` yang ditentukan di Pengaturan > Properti Skrip
const userProperties = PropertiesService.getScriptProperties();

// identifikasi `bot_token`
const bot_token = userProperties.getProperty('BOT_TOKEN');

// identifikasi `webhook_url`
const webhook_url = userProperties.getProperty('WEBHOOK_URL');

// Periksa apakah bot_token dan webhook_url berjalan dengan benar tanpa kesalahan, jika ada kesalahan maka tampilkan `Error`
if (!bot_token || !webhook_url) {
  throw new Error(
    '❌ bot_token atau webhook_url tidak ditemukan di Properti Skrip!'
  );
}

const bot = new smn.init(bot_token);

function doPost(e) {
  bot.doPost(e);
}

function setWebHook() {
  try {
    const result = bot.telegram.setWebhook(webhook_url);
    console.log('✅ Webhook berhasil diatur:', result);
  } catch (error) {
    console.error('❌ Gagal mengatur Webhook:', error);
  }
}

globalThis.doPost = doPost;
globalThis.setWebHook = setWebHook;

// Pastikan fungsi yang dipanggil berjalan tanpa kesalahan.
try {
  cmd(bot);
  // Tambahkan panggilan fungsi lainnya di sini.
} catch (error) {
  console.error('❌ Error pada cmd(bot):', error);
  // Tambahkan penanganan kesalahan untuk fungsi lainnya di sini.
}
