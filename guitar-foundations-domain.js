import {normalizePitch} from './music-domain.js';
export const STANDARD_TUNING=[
 {string:1,latin:'Mi',intl:'E4',midi:64,pitch:4,role:'aguda'},
 {string:2,latin:'Si',intl:'B3',midi:59,pitch:11,role:'aguda'},
 {string:3,latin:'Sol',intl:'G3',midi:55,pitch:7,role:'media'},
 {string:4,latin:'Re',intl:'D3',midi:50,pitch:2,role:'media'},
 {string:5,latin:'La',intl:'A2',midi:45,pitch:9,role:'grave'},
 {string:6,latin:'Mi',intl:'E2',midi:40,pitch:4,role:'grave'}
];
export const GUITAR_PARTS={
 acoustic:[
  {id:'headstock',name:'Clavijero',detail:'Sostiene las clavijas que ajustan la tensión de cada cuerda.'},
  {id:'neck',name:'Mástil',detail:'Guía la mano y contiene el diapasón y los trastes.'},
  {id:'frets',name:'Trastes',detail:'Dividen el diapasón en semitonos.'},
  {id:'body',name:'Caja',detail:'Amplifica naturalmente la vibración de las cuerdas.'},
  {id:'soundhole',name:'Boca',detail:'Proyecta el aire que vibra dentro de la caja.'},
  {id:'bridge',name:'Puente',detail:'Ancla las cuerdas y transmite su vibración a la tapa.'}
 ],
 electric:[
  {id:'headstock',name:'Clavijero',detail:'Sostiene las clavijas que afinan las cuerdas.'},
  {id:'neck',name:'Mástil',detail:'Une el clavijero con el cuerpo y sostiene el diapasón.'},
  {id:'frets',name:'Trastes',detail:'Organizan cromáticamente las notas del diapasón.'},
  {id:'body',name:'Cuerpo',detail:'Sostiene el circuito, el puente y los controles.'},
  {id:'pickups',name:'Pastillas',detail:'Convierten la vibración de las cuerdas en señal eléctrica.'},
  {id:'controls',name:'Controles',detail:'Ajustan volumen, tono y selección de pastillas.'}
 ]
};
export function guitarParts(type='acoustic'){return GUITAR_PARTS[type]||GUITAR_PARTS.acoustic}
export function noteAtFret(stringNumber,fret=0){const string=STANDARD_TUNING.find(item=>item.string===Number(stringNumber))||STANDARD_TUNING[0],safeFret=Math.max(0,Math.min(24,Number(fret)||0));return{...string,fret:safeFret,midi:string.midi+safeFret,pitch:normalizePitch(string.pitch+safeFret)}}
export function tuningMnemonic(){return [...STANDARD_TUNING].reverse().map(item=>item.latin).join(' · ')}
