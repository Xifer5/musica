import {chord,normalizePitch} from './music-domain.js';
import {harmonizeMajor} from './harmony-domain.js';
import {LATIN_FLAT,INTL_FLAT} from './scale-domain.js';

export function tritoneTargets(root=0){return harmonizeMajor(root).slice(0,6).map((target,index)=>({degree:index+1,roman:target.roman,target}))}
export function tritoneSubstitution(root=0,targetDegree=1){const safe=Number(targetDegree)>=1&&Number(targetDegree)<=6?Number(targetDegree):1,field=harmonizeMajor(root),target=field[safe-1],original=chord(normalizePitch(target.root+7),'dominant7'),raw=chord(normalizePitch(original.root+6),'dominant7'),substitute={...raw,symbol:INTL_FLAT[raw.root]+'7',notesLatin:raw.pitches.map(pitch=>LATIN_FLAT[pitch]),notesIntl:raw.pitches.map(pitch=>INTL_FLAT[pitch])},sharedPitches=original.pitches.filter(pitch=>substitute.pitches.includes(pitch)).sort((a,b)=>a-b);return {targetDegree:safe,target,original,substitute,sharedPitches,sharedLatin:sharedPitches.map(pitch=>LATIN_FLAT[pitch]),roman:`subV/${target.roman}`,bassMotion:`${substitute.symbol} → ${target.symbol}`}}
export function tritoneJourney(root=0,targetDegree=1){const field=harmonizeMajor(root),analysis=tritoneSubstitution(root,targetDegree);return {analysis,chords:[field[0],analysis.substitute,analysis.target],labels:['Centro tonal','Sustituto tritonal','Resolución cromática']}}
