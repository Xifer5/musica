import {CHORD_TYPES,chord,normalizePitch} from './music-domain.js?v=31';
const OPEN=[4,9,2,7,11,4];
const OPEN_MIDI=[40,45,50,55,59,64];
export const CHORD_FAMILIES=[
 ['Tríadas',['major','minor','diminished','augmented']],
 ['Suspendidos',['sus2','sus4','sevenSus4']],
 ['Sextas y añadidos',['sixth','minor6','add9','minorAdd9']],
 ['Séptimas',['dominant7','major7','minor7','halfDiminished','diminished7']],
 ['Extensiones',['dominant9','major9','minor9','dominant11','minor11','dominant13']]
];
export function chordTypeOptions(){return CHORD_FAMILIES.flatMap(([family,types])=>types.map(type=>({type,family,...CHORD_TYPES[type]})))}
export function spellChordNotes(root=0,type='major'){const harmony=chord(root,type),letters=['Do','Re','Mi','Fa','Sol','La','Si'],naturals=[0,2,4,5,7,9,11],rootLetters=[0,0,1,1,2,3,3,4,4,5,5,6],rootLetter=rootLetters[normalizePitch(root)];return harmony.definition.degrees.map((degree,index)=>{const number=Number(degree.match(/\d+/)?.[0]||1),letter=(rootLetter+(number-1)%7)%7,target=harmony.pitches[index],difference=normalizePitch(target-naturals[letter]),accidental=difference===1?'♯':difference===11?'♭':difference===2?'𝄪':difference===10?'𝄫':'';return letters[letter]+accidental})}
export function voicingNotes(root,type,voicing){const harmony=chord(root,type),names=spellChordNotes(root,type);return voicing.frets.map((fret,string)=>{if(fret==='x')return{string:string+1,muted:true};const midi=OPEN_MIDI[string]+fret,pitch=normalizePitch(midi),index=harmony.pitches.indexOf(pitch);return{string:string+1,muted:false,fret,midi,pitch,name:names[index]||harmony.notesLatin[index]}})}
function fingerNumbers(frets){const used=[...new Set(frets.filter(f=>Number.isFinite(f)&&f>0))].sort((a,b)=>a-b);return frets.map(f=>Number.isFinite(f)&&f>0?Math.min(4,used.indexOf(f)+1):0)}
function requiredPitches(root,type){const definition=CHORD_TYPES[type]||CHORD_TYPES.major;return definition.intervals.filter(interval=>interval!==7||definition.intervals.length<=4).map(interval=>normalizePitch(root+interval))}
export function guitarVoicings(root=0,type='major',limit=8){
 const tones=new Set(chord(root,type).pitches),required=requiredPitches(root,type),candidates=[];
 for(let start=0;start<=9;start++){
  const allowed=OPEN.map(open=>{const frets=[];if(start===0&&tones.has(open))frets.push(0);for(let fret=Math.max(1,start);fret<=Math.max(4,start+3);fret++)if(tones.has(normalizePitch(open+fret)))frets.push(fret);return['x',...frets]});
  function walk(string,frets){
   if(string===6){const played=frets.filter(f=>f!=='x');if(played.length<3)return;const pitches=frets.map((f,i)=>f==='x'?null:normalizePitch(OPEN[i]+f)).filter(p=>p!==null);if(required.some(p=>!pitches.includes(p)))return;const numeric=played.filter(f=>f>0),span=numeric.length?Math.max(...numeric)-Math.min(...numeric):0;if(span>4)return;const first=frets.findIndex(f=>f!=='x'),bass=normalizePitch(OPEN[first]+frets[first]),rootBass=bass===normalizePitch(root),position=numeric.length?Math.min(...numeric):1,score=(rootBass?0:12)+span*4+frets.filter(f=>f==='x').length*8+numeric.reduce((a,b)=>a+b,0)/10+position*1.5;candidates.push({frets:[...frets],fingers:fingerNumbers(frets),startFret:position,bass,rootBass,score});return}
   for(const fret of allowed[string])walk(string+1,[...frets,fret]);
  }
  walk(0,[]);
 }
 const unique=new Map();candidates.sort((a,b)=>a.score-b.score).forEach(item=>{const key=item.frets.join('-');if(!unique.has(key))unique.set(key,item)});const spread=[...unique.values()],chosen=[];for(const item of spread){if(chosen.some(other=>Math.abs(other.startFret-item.startFret)<2&&other.rootBass===item.rootBass))continue;chosen.push(item);if(chosen.length===limit)break}return chosen.length?chosen:spread.slice(0,limit);
}
export function voicingDetails(root,type,voicing){const harmony=chord(root,type),names=spellChordNotes(root,type),played=voicing.frets.map((f,i)=>f==='x'?null:normalizePitch(OPEN[i]+f)).filter(p=>p!==null),included=harmony.pitches.filter(p=>played.includes(p)),omitted=harmony.pitches.filter(p=>!played.includes(p));return{included:included.map(p=>names[harmony.pitches.indexOf(p)]),omitted:omitted.map(p=>names[harmony.pitches.indexOf(p)]),position:voicing.startFret<=1?'Abierta / primera posición':`Zona del traste ${voicing.startFret}`,bass:names[harmony.pitches.indexOf(voicing.bass)]||'Nota del acorde'}}
