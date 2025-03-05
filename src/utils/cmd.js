export function cmd(bot) {
  bot.start((ctx) => {
    ctx.reply(
      'Halo, Selamat datang di bot @demo_tbot_gas_bot\nKontak: /kontak'
    );
  });

  bot.cmd('kontak', (ctx) => {
    ctx.reply('@salmantok_dev');
  });

  // Tambahkan command lain di sini
}
