import {normalizePitch} from './music-domain.js'
const BLACK=new Set([1,3,6,8,10])
const SHARP=['Do','Do♯','Re','Re♯','Mi','Fa','Fa♯','Sol','Sol♯','La','La♯','Si']
const MAJOR=[0,2,4,5,7,9,11]
export function pianoOctave(root=0,names=SHARP,intervals=MAJOR){
 const safeRoot=normalizePitch(root),scale=new Set(intervals.map(step=>normalizePitch(safeRoot+step)))
 return Array.from({length:13},(_,index)=>{const pitch=index%12;return{index,pitch,midi:60+index,name:names[pitch]||SHARP[pitch],isBlack:BLACK.has(pitch),inScale:scale.has(pitch),isRoot:pitch===safeRoot}})
}
export function pianoAriaLabel(key){return`${key.name}${key.index===12?'5':'4'}${key.isRoot?', tónica':key.inScale?', pertenece a la escala':''}`}
