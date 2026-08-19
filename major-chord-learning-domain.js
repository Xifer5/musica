import {majorChord,guitarShape,midiForChord} from './music-domain.js'
const ROLES=[{degree:'1',role:'Tónica',interval:'0 semitonos'},{degree:'3',role:'Tercera mayor',interval:'4 semitonos'},{degree:'5',role:'Quinta justa',interval:'7 semitonos'}]
export function majorChordLesson(root=0){
 const built=majorChord(root),midis=midiForChord(root,'major')
 return {...built,shape:guitarShape(built.root,'major'),tones:built.notesLatin.map((name,index)=>({...ROLES[index],name,midi:midis[index]}))}
}
export function chordPlaybackPlan(root=0,mode='chord'){
 const notes=midiForChord(root,'major')
 return notes.map((midi,index)=>({midi,delay:mode==='arpeggio'?index*.34:0,duration:mode==='arpeggio'?.55:.9}))
}
