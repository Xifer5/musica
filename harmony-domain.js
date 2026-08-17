import {normalizePitch,chord} from './music-domain.js';

export const MAJOR_DEGREES=[
 {roman:'I',quality:'major',function:'Tónica'},
 {roman:'ii',quality:'minor',function:'Predominante'},
 {roman:'iii',quality:'minor',function:'Tónica'},
 {roman:'IV',quality:'major',function:'Predominante'},
 {roman:'V',quality:'major',function:'Dominante'},
 {roman:'vi',quality:'minor',function:'Tónica'},
 {roman:'vii°',quality:'diminished',function:'Dominante'}
];
const MAJOR_INTERVALS=[0,2,4,5,7,9,11];
export const PROGRESSIONS={
 pop:{name:'Pop esencial',degrees:[0,4,5,3],label:'I · V · vi · IV'},
 cadence:{name:'Cadencia auténtica',degrees:[1,4,0],label:'ii · V · I'},
 classic:{name:'Clásica circular',degrees:[0,5,1,4],label:'I · vi · ii · V'},
 andean:{name:'Color menor relativo',degrees:[5,3,0,4],label:'vi · IV · I · V'}
};
export function harmonizeMajor(root=0){return MAJOR_INTERVALS.map((interval,index)=>{const meta=MAJOR_DEGREES[index],built=chord(normalizePitch(root+interval),meta.quality);return {...built,...meta,degree:index+1,root:normalizePitch(root+interval)}})}
export function buildProgression(root=0,id='pop'){const definition=PROGRESSIONS[id]||PROGRESSIONS.pop,field=harmonizeMajor(root);return {...definition,chords:definition.degrees.map(index=>field[index])}}
