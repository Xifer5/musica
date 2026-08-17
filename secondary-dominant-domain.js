import {chord,normalizePitch} from './music-domain.js';
import {harmonizeMajor} from './harmony-domain.js';

const TARGETS=[{degree:2,roman:'ii'},{degree:3,roman:'iii'},{degree:4,roman:'IV'},{degree:5,roman:'V'},{degree:6,roman:'vi'}];
export function secondaryTargets(root=0){const field=harmonizeMajor(root);return TARGETS.map(meta=>({...meta,chord:field[meta.degree-1]}))}
export function secondaryDominant(root=0,targetDegree=5){const safe=TARGETS.some(item=>item.degree===Number(targetDegree))?Number(targetDegree):5,field=harmonizeMajor(root),target=field[safe-1],dominantRoot=normalizePitch(target.root+7),built=chord(dominantRoot,'dominant7'),scalePitches=new Set(field.map(item=>item.root)),chromaticPitches=built.pitches.filter(pitch=>!scalePitches.has(pitch));return {...built,targetDegree:safe,target,roman:`V/${target.roman}`,chromaticPitches,chromaticNotes:chromaticPitches.map(pitch=>built.notesLatin[built.pitches.indexOf(pitch)]),resolutionLabel:`${built.symbol} → ${target.symbol}`}}
export function secondaryJourney(root=0,targetDegree=5){const field=harmonizeMajor(root),secondary=secondaryDominant(root,targetDegree);return {secondary,chords:[field[0],secondary,secondary.target],roles:['Centro tonal','Tensión aplicada',`Resolución en ${secondary.target.roman}`]}}
