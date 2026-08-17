import {chord,normalizePitch} from './music-domain.js';
import {harmonizeMajor} from './harmony-domain.js';
import {borrowedChord} from './modal-interchange-domain.js';
import {tritoneSubstitution} from './tritone-domain.js';

const STRATEGIES=[
 {id:'secondary',name:'Dominante secundaria',summary:'Convierte el acorde anterior en dominante del destino.',formula:'I · V/vi · vi · IV'},
 {id:'modal',name:'Intercambio modal',summary:'Sustituye IV por iv del menor paralelo.',formula:'I · IV · iv · I'},
 {id:'tritone',name:'Sustitución tritonal',summary:'Cambia V7 por subV7 y conserva sus notas guía.',formula:'ii · subV/I · I'}
];
export function reharmonizationStrategies(){return STRATEGIES.map(item=>({...item}))}
export function reharmonize(root=0,strategy='secondary'){
 const safe=STRATEGIES.some(item=>item.id===strategy)?strategy:'secondary',meta=STRATEGIES.find(item=>item.id===safe),field=harmonizeMajor(root);let original,variant,changedIndex,destination;
 if(safe==='secondary'){destination=field[5];const applied=chord(normalizePitch(destination.root+7),'dominant7');original=[field[0],field[2],destination,field[3]];variant=[field[0],applied,destination,field[3]];changedIndex=1}
 else if(safe==='modal'){destination=field[0];original=[field[0],field[3],field[3],destination];variant=[field[0],field[3],borrowedChord(root,'iv'),destination];changedIndex=2}
 else{destination=field[0];const dominant=chord(normalizePitch(root+7),'dominant7'),substitute=tritoneSubstitution(root,1).substitute;original=[field[1],dominant,destination];variant=[field[1],substitute,destination];changedIndex=1}
 return {root,strategy:safe,meta,original,variant,changedIndex,destination,changed:{before:original[changedIndex],after:variant[changedIndex]}};
}
