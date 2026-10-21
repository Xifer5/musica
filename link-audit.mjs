import {readFileSync,readdirSync} from 'node:fs';
const files=readdirSync('.').filter(file=>file.endsWith('.html'));const missing=[];const links=[];
for(const file of files){const html=readFileSync(file,'utf8');for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){const raw=match[1];if(!raw||raw.startsWith('#')||raw.startsWith('http')||raw.startsWith('data:')||raw.startsWith('mailto:'))continue;const path=raw.split('?')[0].split('#')[0];if(!path||path.startsWith('/'))continue;links.push(`${file} → ${path}`);if(!readdirSync('.').includes(path))missing.push(`${file} → ${path}`)}}
if(missing.length){console.error(missing.join('\n'));process.exit(1)}console.log(`Link audit OK: ${files.length} páginas · ${links.length} referencias internas`);
