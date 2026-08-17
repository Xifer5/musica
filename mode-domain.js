import {scale} from './scale-domain.js?v=2';
export const MODES={
 ionian:{order:1,name:'Jónico',family:'Mayor',characteristic:'7 mayor',degree:'7',mood:'Estable y luminoso',use:'Resolución tonal, melodías diatónicas y armonía mayor.'},
 dorian:{order:2,name:'Dórico',family:'Menor',characteristic:'6 mayor',degree:'6',mood:'Menor con impulso',use:'Funk, jazz modal, rock y folk.'},
 phrygian:{order:3,name:'Frigio',family:'Menor',characteristic:'♭2',degree:'♭2',mood:'Oscuro y tenso',use:'Flamenco, metal y colores mediterráneos.'},
 lydian:{order:4,name:'Lidio',family:'Mayor',characteristic:'♯4',degree:'♯4',mood:'Abierto y suspendido',use:'Música cinematográfica, fusión y pasajes expansivos.'},
 mixolydian:{order:5,name:'Mixolidio',family:'Mayor',characteristic:'♭7',degree:'♭7',mood:'Mayor con carácter blues',use:'Rock, blues, folk y dominantes estáticos.'},
 aeolian:{order:6,name:'Eólico',family:'Menor',characteristic:'♭6',degree:'♭6',mood:'Menor y melancólico',use:'Canciones en tonalidad menor y progresiones naturales.'},
 locrian:{order:7,name:'Locrio',family:'Disminuida',characteristic:'♭5',degree:'♭5',mood:'Inestable y áspero',use:'Pasajes experimentales y acordes semidisminuidos.'}
};
export function mode(root=0,id='dorian'){const definition=MODES[id]||MODES.dorian;return {...scale(root,id),id,mode:definition,characteristicIndex:definition.degree}}
export function compareToIonian(id='dorian'){const target=mode(0,id),ionian=mode(0,'ionian');return target.definition.degrees.map((degree,index)=>({degree,changed:degree!==ionian.definition.degrees[index]}))}
