import { writeFile } from 'fs/promises';
import 'dotenv/config';

const claspConfig = {
  scriptId: process.env.SCRIPT_ID,
  rootDir: 'dist',
};

await writeFile('.clasp.json', JSON.stringify(claspConfig, null, 2));
console.log('✅ .clasp.json generated successfully.');
