import {noteAtFret} from './guitar-foundations-domain.js';
export const GUITAR_SCALES=[
 {id:'c-major',name:'Do mayor',symbol:'C mayor',root:0,type:'major',intervals:[0,2,4,5,7,9,11],startMidi:60,tip:'Sin alteraciones: usa Do como punto de reposo.'},
 {id:'a-minor-penta',name:'La pentatónica menor',symbol:'Am pentatónica',root:9,type:'minor',intervals:[0,3,5,7,10],startMidi:57,tip:'Cinco notas y una forma muy usada para improvisar.'},
 {id:'g-major',name:'Sol mayor',symbol:'G mayor',root:7,type:'major',intervals:[0,2,4,5,7,9,11],startMidi:55,tip:'Observa el Fa♯ que caracteriza la tonalidad.'}
];
export function guitarScale(id='c-major'){return GUITAR_SCALES.find(item=>item.id===id)||GUITAR_SCALES[0]}
export function scalePitches(id='c-major'){const scale=guitarScale(id);return scale.intervals.map(interval=>(scale.root+interval)%12)}
export function scalePositions(id='c-major',maxFret=12){const pitches=scalePitches(id),root=guitarScale(id).root;return Array.from({length:6},(_,index)=>6-index).flatMap(string=>Array.from({length:maxFret+1},(_,fret)=>noteAtFret(string,fret))).filter(note=>pitches.includes(note.pitch)).map(note=>({...note,isRoot:note.pitch===root}))}
export function ascendingScaleMidis(id='c-major'){const scale=guitarScale(id);return[...scale.intervals,12].map(interval=>scale.startMidi+interval)}
