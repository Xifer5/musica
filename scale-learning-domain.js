import {scale,noteName} from './scale-domain.js'
export const SCALE_PATTERNS={major:{label:'Mayor',steps:[2,2,1,2,2,2,1],formula:['T','T','S','T','T','T','S']},naturalMinor:{label:'Menor natural',steps:[2,1,2,2,1,2,2],formula:['T','S','T','T','S','T','T']}}
export function scaleLesson(root=0,type='major'){
 const safeType=SCALE_PATTERNS[type]?type:'major',built=scale(root,safeType),pattern=SCALE_PATTERNS[safeType]
 return {...built,label:pattern.label,formula:pattern.formula,notes:[...built.pitches,built.root].map((pitch,index)=>({pitch,name:noteName(pitch),degree:index===7?'8':String(index+1),offset:index===7?12:built.definition.intervals[index]}))}
}
export function scalePlaybackPlan(root=0,type='major',descending=false){const notes=scaleLesson(root,type).notes.map(note=>60+root+note.offset);return (descending?[...notes].reverse():notes).map((midi,index)=>({midi,delay:index*.24,duration:.32}))}
export function scaleDifference(){return[{degree:'3',major:'3',minor:'♭3'},{degree:'6',major:'6',minor:'♭6'},{degree:'7',major:'7',minor:'♭7'}]}
