import {chord} from './music-domain.js';
const OPEN_CHORDS={
 em:{root:4,type:'minor',name:'Mi menor',frets:[0,2,2,0,0,0],fingers:[0,2,3,0,0,0],difficulty:1,tip:'Deja sonar las seis cuerdas.'},
 am:{root:9,type:'minor',name:'La menor',frets:['x',0,2,2,1,0],fingers:[0,0,2,3,1,0],difficulty:1,tip:'No toques la sexta cuerda.'},
 c:{root:0,type:'major',name:'Do mayor',frets:['x',3,2,0,1,0],fingers:[0,3,2,0,1,0],difficulty:2,tip:'Arquea los dedos para liberar la primera cuerda.'},
 g:{root:7,type:'major',name:'Sol mayor',frets:[3,2,0,0,0,3],fingers:[2,1,0,0,0,3],difficulty:2,tip:'Mantén relajado el pulgar detrás del mástil.'},
 d:{root:2,type:'major',name:'Re mayor',frets:['x','x',0,2,3,2],fingers:[0,0,0,1,3,2],difficulty:2,tip:'Empieza el rasgueo desde la cuarta cuerda.'}
};
export const TRANSITIONS=[
 {id:'em-am',from:'em',to:'am',label:'Em → Am',hint:'Desplaza la forma de dos dedos y añade el índice.'},
 {id:'am-c',from:'am',to:'c',label:'Am → C',hint:'Conserva el índice y mueve el anular a la quinta cuerda.'},
 {id:'c-g',from:'c',to:'g',label:'C → G',hint:'Mueve primero los dedos graves y después el anular.'},
 {id:'g-d',from:'g',to:'d',label:'G → D',hint:'Relaja la mano antes de formar el triángulo de Re.'}
];
export function beginnerChords(){return Object.entries(OPEN_CHORDS).map(([id,item])=>({id,...item,...chord(item.root,item.type),frets:item.frets,fingers:item.fingers,name:item.name,difficulty:item.difficulty,tip:item.tip}))}
export function beginnerChord(id='em'){return beginnerChords().find(item=>item.id===id)||beginnerChords()[0]}
export function transition(id='em-am'){const meta=TRANSITIONS.find(item=>item.id===id)||TRANSITIONS[0];return{...meta,fromChord:beginnerChord(meta.from),toChord:beginnerChord(meta.to)}}
export function practiceSequence(){return['em','am','c','g','d'].map(beginnerChord)}
