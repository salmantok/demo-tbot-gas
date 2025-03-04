import { writeFile } from 'fs/promises';

const claspConfig = { rootDir: 'src' };

await writeFile('.clasp.json', JSON.stringify(claspConfig, null, 2));
console.log('✅ clasp.json updated successfully.');
