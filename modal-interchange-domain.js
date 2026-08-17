import {chord,normalizePitch} from './music-domain.js';
import {harmonizeMajor} from './harmony-domain.js';
import {LATIN_FLAT,INTL_FLAT} from './scale-domain.js';

const BORROWED={
 iv:{name:'Subdominante menor',roman:'iv',interval:5,type:'minor',reference:3,mood:'nostalgia y retorno'},
 flatIII:{name:'Mediante bemol',roman:'♭III',interval:3,type:'major',reference:2,mood:'apertura cinematográfica'},
 flatVI:{name:'Sexto grado bemol',roman:'♭VI',interval:8,type:'major',reference:5,mood:'amplitud dramática'},
 flatVII:{name:'Séptimo grado bemol',roman:'♭VII',interval:10,type:'major',reference:6,mood:'color rock y modal'},
 iiDim:{name:'Segundo disminuido',roman:'ii°',interval:2,type:'diminished',reference:1,mood:'impulso oscuro'}
};
const IDS=Object.keys(BORROWED);
export function borrowedChord(root=0,id='iv'){const safe=BORROWED[id]?id:'iv',meta=BORROWED[safe],built=chord(normalizePitch(root+meta.interval),meta.type),field=harmonizeMajor(root),majorPitches=new Set(field.map(item=>item.root)),alteredPitches=built.pitches.filter(pitch=>!majorPitches.has(pitch)),flatDegree=safe.startsWith('flat'),symbol=flatDegree?INTL_FLAT[built.root]+built.definition.suffix:built.symbol;return {...built,...meta,id:safe,symbol,notesLatin:built.pitches.map(pitch=>LATIN_FLAT[pitch]),reference:field[meta.reference],alteredPitches,alteredNotes:alteredPitches.map(pitch=>LATIN_FLAT[pitch])}}
export function borrowedPalette(root=0){return IDS.map(id=>borrowedChord(root,id))}
export function modalInterchangeJourney(root=0,id='iv'){const field=harmonizeMajor(root),borrowed=borrowedChord(root,id);let chords;if(borrowed.id==='iv')chords=[field[0],field[3],borrowed,field[0]];else if(borrowed.id==='flatVI')chords=[field[0],borrowed,borrowedChord(root,'flatVII'),field[0]];else if(borrowed.id==='flatVII')chords=[field[0],borrowed,field[3],field[0]];else if(borrowed.id==='flatIII')chords=[field[0],borrowed,field[3],field[0]];else chords=[field[0],borrowed,field[4],field[0]];return {borrowed,chords,labels:['Centro tonal','Color prestado','Dirección','Regreso']}}
