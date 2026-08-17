export const BEGINNER_LESSONS=[
 {id:'pulso',title:'Sonido, pulso y ritmo',href:'lesson.html?id=pulso'},
 {id:'pentagrama',title:'Pentagrama y claves',href:'lesson.html?id=pentagrama'},
 {id:'alteraciones',title:'Notas y alteraciones',href:'lesson.html?id=alteraciones'},
 {id:'figuras',title:'Figuras y silencios',href:'lesson.html?id=figuras'},
 {id:'compases',title:'Compases',href:'lesson.html?id=compases'},
 {id:'tonos',title:'Tonos y semitonos',href:'lesson.html?id=tonos'},
 {id:'intervalos',title:'Intervalos',href:'lesson.html?id=intervalos'},
 {id:'acorde-mayor',title:'Cómo se forma un acorde mayor',href:'index.html'}
];
export function progressSummary(values={}){const completed=BEGINNER_LESSONS.filter(l=>values[`la-clave:${l.id}`]==='complete'||(l.id==='acorde-mayor'&&values['la-clave:lesson-1']==='complete'));const started=BEGINNER_LESSONS.filter(l=>values[`la-clave:${l.id}`]==='started');const next=BEGINNER_LESSONS.find(l=>!completed.some(c=>c.id===l.id))||BEGINNER_LESSONS.at(-1);const practice=Math.max(0,Math.min(100,Number(values['la-clave:practice-best'])||0));return {completed:completed.length,started:started.length,total:BEGINNER_LESSONS.length,percent:Math.round(completed.length/BEGINNER_LESSONS.length*100),practice,next,hasActivity:completed.length>0||started.length>0||practice>0}}
import {LESSONS} from './routes-data.js';import {courseProgress} from './learning-progress-domain.js';
export function routeProgress(summary,values){if(!values){values={};if(typeof localStorage!=='undefined')for(let index=0;index<localStorage.length;index++){const key=localStorage.key(index);if(key?.startsWith('la-clave:'))values[key]=localStorage.getItem(key)}}const progress=courseProgress(LESSONS,values),meta={principiante:['Fundamentos','Principiante'],intermedio:['Armonía aplicada','Intermedio'],avanzado:['Lenguaje y creación','Avanzado'],guitarra:['Guitarra','Instrumento']};return progress.map(item=>({name:meta[item.route]?.[0]||item.route,level:meta[item.route]?.[1]||'Ruta',completed:item.completed,total:item.total,percent:item.percent}))}
export const GUITAR_SKILLS=[{order:1,name:'Instrumento y afinación',href:'guitar-foundations.html'},{order:2,name:'Acordes abiertos',href:'guitar-first-chords.html'},{order:3,name:'Ritmo y acompañamiento',href:'guitar-rhythm.html'},{order:4,name:'Mapa del diapasón',href:'guitar-fretboard.html'},{order:5,name:'Escalas y arpegios',href:'guitar-scales.html'},{order:6,name:'Armonía aplicada',href:'guitar-harmony.html'},{order:7,name:'Biblioteca de acordes',href:'chord-library.html'}];
export function guitarProgress(values={}){const skills=GUITAR_SKILLS.map(skill=>({...skill,complete:values[`la-clave:course:guitarra:${skill.order}`]==='complete'})),completed=skills.filter(skill=>skill.complete).length,next=skills.find(skill=>!skill.complete)||skills.at(-1);return{completed,total:skills.length,percent:Math.round(completed/skills.length*100),skills,next,complete:completed===skills.length}}
