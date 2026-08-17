import {STANDARD_TUNING,noteAtFret} from './guitar-foundations-domain.js';
const LATIN=['Do','Do♯','Re','Re♯','Mi','Fa','Fa♯','Sol','Sol♯','La','La♯','Si'];
const INTL=['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'];
export const MARKER_FRETS=[3,5,7,9,12];
export function pitchName(pitch,notation='latin'){return(notation==='international'?INTL:LATIN)[((Number(pitch)||0)%12+12)%12]}
export function fretboard(maxFret=12){const safe=Math.min(24,Math.max(1,Number(maxFret)||12));return[...STANDARD_TUNING].reverse().map(string=>({string:string.string,open:string,notes:Array.from({length:safe+1},(_,fret)=>noteAtFret(string.string,fret))}))}
export function positionsForPitch(pitch,maxFret=12){const target=((Number(pitch)||0)%12+12)%12;return fretboard(maxFret).flatMap(row=>row.notes.filter(note=>note.pitch===target))}
export function findPosition(stringNumber,fret){const note=noteAtFret(stringNumber,fret);return{...note,latin:pitchName(note.pitch),intl:pitchName(note.pitch,'international')}}
export function quizTargets(){return[{pitch:0,label:'Do / C'},{pitch:4,label:'Mi / E'},{pitch:7,label:'Sol / G'},{pitch:9,label:'La / A'},{pitch:2,label:'Re / D'}]}
export function isTarget(position,pitch){return findPosition(position.string,position.fret).pitch===Number(pitch)}
