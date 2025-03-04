import { writeFile } from 'fs/promises';

const appScriptConfig = {
  timeZone: 'Asia/Jakarta',
  dependencies: {},
  exceptionLogging: 'STACKDRIVER',
  runtimeVersion: 'V8',
};

await writeFile(
  'dist/appsscript.json',
  JSON.stringify(appScriptConfig, null, 2)
);
console.log('✅ appsscript.json updated successfully.');
