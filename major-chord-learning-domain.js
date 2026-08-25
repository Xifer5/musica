import {majorChord,chord,guitarShape,midiForChord} from './music-domain.js'
const ROLES=[{degree:'1',role:'Tónica',interval:'0 semitonos'},{degree:'3',role:'Tercera mayor',interval:'4 semitonos'},{degree:'5',role:'Quinta justa',interval:'7 semitonos'}]
const MINOR_ROLES=[{degree:'1',role:'Tónica',interval:'0 semitonos'},{degree:'♭3',role:'Tercera menor',interval:'3 semitonos'},{degree:'5',role:'Quinta justa',interval:'7 semitonos'}]
const LATIN_FLATS=['Do','Re♭','Re','Mi♭','Mi','Fa','Sol♭','Sol','La♭','La','Si♭','Si']
const INTL_FLATS=['C','D♭','D','E♭','E','F','G♭','G','A♭','A','B♭','B']
export function majorChordLesson(root=0){
 const built=majorChord(root),midis=midiForChord(root,'major')
 return {...built,shape:guitarShape(built.root,'major'),tones:built.notesLatin.map((name,index)=>({...ROLES[index],name,midi:midis[index]}))}
}
export function minorChordLesson(root=0){
 const built=chord(root,'minor'),midis=midiForChord(root,'minor')
 const notesLatin=midis.map(midi=>LATIN_FLATS[midi%12]),notesIntl=midis.map(midi=>INTL_FLATS[midi%12])
 return {...built,notesLatin,notesIntl,shape:guitarShape(built.root,'minor'),tones:notesLatin.map((name,index)=>({...MINOR_ROLES[index],name,midi:midis[index]}))}
}
export function chordPlaybackPlan(root=0,mode='chord',type='major'){
 const notes=midiForChord(root,type==='minor'?'minor':'major')
 return notes.map((midi,index)=>({midi,delay:mode==='arpeggio'?index*.34:0,duration:mode==='arpeggio'?.55:.9}))
}
