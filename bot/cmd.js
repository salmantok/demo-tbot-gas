export function cmd(bot) {
  // handle untuk user yang mengetik /start
  bot.start((ctx) => ctx.reply('Started!'));

  // handle untuk user yang mengetik /ping
  bot.cmd('ping', (ctx) => ctx.replyIt('Pong!'));

  // Tambahkan command lain di sini
}
