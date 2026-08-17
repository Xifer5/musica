export const LATIN=['Do','Do♯','Re','Re♯','Mi','Fa','Fa♯','Sol','Sol♯','La','La♯','Si'];
export const INTL=['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'];
export const CHORD_TYPES={
 major:{name:'mayor',suffix:'',intervals:[0,4,7],degrees:['1','3','5']},
 minor:{name:'menor',suffix:'m',intervals:[0,3,7],degrees:['1','♭3','5']},
 dominant7:{name:'séptima dominante',suffix:'7',intervals:[0,4,7,10],degrees:['1','3','5','♭7']},
 major7:{name:'séptima mayor',suffix:'maj7',intervals:[0,4,7,11],degrees:['1','3','5','7']},
 minor7:{name:'menor séptima',suffix:'m7',intervals:[0,3,7,10],degrees:['1','♭3','5','♭7']},
 diminished:{name:'disminuido',suffix:'°',intervals:[0,3,6],degrees:['1','♭3','♭5']},
 augmented:{name:'aumentado',suffix:'+',intervals:[0,4,8],degrees:['1','3','♯5']},
 sus2:{name:'suspendido 2',suffix:'sus2',intervals:[0,2,7],degrees:['1','2','5']},
 sus4:{name:'suspendido 4',suffix:'sus4',intervals:[0,5,7],degrees:['1','4','5']},
 sixth:{name:'sexta',suffix:'6',intervals:[0,4,7,9],degrees:['1','3','5','6']},
 minor6:{name:'menor sexta',suffix:'m6',intervals:[0,3,7,9],degrees:['1','♭3','5','6']},
 add9:{name:'novena añadida',suffix:'add9',intervals:[0,2,4,7],degrees:['1','9','3','5']},
 minorAdd9:{name:'menor con novena añadida',suffix:'m(add9)',intervals:[0,2,3,7],degrees:['1','9','♭3','5']},
 dominant9:{name:'novena dominante',suffix:'9',intervals:[0,2,4,7,10],degrees:['1','9','3','5','♭7']},
 major9:{name:'novena mayor',suffix:'maj9',intervals:[0,2,4,7,11],degrees:['1','9','3','5','7']},
 minor9:{name:'menor novena',suffix:'m9',intervals:[0,2,3,7,10],degrees:['1','9','♭3','5','♭7']},
 sevenSus4:{name:'novena suspendida',suffix:'9sus4',intervals:[0,2,5,7,10],degrees:['1','9','4','5','♭7']},
 dominant11:{name:'oncena dominante',suffix:'11',intervals:[0,2,4,5,7,10],degrees:['1','9','3','11','5','♭7']},
 minor11:{name:'menor oncena',suffix:'m11',intervals:[0,2,3,5,7,10],degrees:['1','9','♭3','11','5','♭7']},
 dominant13:{name:'trecena dominante',suffix:'13',intervals:[0,2,4,7,9,10],degrees:['1','9','3','5','13','♭7']},
 halfDiminished:{name:'semidisminuido',suffix:'m7♭5',intervals:[0,3,6,10],degrees:['1','♭3','♭5','♭7']},
 diminished7:{name:'séptima disminuida',suffix:'°7',intervals:[0,3,6,9],degrees:['1','♭3','♭5','𝄫7']}
};
export const MAJOR_INTERVALS=CHORD_TYPES.major.intervals;
export function normalizePitch(value){return((Number(value)%12)+12)%12}
export function chord(root,type='major'){
 const normalized=normalizePitch(root),definition=CHORD_TYPES[type]||CHORD_TYPES.major,pitches=definition.intervals.map(i=>normalizePitch(normalized+i));
 return{root:normalized,type,definition,pitches,latin:LATIN[normalized],symbol:INTL[normalized]+definition.suffix,notesLatin:pitches.map(i=>LATIN[i]),notesIntl:pitches.map(i=>INTL[i])};
}
export function majorChord(root){return chord(root,'major')}
export function transpose(root,semitones){return normalizePitch(Number(root)+Number(semitones))}
export function midiForChord(root,type='major'){const base=60+normalizePitch(root);return(CHORD_TYPES[type]||CHORD_TYPES.major).intervals.map(i=>base+i)}
export function midiFrequency(midi){return 440*Math.pow(2,(midi-69)/12)}

const OPEN_STRINGS=[4,9,2,7,11,4];
const MAJOR_OPEN={0:['x',3,2,0,1,0],2:['x','x',0,2,3,2],4:[0,2,2,1,0,0],5:[1,3,3,2,1,1],7:[3,2,0,0,0,3],9:['x',0,2,2,2,0]};
function fingersFor(frets){const distinct=[...new Set(frets.filter(x=>typeof x==='number'&&x>0))].sort((a,b)=>a-b);return frets.map(f=>typeof f==='number'&&f>0?Math.min(4,distinct.indexOf(f)+1):0)}
export function generateGuitarShape(root,type='major',maxFret=5){
 const tones=new Set(chord(root,type).pitches),options=OPEN_STRINGS.map(open=>['x',...Array.from({length:maxFret+1},(_,f)=>f).filter(f=>tones.has(normalizePitch(open+f)))]);let best=null;
 function walk(string,frets){if(string===6){const played=frets.filter(x=>x!=='x');if(played.length<4)return;const pcs=new Set(frets.map((f,i)=>f==='x'?null:normalizePitch(OPEN_STRINGS[i]+f)).filter(x=>x!==null));if([...tones].some(t=>!pcs.has(t)))return;const numeric=played.filter(f=>f>0),span=numeric.length?Math.max(...numeric)-Math.min(...numeric):0;if(span>4)return;const bassIndex=frets.findIndex(f=>f!=='x'),bass=normalizePitch(OPEN_STRINGS[bassIndex]+frets[bassIndex]);const score=(bass===normalizePitch(root)?0:18)+frets.filter(x=>x==='x').length*5+span*3+numeric.reduce((a,b)=>a+b,0);if(!best||score<best.score)best={frets:[...frets],score};return}for(const f of options[string])walk(string+1,[...frets,f])}walk(0,[]);
 const frets=best?.frets||['x','x','x',0,1,0];return{frets,fingers:fingersFor(frets),name:'Digitación calculada · primeros 5 trastes'};
}
export function guitarShape(root,type='major'){
 if(type==='major'&&MAJOR_OPEN[root]){const frets=MAJOR_OPEN[root];return{frets,fingers:fingersFor(frets),name:'Posición abierta'}}
 return generateGuitarShape(root,type);
}
