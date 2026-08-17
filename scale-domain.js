import {normalizePitch,LATIN,INTL} from './music-domain.js';
export const LATIN_FLAT=['Do','Re♭','Re','Mi♭','Mi','Fa','Sol♭','Sol','La♭','La','Si♭','Si'];
export const INTL_FLAT=['C','D♭','D','E♭','E','F','G♭','G','A♭','A','B♭','B'];
export const SCALES={
 chromatic:{name:'Cromática',intervals:[0,1,2,3,4,5,6,7,8,9,10,11],degrees:['1','♭2','2','♭3','3','4','♭5','5','♭6','6','♭7','7']},
 major:{name:'Mayor',intervals:[0,2,4,5,7,9,11],degrees:['1','2','3','4','5','6','7']},
 naturalMinor:{name:'Menor natural',intervals:[0,2,3,5,7,8,10],degrees:['1','2','♭3','4','5','♭6','♭7']},
 majorPentatonic:{name:'Pentatónica mayor',intervals:[0,2,4,7,9],degrees:['1','2','3','5','6']},
 minorPentatonic:{name:'Pentatónica menor',intervals:[0,3,5,7,10],degrees:['1','♭3','4','5','♭7']},
 blues:{name:'Blues',intervals:[0,3,5,6,7,10],degrees:['1','♭3','4','♭5','5','♭7']},
 ionian:{name:'Jónico',intervals:[0,2,4,5,7,9,11],degrees:['1','2','3','4','5','6','7']},
 dorian:{name:'Dórico',intervals:[0,2,3,5,7,9,10],degrees:['1','2','♭3','4','5','6','♭7']},
 phrygian:{name:'Frigio',intervals:[0,1,3,5,7,8,10],degrees:['1','♭2','♭3','4','5','♭6','♭7']},
 lydian:{name:'Lidio',intervals:[0,2,4,6,7,9,11],degrees:['1','2','3','♯4','5','6','7']},
 mixolydian:{name:'Mixolidio',intervals:[0,2,4,5,7,9,10],degrees:['1','2','3','4','5','6','♭7']},
 aeolian:{name:'Eólico',intervals:[0,2,3,5,7,8,10],degrees:['1','2','♭3','4','5','♭6','♭7']},
 locrian:{name:'Locrio',intervals:[0,1,3,5,6,8,10],degrees:['1','♭2','♭3','4','♭5','♭6','♭7']}
};
export function scale(root,type='major'){const def=SCALES[type]||SCALES.major;return{root:normalizePitch(root),type,definition:def,pitches:def.intervals.map(i=>normalizePitch(root+i))}}
export function noteName(pitch,useFlats=false,international=false){const names=international?(useFlats?INTL_FLAT:INTL):(useFlats?LATIN_FLAT:LATIN);return names[normalizePitch(pitch)]}
export function degreeForPitch(root,type,pitch){const def=SCALES[type]||SCALES.major,index=def.intervals.findIndex(i=>normalizePitch(root+i)===normalizePitch(pitch));return index<0?null:def.degrees[index]}
export function fretboardPositions(root,type,maxFret=15){const tuning=[{pc:4,midi:64},{pc:11,midi:59},{pc:7,midi:55},{pc:2,midi:50},{pc:9,midi:45},{pc:4,midi:40}];return tuning.map((string,stringIndex)=>Array.from({length:maxFret+1},(_,fret)=>{const pitch=normalizePitch(string.pc+fret),degree=degreeForPitch(root,type,pitch);return{string:stringIndex+1,fret,pitch,midi:string.midi+fret,degree,inScale:degree!==null,isRoot:degree==='1'}}))}
