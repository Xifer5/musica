import {readFileSync,readdirSync} from 'node:fs';
const files=readdirSync('.').filter(file=>file.endsWith('.html')||file.endsWith('.css')||file.endsWith('.js'));
const css=readFileSync('m3-system.css','utf8');
const checks=[['touch targets',css.includes('min-height:48px')],['mobile breakpoint',/@media\(max-width:560px\)/.test(css)],['text wrapping',css.includes('overflow-wrap:anywhere')],['reduced motion',css.includes('prefers-reduced-motion')],['offline fallback',readFileSync('sw.js','utf8').includes("caches.match('./offline.html')")]];
const missing=checks.filter(([,ok])=>!ok).map(([name])=>name);const pages=files.filter(file=>file.endsWith('.html')).length;
if(missing.length)throw new Error(`Responsive audit failed: ${missing.join(', ')}`);console.log(`Responsive audit OK: ${pages} páginas · ${checks.length} invariantes`);
